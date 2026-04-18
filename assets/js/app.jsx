    const { useState, useEffect, useRef, useCallback } = React;

    /* ============================================================
       DATA
    ============================================================ */

    const EXPERIENCE = [
      {
        role: 'Graduate Assistant — Assistant Program Coordinator',
        dept: 'Honors College',
        org:  'Bowling Green State University',
        loc:  'Bowling Green, OH',
        period: 'August 2024 – Present',
        bullets: [
          'Built academic engagement, belonging, and inclusion among 500+ Honors Learning Community students by coordinating large-scale events, experiential trips, and workshops.',
          'Promoted identity exploration and strengthened community connection by supervising Honors Students of Color and Honors Learning Community Fellows through program planning, mentorship, and dialogue-based initiatives.',
          'Enhanced co-curricular programming aligned with college learning outcomes by collaborating with faculty, professional staff, and student leaders.',
          'Strengthened Honors student success by advising undecided students on major and career pathways and leading a student team to produce an Honors Project advising video series.',
          'Planned and coordinated Senior Recognition graduation ceremony for approximately 90 students graduating with University Honors.',
          'Served as liaison between students and administration, providing individualized support and maintaining effective communication.',
        ],
      },
      {
        role: 'Academic Advisor',
        dept: 'Office of Academic Advising and Planning',
        org:  'Bowling Green State University',
        loc:  'Bowling Green, OH',
        period: 'August – December 2025',
        bullets: [
          'Strengthened student success and retention for 50+ students through proactive advising, course registration, and referrals to key campus resources.',
          'Led new-student onboarding and enrollment readiness by delivering advising support during campaigns and one-on-one enrollment appointments.',
          'Optimized advising operations by preparing materials, maintaining accurate student documentation, and contributing to daily office workflow.',
        ],
      },
      {
        role: 'Summer Conference Assistant',
        dept: 'Residence Life',
        org:  'Bowling Green State University',
        loc:  'Bowling Green, OH',
        period: 'May – August 2025',
        bullets: [
          'Improved guest experience by providing front-line service and clearly communicating Residence Life policies.',
          'Simplified conference operations for 3,000+ guests across 50+ schools and faith-based organizations by coordinating check-in/out and managing access control.',
          'Strengthened facility readiness across 8 residence halls, coordinating turnovers from summer housing to fall move-in.',
        ],
      },
      {
        role: 'Advising & Program Intern',
        dept: 'Student-Athlete Services',
        org:  'Bowling Green State University',
        loc:  'Bowling Green, OH',
        period: 'January – May 2025',
        bullets: [
          'Supported student-athlete success and NCAA compliance readiness by reinforcing compliance education and monitoring academic progress across multiple sports.',
          'Co-led planning and execution of the Ziggy Awards recognizing outstanding student-athletes for academic and athletic excellence.',
          'Advised diverse student-athlete population on course planning, academic progress, and accountability habits.',
        ],
      },
      {
        role: 'National Service — Administrative Assistant',
        dept: 'College of Distance Education',
        org:  'University of Cape Coast',
        loc:  'Cape Coast, Ghana — West Africa',
        period: 'August 2018 – August 2019',
        bullets: [
          'Upheld academic integrity by proctoring university examinations and ensuring adherence to institutional policies.',
          'Strengthened student support by liaising between the university, education centers, and students on policies and registration.',
          'Supported efficient office operations and dispatched official correspondence accurately.',
        ],
      },
      {
        role: 'Customer Service & Sales Intern',
        dept: '',
        org:  'Telecel Ghana (formerly Vodafone Ghana)',
        loc:  'Takoradi, Ghana — West Africa',
        period: 'August – September 2015 & 2016',
        bullets: [
          'Expanded Telecel Cash enrollment and regional membership by leading and coaching a team of sales executives.',
          'Enhanced customer satisfaction by delivering front-line support and resolving complaints professionally.',
          'Reviewed transaction activity of 300+ Telecel agents, flagging discrepancies and enforcing accountability standards.',
        ],
      },
    ];

    const PRESENTATIONS = [
      { title: 'Rethinking Health Insurance Policies for International Students through an Equity Lens', event: 'Ohio College Personnel Association (OCPA) Annual Conference', role: 'Presenter', date: 'February 2026' },
      { title: 'Navigating Uncertainty as International Students', event: 'ACPA Master\'s Student Conference', role: 'Panel Contributor', date: 'October 2025' },
      { title: 'Effective and Change-Oriented Survey Design', event: 'USC Race and Equity Center', role: 'Participant', date: 'September 2025' },
    ];

    const INVOLVEMENT = [
      { role: 'Ambassador', org: 'ACPA Graduate Students & New Professionals (GSNP)', date: 'February 2025' },
      { role: 'Attendee', org: 'ACPA Annual Convention — Long Beach, California', date: 'February 2025' },
      { role: 'Certificate', org: 'Leadership, Entrepreneurship and Career Development', date: 'August 2023' },
    ];

    const SKILLS = [
      'Safe Zone Training','Title IX & Mandatory Reporting','Anti-Bullying in Schools',
      'FERPA Training','ALICE Training','Navigate','PeopleSoft','Degree Audits (DARS)',
      'Canvas','StarRez','Microsoft Office Suite','Qualtrics','SharePoint',
    ];

    const PERSONAL_VALUES = [
      { name: 'Relationship & Community', icon: 'fa-hands-holding-heart', desc: 'An intentional practice dedicated to fostering connections that are mutually sustaining and deeply rooted in belonging — shaped by cultural roots that teach collective responsibility.' },
      { name: 'Integrity',               icon: 'fa-shield-halved',        desc: 'An unwavering commitment to principles — doing what is right when no one is watching, owning mistakes, crediting others, and honoring every commitment made.' },
      { name: 'Diversity',               icon: 'fa-people-group',         desc: 'Embracing culture, language, race, nationality, gender, and lived experience without reducing people to singular narratives — a stance of humility and genuine curiosity.' },
      { name: 'Autonomy',                icon: 'fa-compass',              desc: 'Self-governance and critical thinking, ensuring personal actions remain consistent with values and informed decisions — forged by the choice to pursue education abroad.' },
      { name: 'Faith',                   icon: 'fa-seedling',             desc: 'A profound way of living — embodying confidence and commitment to purpose amid uncertainty, built through seasons of intense adaptation and challenge.' },
    ];

    const PROFESSIONAL_VALUES = [
      { name: 'Service',             icon: 'fa-hand-holding-hand', desc: 'An ethic of care expressed through consistent, reliable presence — proactively removing barriers and connecting students to resources as a collaborative endeavor.' },
      { name: 'Collaboration',       icon: 'fa-handshake',         desc: 'A deliberate practice to build shared ownership around student needs — coordinating across offices to ensure students move through their journeys with clarity and confidence.' },
      { name: 'Equity & Fairness',   icon: 'fa-scale-balanced',    desc: 'Acknowledging that students begin from different starting points — designing support and advocating for policies that honor those diverse realities and remove institutional barriers.' },
      { name: 'Transparency',        icon: 'fa-eye',               desc: 'Proactive communication of policies, reasoning, and decisions — fostering open dialogue with students and colleagues to build environments of trust and informed agency.' },
      { name: 'Continuous Learning', icon: 'fa-book-open',         desc: 'Pursuing ongoing professional development, reflective practice, and assessment skills so advising work improves over time and remains responsive to evolving student needs.' },
    ];

    const COMPETENCIES = [
      {
        id: 'as', title: 'Advising & Supporting', abbr: 'AS', level: 'exemplary',
        summary: 'Documents advanced competency in advising through practicum experiences at the Office of Academic Advising & Planning, Student-Athlete Services, and the Honors College video profile project — demonstrating culturally responsive communication, theory-informed practice, crisis referral, and equitable advising philosophy.',
        activities: [
          { title: 'Fall Practicum — Office of Academic Advising & Planning (Fall 2025)', desc: 'Advised and supported a caseload of 29 undecided Bachelor of Science students through major exploration, academic planning, and registration guidance. Conducted one-on-one appointments, drop-in advising, and workshops. Identified students in academic distress and followed crisis referral protocols, connecting them to counseling, Dean of Students, and financial aid.' },
          { title: 'Spring Practicum — Student-Athlete Services (Spring 2025)', desc: 'Advised student-athletes navigating academic eligibility, NCAA compliance, and identity-related transitions. Applied Sanford\'s Challenge and Support Theory and Schlossberg\'s Transition Theory. Leveraged an international background to build strong connections with students navigating dual identities.' },
          { title: 'Honors College Video Profile Project', desc: 'Developed structured interview questions for a video initiative documenting Honors student experiences — designed to promote authentic student voice, recognize diverse paths through the Honors Program, and serve as an accessible virtual advising resource.' },
        ],
        artifacts: [
          { name: 'Advising Philosophy Statement', type: 'PDF' },
          { name: 'Fall Practicum Presentation (OAAP)', type: 'PPTX' },
          { name: 'Student-Athlete Practicum Presentation', type: 'PPTX' },
          { name: 'Honors Project Interview Questions', type: 'DOCX' },
        ],
      },
      {
        id: 'sji', title: 'Social Justice & Inclusion', abbr: 'SJI', level: 'exemplary',
        summary: 'Demonstrates exemplary practice through a rigorous scholarly equity audit examining BGSU\'s mandatory health insurance policy, application of Critical Race Theory and institutional accountability frameworks, and public advocacy at the 2026 OCPA Annual Conference.',
        activities: [
          { title: 'Equity Audit — BGSU Health Insurance Policy (CSP 6035)', desc: 'Conducted a scholarly equity audit documenting how BGSU\'s mandatory automatic enrollment, vague waiver process, and fee payment structure disproportionately burden international students. Drew on McNair, Bensimon & Malcom-Piqueux (2020), Victor Ray (2023), and Valencia (2012, 2019). Proposed concrete recommendations including insurance literacy education, waiver reform, international student representation on policy bodies, and a peer health navigator program.' },
          { title: 'OCPA Conference Presentation — February 2026', desc: 'Presented findings on health equity and international student experiences at the Ohio College Personnel Association Annual Conference — contributing to statewide professional discourse on dismantling structural inequities, and offering consultation to student affairs professionals on strategies to dismantle systems of oppression in institutional policy.' },
        ],
        artifacts: [
          { name: 'Final Equity Audit Document', type: 'DOCX' },
          { name: 'OCPA Conference Presentation Slides', type: 'PPTX' },
        ],
      },
      {
        id: 'lead', title: 'Leadership', abbr: 'LEAD', level: 'exemplary',
        summary: 'Demonstrates advanced leadership through institutionalizing mentoring systems, building feedback cultures, developing a sustained co-curricular curriculum, and leading student travel experiences across the country.',
        activities: [
          { title: 'HSOC Event Planning Form — Mentoring Instrument', desc: 'Developed a comprehensive planning tool to mentor Honors Students of Color leaders through every phase of event management — from articulating learning outcomes and building procurement budgets to designing publicity strategies, coordinating logistics, and completing post-event reflection. An institutionalized mentoring structure embedded into programming practice.' },
          { title: 'Community Meals Co-Curricular Series', desc: 'Coordinated a sustained programming curriculum covering financial literacy, mental health and wellness, time management, post-graduation financial planning, CV writing, LinkedIn development, and interview preparation. Collaborated with external partners including PNC Bank and the Kuhlin Hub. Built feedback mechanisms directly into each program design.' },
        ],
        artifacts: [
          { name: 'Community Meal Financial Literacy Planning Doc', type: 'DOCX' },
          { name: 'March Community Meal Email Template', type: 'DOCX' },
          { name: 'HSOC Event Planning Form', type: 'DOCX' },
        ],
      },
      {
        id: 'aer', title: 'Assessment, Evaluation & Research', abbr: 'AER', level: 'proficient',
        summary: 'Proficient in designing sustainable data collection systems, applying quantitative and qualitative research methods, and using evidence to inform student affairs practice and eliminate redundant programming.',
        activities: [
          { title: 'Statistics & Research Methods Coursework (EDFI 6410)', desc: 'Developed skills in descriptive and inferential statistics, hypothesis testing, and interpreting statistical results in published research. Applied qualitative, quantitative, and mixed-methods research design frameworks across course assignments.' },
          { title: 'Assessment Systems — Qualtrics, MS Forms, SharePoint', desc: 'Designed and implemented pre/post-event feedback systems, mid-semester check-ins, and a "pulse check" end-of-semester reflection tool to evaluate program quality and capture student interest. Used resulting data to eliminate redundant programming and make data-informed resource allocation decisions.' },
        ],
        artifacts: [],
      },
      {
        id: 'pef', title: 'Personal & Ethical Foundations', abbr: 'PEF', level: 'proficient',
        summary: 'Developed proficiency in managing competing professional and personal priorities, applying ethical judgment in ambiguous situations, and maintaining congruence between personal values and professional practice.',
        activities: [
          { title: 'Balancing Multiple Graduate Roles', desc: 'Intentionally structured time across graduate assistantship, practicum placements, coursework, and personal life — developing capacity to identify sources of dissonance, seek appropriate support, and build sustainable habits that maintain both wellbeing and professional commitments.' },
          { title: 'Ethical Practice with Confidential Student Information', desc: 'Handled confidential student data and navigated follow-up communication requiring sound ethical judgment. Drew on both personal values and ACPA/NASPA professional standards to navigate tensions between institutional procedures and ethical instincts — developing a mission statement through PCA writing that reflects this integration.' },
        ],
        artifacts: [],
      },
      {
        id: 'sld', title: 'Student Learning & Development', abbr: 'SLD', level: 'proficient',
        summary: 'Enhanced proficiency in creating intentional learning experiences, designing outcomes-aligned programs, and applying student development theory to practice within the Honors College and through CSP coursework.',
        activities: [
          { title: 'Learning Goals for Honors College Events & Trips', desc: 'Developed specific learning goals for trips, events, and programs — considering educational outcomes from museums, travel, and co-curricular activities. Collected pre-trip reflections and post-activity assessments tied explicitly to stated goals, using student feedback to continuously improve programming alignment with student needs.' },
          { title: 'CSP 6040 — Curricular Approach to Student Affairs', desc: 'Explored alignment of learning outcomes with institutional mission, strategic priorities, and core values. Evolved from participation in programming to critically analyzing the purpose and developmental intention behind programs, bridging theory to practice through real Honors College contexts.' },
        ],
        artifacts: [],
      },
      {
        id: 'vph', title: 'Values, Philosophy & History', abbr: 'VPH', level: 'foundational',
        summary: 'Built foundational understanding of the philosophical, historical, and value frameworks underpinning the student affairs profession through policy analysis and functional area research.',
        activities: [
          { title: 'Historical Timeline — FERPA Act & Obama College Scorecard', desc: 'Created a historical timeline examining major policy developments shaping the student-institutional relationship.' },
          { title: 'Counseling Services Functional Area Research — CSP 6010', desc: 'Researched counseling services as a foundational functional area, examining its historical roots, philosophical grounding, and place in the broader student affairs profession.' },
        ],
        artifacts: [],
      },
      {
        id: 'lpg', title: 'Law, Policy & Governance', abbr: 'LPG', level: 'foundational',
        summary: 'Gained foundational understanding of governance structures, institutional policies, and legal expectations shaping student affairs practice through coursework and applied experience.',
        activities: [
          { title: 'CSP 6040 — Governance & Institutional Structures', desc: 'Built foundational knowledge of how higher education institutions are shaped by governance, policy, mission, and organizational structures — identifying stakeholders and policymakers who influence institutional priorities.' },
          { title: 'Honors LC Travel Guidelines & Compliance Documentation', desc: 'Provided travel guidelines, medical/liability forms, and conduct-related travel information — developing understanding of how institutional policy shapes student participation, safety, accountability, and conduct.' },
        ],
        artifacts: [],
      },
      {
        id: 'ohr', title: 'Organizational & Human Resource', abbr: 'OHR', level: 'foundational',
        summary: 'Developed foundational knowledge in ethical hiring practices, organizational budget management, and human resource decision-making through committee work and program planning.',
        activities: [
          { title: 'Staff Search Committee — Honors LC & School of Media', desc: 'Served on a search committee conducting phone interviews and reviewing candidates against a structured rubric, collaborating across offices to reach an equitable hiring decision.' },
          { title: 'Scholarship Review Board & Budget Management', desc: 'Participated in the Honors LC scholarship review board and constructed event budgets — soliciting vendor quotes across food, logistics, transportation, hotels, and conference materials to maintain fiscal discipline.' },
        ],
        artifacts: [],
      },
    ];

    const ARTIFACTS = [
      { id:1,  name:'Advising Philosophy Statement',             comp:'Advising & Supporting',       abbr:'AS',   level:'exemplary', desc:'A personal advising philosophy rooted in equity-mindedness, culturally responsive practice, relational trust, and student empowerment.', type:'PDF' },
      { id:2,  name:'Fall Practicum Presentation (OAAP)',        comp:'Advising & Supporting',       abbr:'AS',   level:'exemplary', desc:'Slide presentation from the Fall 2025 practicum at the Office of Academic Advising and Planning showcasing caseload advising work.', type:'PPTX' },
      { id:3,  name:'Student-Athlete Practicum Presentation',    comp:'Advising & Supporting',       abbr:'AS',   level:'exemplary', desc:'PowerPoint documenting Spring 2025 practicum at Student-Athlete Services — goal assessment, professional competencies, and supervisor reflections.', type:'PPTX' },
      { id:4,  name:'Honors Project Interview Questions',        comp:'Advising & Supporting',       abbr:'AS',   level:'exemplary', desc:'Structured interview question template for the Honors Project video profile initiative, facilitating meaningful student self-reflection.', type:'DOCX' },
      { id:5,  name:'Final Equity Audit Document',               comp:'Social Justice & Inclusion',  abbr:'SJI',  level:'exemplary', desc:'Scholarly equity audit examining BGSU\'s mandatory health insurance policy and its disproportionate impact on international students.', type:'DOCX' },
      { id:6,  name:'OCPA Conference Presentation Slides',       comp:'Social Justice & Inclusion',  abbr:'SJI',  level:'exemplary', desc:'Presentation slides from the February 2026 OCPA Annual Conference on rethinking health insurance equity for international students.', type:'PPTX' },
      { id:7,  name:'Community Meal Financial Literacy Doc',     comp:'Leadership',                  abbr:'LEAD', level:'exemplary', desc:'Comprehensive event planning document for the March 2026 Community Meal including a gallery walk activity on financial decision-making.', type:'DOCX' },
      { id:8,  name:'March Community Meal Email Template',       comp:'Leadership',                  abbr:'LEAD', level:'exemplary', desc:'Student outreach email template created for the March 2026 Community Meal financial literacy program.', type:'DOCX' },
      { id:9,  name:'HSOC Event Planning Form',                  comp:'Leadership',                  abbr:'LEAD', level:'exemplary', desc:'Comprehensive mentoring tool developed to guide Honors Students of Color leaders through every phase of event management.', type:'DOCX' },
      { id:10, name:'Capstone Research Presentation',            comp:'Research',                    abbr:'RES',  level:'exemplary', desc:'Capstone graduate research presentation synthesizing findings on equity, access, and student success in higher education — presented as part of M.Ed. program completion at BGSU.', type:'PPTX', file:'assets/docs/1 Ophelia Ivy Mensah Capstone.pptx', featured:true },
    ];

    const LEVEL_STYLES = {
      exemplary:    { badge: 'bg-brown text-ivory',             pill: 'bg-brown/10 text-brown border border-brown/30' },
      proficient:   { badge: 'bg-muted text-ivory',             pill: 'bg-muted/10 text-muted border border-muted/30' },
      foundational: { badge: 'border border-brown text-brown bg-transparent', pill: 'bg-cream text-muted' },
    };

    const IMAGE_LIBRARY = {
      chicagoPortrait: {
        src: 'assets/images/CHICAGO.Jpeg',
        alt: 'Ophelia Ivy Mensah smiling in front of Cloud Gate in Chicago.',
        caption: 'Chicago experiential learning trip',
      },
      chicagoGroup: {
        src: 'assets/images/CHICAGO 1.jpeg',
        alt: 'Ophelia with a student group visiting Cloud Gate in Chicago.',
        caption: 'Travel-based community building',
      },
      honorsLounge: {
        src: 'assets/images/IMG_6832.JPG',
        alt: 'Students gathered in a campus lounge during an Honors community event.',
        caption: 'Honors Learning Community programming',
      },
      bgsuMascot: {
        src: 'assets/images/IMG_7415.JPEG',
        alt: 'Ophelia Ivy Mensah posing with the BGSU mascot and a colleague.',
        caption: 'Campus pride and student engagement',
      },
      marsDiversity: {
        src: 'assets/images/IMG_7610.JPG',
        alt: 'A diverse student affairs group standing together in front of a presentation screen.',
        caption: 'Student affairs leadership and collaboration',
      },
      museumPeers: {
        src: 'assets/images/IMG_6897.jpg',
        alt: 'Ophelia with peers seated in front of museum exhibits during a learning experience.',
        caption: 'Informal learning and reflection',
      },
      museumSelfie: {
        src: 'assets/images/IMG_2565.JPG',
        alt: 'Ophelia with peers inside a museum during an educational visit.',
        caption: 'Experiential learning off campus',
      },
      stadiumTrip: {
        src: 'assets/images/img_0293-converted.jpg',
        alt: 'A large BGSU group photo at a stadium during a student trip.',
        caption: 'Large-scale student trip coordination',
      },
      ocpaBackdropSolo: {
        src: 'assets/images/img_2425-converted.jpg',
        alt: 'Ophelia standing in front of an ACPA conference backdrop.',
        caption: 'Professional conference participation',
      },
      ocpaBackdropGroup: {
        src: 'assets/images/img_2424-converted.jpg',
        alt: 'Ophelia with colleagues in front of an ACPA conference backdrop.',
        caption: 'Professional network and collaboration',
      },
      honorsDiscussion: {
        src: 'assets/images/img_1113-converted.jpg',
        alt: 'Students listening during a discussion-based community event in an Honors lounge.',
        caption: 'Dialogue-centered student engagement',
      },
      ocpaPresentation: {
        src: 'assets/images/img_5595-2png-converted.jpg',
        alt: 'Ophelia standing near a projected OCPA presentation slide.',
        caption: 'Conference presentation on equity',
      },
    };

    const HERO_SUPPORT_IMAGES = ['ocpaPresentation', 'honorsLounge', 'stadiumTrip'];

    const GALLERY_SECTIONS = [
      {
        id:'events',
        label:'Events & Programs',
        icon:'fa-calendar-star',
        intro:'Programs designed to build belonging, curiosity, and meaningful student connection.',
        photoIds:['honorsLounge', 'honorsDiscussion', 'marsDiversity'],
      },
      {
        id:'professional',
        label:'Professional Development',
        icon:'fa-briefcase',
        intro:'Moments from conferences, presentations, and collaborative learning across the profession.',
        photoIds:['ocpaBackdropSolo', 'ocpaBackdropGroup', 'ocpaPresentation'],
      },
      {
        id:'campus',
        label:'Campus Life',
        icon:'fa-building-columns',
        intro:'Snapshots of student life, peer connection, and the everyday work of building community.',
        photoIds:['bgsuMascot', 'museumPeers', 'museumSelfie'],
      },
      {
        id:'conferences',
        label:'Conferences & Travel',
        icon:'fa-globe',
        intro:'Experiential trips and professional travel that widened perspective and deepened practice.',
        photoIds:['chicagoPortrait', 'chicagoGroup', 'stadiumTrip'],
      },
    ];

    const COMPETENCY_PHOTOS = {
      as: ['honorsLounge', 'honorsDiscussion'],
      sji: ['ocpaPresentation', 'ocpaBackdropSolo'],
      lead: ['stadiumTrip', 'marsDiversity'],
      aer: ['honorsDiscussion'],
      pef: ['museumPeers'],
      sld: ['museumSelfie', 'honorsLounge'],
      vph: ['museumSelfie'],
      lpg: ['ocpaBackdropGroup'],
      ohr: ['bgsuMascot'],
    };

    /* ============================================================
       HOOKS
    ============================================================ */

    function useHashRouter() {
      const get = () => window.location.hash.replace(/^#\/?/, '') || 'home';
      const [page, setPage] = useState(get);
      useEffect(() => {
        const h = () => setPage(get());
        window.addEventListener('hashchange', h);
        return () => window.removeEventListener('hashchange', h);
      }, []);
      const navigate = useCallback(p => { window.location.hash = `#${p}`; }, []);
      return { page, navigate };
    }

    function useHighContrast() {
      const [on, setOn] = useState(() => localStorage.getItem('hc') === '1');
      useEffect(() => {
        document.documentElement.dataset.hc = on ? '1' : '0';
        localStorage.setItem('hc', on ? '1' : '0');
      }, [on]);
      return [on, () => setOn(v => !v)];
    }

    /* ============================================================
       SHARED COMPONENTS
    ============================================================ */

    function SkipLink() {
      return <a href="#main" className="skip-link">Skip to main content</a>;
    }

    function Badge({ level }) {
      return (
        <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase ${LEVEL_STYLES[level].badge}`}>
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </span>
      );
    }

    function Navbar({ page, navigate, hc, toggleHc }) {
      const [open, setOpen] = useState(false);
      const btnRef = useRef(null);

      const LINKS = [
        { id:'home', label:'Home' }, { id:'about', label:'About Me' },
        { id:'resume', label:'Resume' }, { id:'competencies', label:'Competencies' },
        { id:'artifacts', label:'Artifacts' }, { id:'gallery', label:'Gallery' },
        { id:'contact', label:'Contact' },
      ];

      useEffect(() => {
        if (!open) return;
        const esc = e => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }};
        document.addEventListener('keydown', esc);
        return () => document.removeEventListener('keydown', esc);
      }, [open]);

      const go = id => { navigate(id); setOpen(false); window.scrollTo(0,0); };

      return (
        <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-cream shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              <button onClick={() => go('home')}
                className="font-serif text-base md:text-lg font-bold text-ink hover:text-brown transition-colors"
                aria-label="Ophelia Ivy Mensah — return to home">
                Ophelia Ivy Mensah
              </button>

              <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5">
                {LINKS.map(l => (
                  <button key={l.id} onClick={() => go(l.id)}
                    aria-current={page === l.id ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors py-1 ${page === l.id ? 'text-brown border-b-2 border-brown' : 'text-muted hover:text-brown'}`}>
                    {l.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-1">
                <button onClick={toggleHc} aria-pressed={hc}
                  aria-label={hc ? 'Disable high-contrast mode' : 'Enable high-contrast mode'}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors text-muted hover:text-brown" title="Toggle high-contrast mode">
                  <i className="fa-solid fa-circle-half-stroke text-sm" aria-hidden="true"></i>
                  <span className="sr-only">High-contrast mode {hc ? 'on' : 'off'}</span>
                </button>

                <button ref={btnRef} onClick={() => setOpen(!open)}
                  aria-expanded={open} aria-controls="mobile-nav"
                  aria-label={open ? 'Close navigation' : 'Open navigation'}
                  className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors text-ink">
                  <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-sm`} aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          {open && (
            <nav id="mobile-nav" aria-label="Mobile navigation"
              className="md:hidden border-t border-cream bg-ivory px-4 py-3 space-y-0.5">
              {LINKS.map(l => (
                <button key={l.id} onClick={() => go(l.id)}
                  aria-current={page === l.id ? 'page' : undefined}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${page === l.id ? 'bg-cream text-brown font-semibold' : 'text-muted hover:bg-cream/70 hover:text-brown'}`}>
                  {l.label}
                </button>
              ))}
            </nav>
          )}
        </header>
      );
    }

    function Footer({ navigate }) {
      const go = p => { navigate(p); window.scrollTo(0,0); };
      return (
        <footer className="bg-ink text-ivory/75 mt-24" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-serif text-xl font-bold text-ivory mb-2">Ophelia Ivy Mensah</p>
              <p className="text-sm leading-relaxed text-ivory/50">Graduate Student Affairs Professional<br/>BGSU · College of Student Personnel</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[.18em] uppercase text-taupe mb-4">Pages</p>
              <ul className="space-y-2" role="list">
                {['home','about','resume','competencies','artifacts','gallery','contact'].map(p => (
                  <li key={p}><button onClick={() => go(p)} className="text-sm text-ivory/50 hover:text-ivory transition-colors capitalize">{p}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold tracking-[.18em] uppercase text-taupe mb-4">Contact</p>
              <ul className="space-y-2 text-sm" role="list">
                <li><a href="mailto:ophelim@bgsu.edu" className="text-ivory/50 hover:text-ivory transition-colors flex items-center gap-2"><i className="fa-solid fa-envelope text-xs" aria-hidden="true"></i>ophelim@bgsu.edu</a></li>
                <li className="flex items-center gap-2 text-ivory/50"><i className="fa-solid fa-location-dot text-xs" aria-hidden="true"></i>Bowling Green, OH</li>
                <li><a href="https://www.linkedin.com/in/opheliaivymensah-" target="_blank" rel="noopener noreferrer" className="text-ivory/50 hover:text-ivory transition-colors flex items-center gap-2" aria-label="LinkedIn profile (opens in new tab)"><i className="fa-brands fa-linkedin text-xs" aria-hidden="true"></i>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-5 text-center text-xs text-ivory/30">
            © 2026 Ophelia Ivy Mensah · Student Affairs Portfolio · Bowling Green State University
          </div>
        </footer>
      );
    }

    function SectionHeading({ eyebrow, title, subtitle, center }) {
      return (
        <div className={`mb-12 ${center ? 'text-center' : ''}`}>
          {eyebrow && <p className="text-xs font-bold tracking-[.22em] uppercase text-taupe mb-3">{eyebrow}</p>}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">{title}</h1>
          {subtitle && <p className={`mt-4 text-muted text-lg leading-relaxed ${center ? 'mx-auto' : ''} max-w-2xl`}>{subtitle}</p>}
        </div>
      );
    }

    function Accordion({ id, label, level, children }) {
      const [open, setOpen] = useState(false);
      return (
        <article className="border border-cream rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
          <button id={`btn-${id}`} aria-expanded={open} aria-controls={`panel-${id}`}
            onClick={() => setOpen(v => !v)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/30 transition-colors group gap-3">
            <div className="flex items-center gap-3 flex-wrap min-w-0">
              <Badge level={level} />
              <span className="font-serif text-lg font-semibold text-ink group-hover:text-brown transition-colors">{label}</span>
            </div>
            <i className={`fa-solid fa-chevron-down text-taupe transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`} aria-hidden="true"></i>
          </button>
          <div id={`panel-${id}`} role="region" aria-labelledby={`btn-${id}`} className={`acc-panel ${open ? 'open' : 'closed'}`}>
            <div className="px-6 pb-6 pt-1">{children}</div>
          </div>
        </article>
      );
    }

    function PortfolioImage({ image, className = '', imgClassName = '', caption, priority = false }) {
      if (!image) return null;
      return (
        <figure className={`portfolio-media-frame ${className}`}>
          <img
            src={image.src}
            alt={image.alt}
            className={`block w-full h-full object-cover ${imgClassName}`}
            loading={priority ? 'eager' : 'lazy'}
          />
          {caption && <figcaption className="portfolio-caption">{caption}</figcaption>}
        </figure>
      );
    }

    function InlinePhotoCard({ imageId, eyebrow, title }) {
      const image = IMAGE_LIBRARY[imageId];
      return (
        <article className="rounded-[1.5rem] bg-white/88 backdrop-blur-sm border border-white/70 shadow-[0_24px_60px_rgba(61,46,38,0.12)] overflow-hidden">
          <PortfolioImage image={image} className="aspect-[4/3]" />
          <div className="px-4 py-4">
            <p className="text-[11px] font-bold tracking-[.2em] uppercase text-taupe mb-2">{eyebrow}</p>
            <h3 className="font-serif text-lg font-semibold text-ink">{title}</h3>
            <p className="text-sm text-muted mt-1">{image.caption}</p>
          </div>
        </article>
      );
    }

    /* ── File Viewer Modal ── */
    function FileViewer({ artifact, onClose }) {
      const closeOnEsc = useCallback(e => { if (e.key === 'Escape') onClose(); }, [onClose]);
      useEffect(() => {
        document.addEventListener('keydown', closeOnEsc);
        document.body.style.overflow = 'hidden';
        return () => {
          document.removeEventListener('keydown', closeOnEsc);
          document.body.style.overflow = '';
        };
      }, [closeOnEsc]);

      const viewerUrl = React.useMemo(() => {
        if (!artifact.file) return null;
        if (artifact.type === 'PDF') return artifact.file;
        const base = window.location.href.replace(/\/[^/]*(\?.*)?$/, '/');
        const encoded = encodeURIComponent(base + artifact.file);
        if (artifact.type === 'PPTX') return `https://view.officeapps.live.com/op/embed.aspx?src=${encoded}`;
        if (artifact.type === 'DOCX') return `https://docs.google.com/viewer?url=${encoded}&embedded=true`;
        return null;
      }, [artifact]);

      const fileIcon = artifact.type === 'PDF' ? 'fa-file-pdf' : artifact.type === 'PPTX' ? 'fa-file-powerpoint' : 'fa-file-word';

      return (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog" aria-modal="true" aria-label={`Preview: ${artifact.name}`}
          onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
          <div className="bg-white rounded-2xl w-full max-w-5xl flex flex-col shadow-2xl"
            style={{ height: '88vh' }}>
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-cream shrink-0">
              <i className={`fa-solid ${fileIcon} text-brown text-lg`} aria-hidden="true"></i>
              <h2 className="font-serif font-bold text-ink text-lg flex-1 truncate">{artifact.name}</h2>
              <span className="text-xs font-bold text-taupe uppercase tracking-wider shrink-0">{artifact.type}</span>
              <button onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-cream transition-colors text-muted hover:text-brown ml-2 shrink-0"
                aria-label="Close preview">
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
            {/* Viewer */}
            <div className="flex-1 overflow-hidden rounded-b-2xl">
              {viewerUrl ? (
                <iframe
                  src={viewerUrl}
                  className="w-full h-full border-0"
                  title={`Preview of ${artifact.name}`}
                  allowFullScreen />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-taupe gap-4 py-16">
                  <i className="fa-solid fa-clock text-5xl opacity-30" aria-hidden="true"></i>
                  <p className="font-serif text-xl text-muted">Preview coming soon</p>
                  <p className="text-sm text-taupe text-center max-w-sm leading-relaxed">This artifact file will be available for preview before final submission.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    /* ============================================================
       HOME PAGE
    ============================================================ */
    function HomePage({ navigate }) {
      const go = p => { navigate(p); window.scrollTo(0,0); };
      return (
        <div>
          {/* ── Hero ── */}
          <section aria-labelledby="hero-name" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(229,222,210,0.92),rgba(251,247,244,0.98)_40%,rgba(248,243,239,1)_100%)] px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(104,93,84,0.12),transparent)]" aria-hidden="true"></div>
            <div className="max-w-6xl mx-auto w-full py-14 md:py-18 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 lg:gap-14 items-center">
                <div className="relative z-10">
                  <p className="text-xs font-bold tracking-[.25em] uppercase text-taupe mb-5">Student Affairs Portfolio · BGSU</p>
                  <h1 id="hero-name" className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-ink leading-[1.05] mb-6">
                    Ophelia<br/><span className="text-brown">Ivy Mensah</span>
                  </h1>
                  <p className="font-serif text-xl md:text-2xl italic text-muted mb-6 leading-relaxed">
                    Empowering Students. Championing Equity. Building Community.
                  </p>
                  <p className="text-muted leading-relaxed mb-8 max-w-lg">
                    Graduate Student Affairs Professional and M.Ed. candidate at BGSU — committed to equitable, empathetic, and student-centered practice grounded in faith, integrity, and continuous learning.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mb-8">
                    {[
                      'Advising with empathy',
                      'Programming with purpose',
                      'Advocating through evidence',
                    ].map(label => (
                      <div key={label} className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-[0_14px_30px_rgba(61,46,38,0.08)]">
                        <p className="text-sm font-medium text-muted">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => go('competencies')}
                      className="px-7 py-3 bg-brown text-ivory rounded-lg font-semibold text-sm hover:bg-brown-dark transition-colors min-h-[44px] shadow-sm">
                      View My Work
                    </button>
                    <button onClick={() => go('about')}
                      className="px-7 py-3 border-2 border-brown text-brown rounded-lg font-semibold text-sm hover:bg-cream transition-colors min-h-[44px]">
                      About Me
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-10 hidden lg:block w-40 h-40 rounded-full bg-cream/70 blur-3xl" aria-hidden="true"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-4 items-end">
                    <PortfolioImage
                      image={IMAGE_LIBRARY.chicagoPortrait}
                      className="aspect-[4/5] sm:aspect-[5/6] shadow-[0_30px_80px_rgba(61,46,38,0.18)]"
                      imgClassName="object-[58%_center]"
                      priority={true}
                    />
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                      <PortfolioImage image={IMAGE_LIBRARY.ocpaPresentation} className="aspect-[5/6] sm:aspect-[4/5]" imgClassName="object-[50%_30%]" />
                      <div className="rounded-[1.5rem] border border-brown/10 bg-white/88 backdrop-blur-sm px-5 py-5 shadow-[0_20px_50px_rgba(61,46,38,0.1)]">
                        <p className="text-[11px] font-bold tracking-[.2em] uppercase text-taupe mb-3">Current Focus</p>
                        <p className="font-serif text-2xl text-ink mb-2">Equity-minded student support</p>
                        <p className="text-sm text-muted leading-relaxed">
                          Advising, conference presentation, and community-building work shaped through Honors programming and professional practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 lg:mt-12">
                {HERO_SUPPORT_IMAGES.map((imageId, idx) => (
                  <InlinePhotoCard
                    key={imageId}
                    imageId={imageId}
                    eyebrow={idx === 0 ? 'Presentation' : idx === 1 ? 'Community' : 'Travel'}
                    title={idx === 0 ? 'Sharing research in professional spaces' : idx === 1 ? 'Creating welcoming student environments' : 'Learning through experiential trips'}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ── Mission teaser ── */}
          <section aria-labelledby="mission-teaser" className="bg-brown text-ivory py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs font-bold tracking-[.22em] uppercase text-ivory/50 mb-4">Mission Statement</p>
              <h2 id="mission-teaser" className="sr-only">Mission Statement</h2>
              <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed text-ivory/90">
                "My mission is to empower diverse students towards autonomy and self-discovery through empathetic guidance, fostering deep relationships, and collaborative communities."
              </blockquote>
              <button onClick={() => go('about')}
                className="mt-6 text-sm font-semibold text-ivory/60 hover:text-ivory underline underline-offset-4 transition-colors"
                aria-label="Read full mission statement on About Me page">
                Read full statement →
              </button>
            </div>
          </section>

          {/* ── Three pillars ── */}
          <section aria-labelledby="pillars-heading" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-bold tracking-[.22em] uppercase text-taupe mb-3">Professional Identity</p>
                <h2 id="pillars-heading" className="font-serif text-3xl md:text-4xl font-bold text-ink">Four Pillars of My Practice</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon:'fa-compass',           title:'Advisor',              desc:'Guiding undecided students, student-athletes, and Honors students through academic exploration, registration, and holistic development with equity-minded, culturally responsive practice.' },
                  { icon:'fa-scale-balanced',    title:'Advocate',             desc:'Examining and challenging institutional policies that disproportionately burden marginalized students — presenting findings at professional conferences and collaborating across campus.' },
                  { icon:'fa-people-group',      title:'Leader',               desc:'Building mentoring systems, co-curricular programming curricula, and feedback cultures that extend leadership impact, center student voice, and foster a sense of belonging.' },
                  { icon:'fa-clipboard-list',    title:'Program Coordinator',  desc:'Designing and coordinating large-scale events, experiential trips, co-curricular programming series, and recognition ceremonies that build community, belonging, and student engagement.' },
                ].map(p => (
                  <div key={p.title} className="bg-white border border-cream rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mx-auto mb-5">
                      <i className={`fa-solid ${p.icon} text-brown text-xl`} aria-hidden="true"></i>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ink mb-3">{p.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Quick nav cards ── */}
          <section aria-labelledby="quicknav-heading" className="py-12 px-4 sm:px-6 lg:px-8 bg-cream/30">
            <div className="max-w-6xl mx-auto">
              <h2 id="quicknav-heading" className="sr-only">Quick Navigation</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { p:'resume',        icon:'fa-file-lines',   label:'Resume' },
                  { p:'competencies',  icon:'fa-star',         label:'Competencies' },
                  { p:'artifacts',     icon:'fa-folder-open',  label:'Artifacts' },
                  { p:'gallery',       icon:'fa-images',       label:'Gallery' },
                  { p:'contact',       icon:'fa-envelope',     label:'Contact' },
                ].map(item => (
                  <button key={item.p} onClick={() => go(item.p)}
                    className="flex flex-col items-center gap-3 p-6 bg-white border border-cream rounded-xl hover:border-brown hover:shadow-sm transition-all group min-h-[44px]">
                    <i className={`fa-solid ${item.icon} text-2xl text-taupe group-hover:text-brown transition-colors`} aria-hidden="true"></i>
                    <span className="font-semibold text-sm text-muted group-hover:text-brown transition-colors">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }

    /* ============================================================
       ABOUT PAGE
    ============================================================ */
    function AboutPage() {
      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Intro grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
              <div className="lg:col-span-3">
                <SectionHeading eyebrow="About Me" title="Ophelia Ivy Mensah" />
                <p className="text-muted leading-relaxed mb-4">I am an international student from Ghana and M.Ed. candidate in Bowling Green State University's College of Student Personnel program. My journey into student affairs began with a deep belief that education is transformational — that it shapes not only what students know, but who they become.</p>
                <p className="text-muted leading-relaxed mb-4">As an introvert, I thrive in one-on-one conversations where depth and presence are at the core. This has made academic advising a natural fit — a space to build intentional relationships and support students through academic, personal, and career transitions.</p>
                <p className="text-muted leading-relaxed mb-4">My international background as a student navigating an unfamiliar system has sharpened my sensitivity to the experiences of others in similar positions, and intensified my commitment to advocating for policies and structures that genuinely serve all students — not just symbolically.</p>
                <p className="text-muted leading-relaxed">Having personally benefited from guidance within student affairs, I feel a profound responsibility to provide similar meaningful support to current and future students — grounded in equity, integrity, and a commitment to holistic student development.</p>
              </div>
              <div className="lg:col-span-2 space-y-5">
                <div className="space-y-4">
                  <PortfolioImage image={IMAGE_LIBRARY.bgsuMascot} className="aspect-[4/5] max-w-sm mx-auto lg:mx-0" imgClassName="object-[52%_20%]" />
                  <div className="grid grid-cols-2 gap-4">
                    <PortfolioImage image={IMAGE_LIBRARY.ocpaBackdropSolo} className="aspect-[4/5]" imgClassName="object-[44%_25%]" />
                    <PortfolioImage image={IMAGE_LIBRARY.museumPeers} className="aspect-[4/5]" imgClassName="object-[62%_40%]" />
                  </div>
                </div>
                <div className="bg-white border border-cream rounded-xl p-5 space-y-3">
                  {[
                    { icon:'fa-envelope',        label:'Email',    text:'ophelim@bgsu.edu',            href:'mailto:ophelim@bgsu.edu' },
                    { icon:'fa-location-dot',    label:'Location', text:'Bowling Green, OH',            href:null },
                    { icon:'fa-brands fa-linkedin', label:'LinkedIn', text:'opheliaivymensah-',         href:'https://www.linkedin.com/in/opheliaivymensah-' },
                  ].map(c => (
                    <div key={c.label} className="flex items-center gap-3">
                      <i className={`fa-solid ${c.icon} text-brown text-sm w-4 shrink-0`} aria-hidden="true"></i>
                      {c.href
                        ? <a href={c.href} className="text-sm text-muted hover:text-brown transition-colors" target={c.href.startsWith('http')?'_blank':undefined} rel={c.href.startsWith('http')?'noopener noreferrer':undefined}>{c.text}</a>
                        : <span className="text-sm text-muted">{c.text}</span>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission */}
            <section aria-labelledby="mission-h" className="bg-brown text-ivory rounded-2xl p-8 md:p-12 mb-20">
              <p className="text-xs font-bold tracking-[.22em] uppercase text-ivory/50 mb-3">My Professional Mission</p>
              <h2 id="mission-h" className="font-serif text-2xl font-bold text-ivory mb-6">Mission Statement</h2>
              <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed text-ivory/90 border-l-4 border-ivory/30 pl-6">
                "My mission is to empower diverse students towards autonomy and self-discovery through empathetic guidance, fostering deep relationships, and collaborative communities. Guided by faith, accountability, and integrity, I champion equity, fairness, and continuous learning, supporting each unique journey from transition to purpose and navigating the evolving educational landscape with unwavering service."
              </blockquote>
            </section>

            {/* Personal values */}
            <section aria-labelledby="pv-h" className="mb-20">
              <h2 id="pv-h" className="font-serif text-3xl font-bold text-ink mb-2">Personal Values</h2>
              <p className="text-muted mb-8 text-xs font-bold tracking-[.18em] uppercase">Core Beliefs</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PERSONAL_VALUES.map(v => (
                  <div key={v.name} className="bg-white border border-cream rounded-xl p-6 hover:shadow-sm transition-shadow">
                    <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center mb-4">
                      <i className={`fa-solid ${v.icon} text-brown`} aria-hidden="true"></i>
                    </div>
                    <h3 className="font-serif font-bold text-ink mb-2">{v.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional values */}
            <section aria-labelledby="profv-h">
              <h2 id="profv-h" className="font-serif text-3xl font-bold text-ink mb-2">Professional Values</h2>
              <p className="text-muted mb-8 text-xs font-bold tracking-[.18em] uppercase">Professional Commitments</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PROFESSIONAL_VALUES.map(v => (
                  <div key={v.name} className="bg-white border border-cream rounded-xl p-6 hover:shadow-sm transition-shadow">
                    <div className="w-10 h-10 bg-brown/10 rounded-full flex items-center justify-center mb-4">
                      <i className={`fa-solid ${v.icon} text-brown`} aria-hidden="true"></i>
                    </div>
                    <h3 className="font-serif font-bold text-ink mb-2">{v.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      );
    }

    /* ============================================================
       RESUME PAGE
    ============================================================ */
    function RSection({ title, icon, children }) {
      return (
        <section className="mb-10" aria-labelledby={`rs-${title.replace(/\W/g,'')}`}>
          <div className="flex items-center gap-2 mb-5 pb-2 border-b-2 border-cream">
            <i className={`fa-solid ${icon} text-brown`} aria-hidden="true"></i>
            <h2 id={`rs-${title.replace(/\W/g,'')}`} className="font-serif text-xl font-bold text-ink">{title}</h2>
          </div>
          {children}
        </section>
      );
    }

    function ResumePage() {
      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-12">
              <SectionHeading eyebrow="Curriculum Vitae" title="Resume" />
              <a href="#" aria-label="Download PDF resume"
                className="flex items-center gap-2 px-5 py-2.5 border-2 border-brown text-brown rounded-lg font-semibold text-sm hover:bg-cream transition-colors min-h-[44px] shrink-0">
                <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>Download PDF
              </a>
            </div>

            {/* Contact bar */}
            <div className="bg-brown text-ivory rounded-xl p-5 mb-10 flex flex-wrap gap-4 justify-center text-sm">
              {[
                { icon:'fa-envelope', text:'ophelim@bgsu.edu', href:'mailto:ophelim@bgsu.edu' },
                { icon:'fa-location-dot', text:'Bowling Green, OH', href:null },
                { icon:'fa-brands fa-linkedin', text:'LinkedIn', href:'https://www.linkedin.com/in/opheliaivymensah-' },
              ].map(c => (
                <span key={c.text} className="flex items-center gap-1.5 text-ivory/80">
                  <i className={`fa-solid ${c.icon} text-xs`} aria-hidden="true"></i>
                  {c.href ? <a href={c.href} className="hover:text-ivory transition-colors">{c.text}</a> : c.text}
                </span>
              ))}
            </div>

            <RSection title="Education" icon="fa-graduation-cap">
              <div className="space-y-4">
                {[
                  { deg:'Master of Education — College Student Personnel', org:'Bowling Green State University (BGSU)', loc:'Bowling Green, OH', yr:'Expected 2026' },
                  { deg:'Undergraduate Degree', org:'University of Cape Coast', loc:'Cape Coast, Ghana', yr:'Completed' },
                ].map(e => (
                  <div key={e.deg} className="flex flex-wrap justify-between items-start gap-2">
                    <div><p className="font-semibold text-ink">{e.deg}</p><p className="text-brown text-sm">{e.org}</p></div>
                    <div className="text-right shrink-0"><p className="text-muted text-sm">{e.yr}</p><p className="text-taupe text-xs">{e.loc}</p></div>
                  </div>
                ))}
              </div>
            </RSection>

            <RSection title="Professional Experience" icon="fa-briefcase">
              <div className="space-y-8">
                {EXPERIENCE.map((e,i) => (
                  <div key={i}>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-ink">{e.role}</p>
                        <p className="text-brown text-sm font-medium">{e.dept ? `${e.dept} — ` : ''}{e.org}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-muted text-sm">{e.period}</p>
                        <p className="text-taupe text-xs">{e.loc}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-1">
                      {e.bullets.map((b,j) => (
                        <li key={j} className="flex gap-2 text-muted text-sm leading-relaxed">
                          <span className="text-taupe mt-1 shrink-0" aria-hidden="true">◦</span><span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {i < EXPERIENCE.length-1 && <hr className="mt-7 border-cream"/>}
                  </div>
                ))}
              </div>
            </RSection>

            <RSection title="Presentations & Conference Involvement" icon="fa-chalkboard-user">
              <div className="space-y-5">
                {PRESENTATIONS.map((p,i) => (
                  <div key={i} className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <p className="font-medium text-ink text-sm">{p.title}</p>
                      <p className="text-brown text-sm">{p.event}</p>
                      <p className="text-taupe text-xs">{p.role}</p>
                    </div>
                    <span className="text-muted text-sm shrink-0">{p.date}</span>
                  </div>
                ))}
              </div>
            </RSection>

            <RSection title="Professional Involvement" icon="fa-users">
              <div className="space-y-3">
                {INVOLVEMENT.map((v,i) => (
                  <div key={i} className="flex flex-wrap justify-between items-start gap-2">
                    <p className="text-sm text-muted"><span className="font-medium text-ink">{v.role}</span> — {v.org}</p>
                    <span className="text-muted text-sm shrink-0">{v.date}</span>
                  </div>
                ))}
              </div>
            </RSection>

            <RSection title="Training & Technical Skills" icon="fa-wrench">
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-cream text-muted text-xs rounded-full font-medium">{s}</span>
                ))}
              </div>
            </RSection>
          </div>
        </div>
      );
    }

    /* ============================================================
       COMPETENCIES PAGE
    ============================================================ */
    function CompetenciesPage() {
      const TIERS = [
        { key:'exemplary',    icon:'fa-star',         label:'Exemplary',    desc:'Three competencies with artifacts and narrative demonstrating advanced, integrated practice.' },
        { key:'proficient',   icon:'fa-circle-check', label:'Proficient',   desc:'Three competencies developed through intentional coursework, practicum, and professional experience.' },
        { key:'foundational', icon:'fa-layer-group',  label:'Foundational', desc:'Three competencies establishing core professional knowledge within the ACPA/NASPA framework.' },
      ];

      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="ACPA/NASPA Framework"
              title="Professional Competencies"
              subtitle="A self-reflective examination of growth across the College Student Personnel program, grounded in the ACPA/NASPA professional competency areas."
            />

            {/* Tier summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14" role="list" aria-label="Competency tiers">
              {TIERS.map(t => (
                <div key={t.key} role="listitem" className={`rounded-xl p-5 border ${t.key==='exemplary' ? 'bg-brown text-ivory border-brown' : t.key==='proficient' ? 'bg-muted text-ivory border-muted' : 'bg-white text-ink border-cream'}`}>
                  <i className={`fa-solid ${t.icon} text-xl mb-3 block ${t.key==='foundational' ? 'text-brown' : 'text-ivory/70'}`} aria-hidden="true"></i>
                  <h2 className={`font-serif text-lg font-bold mb-1 ${t.key==='foundational' ? 'text-ink' : ''}`}>{t.label}</h2>
                  <p className={`text-xs leading-relaxed ${t.key==='foundational' ? 'text-muted' : 'text-ivory/65'}`}>{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Competency accordions */}
            {TIERS.map(tier => {
              const list = COMPETENCIES.filter(c => c.level === tier.key);
              return (
                <section key={tier.key} aria-labelledby={`tier-${tier.key}-h`} className="mb-14">
                  <div className="flex items-center gap-3 mb-6">
                    <i className={`fa-solid ${tier.icon} text-brown`} aria-hidden="true"></i>
                    <h2 id={`tier-${tier.key}-h`} className="font-serif text-2xl font-bold text-ink">{tier.label} Level</h2>
                  </div>
                  <div className="space-y-4">
                    {list.map(c => (
                      <Accordion key={c.id} id={c.id} label={`${c.title} (${c.abbr})`} level={c.level}>
                        <p className="text-muted leading-relaxed mb-6 text-sm">{c.summary}</p>

                        <h3 className="text-xs font-bold tracking-[.14em] uppercase text-ink mb-3">Activities</h3>
                        <div className="space-y-4 mb-6">
                          {c.activities.map((a,i) => (
                            <div key={i} className="border-l-2 border-cream pl-4">
                              <p className="font-semibold text-ink text-sm mb-1">{a.title}</p>
                              <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
                            </div>
                          ))}
                        </div>

                        {c.artifacts.length > 0 && (
                          <>
                            <h3 className="text-xs font-bold tracking-[.14em] uppercase text-ink mb-3">Supporting Artifacts</h3>
                            <div className="flex flex-wrap gap-2">
                              {c.artifacts.map((a,i) => {
                                const fileIcon = a.type==='PDF' ? 'fa-file-pdf' : a.type==='PPTX' ? 'fa-file-powerpoint' : 'fa-file-word';
                                return (
                                  <button key={i}
                                    onClick={() => { window.location.hash = '#artifacts'; window.scrollTo(0,0); }}
                                    aria-label={`Preview ${a.name} — ${a.type}`}
                                    className="flex items-center gap-2 px-4 py-2 border border-brown text-brown rounded-lg text-xs font-semibold hover:bg-cream transition-colors min-h-[44px]">
                                    <i className={`fa-solid fa-eye text-sm`} aria-hidden="true"></i>
                                    {a.name}
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}

                        {/* ── Photo Gallery ── */}
                        {(COMPETENCY_PHOTOS[c.id] || []).length > 0 && (
                          <div className="mt-7 pt-5 border-t border-cream">
                            <div className="flex items-center gap-2 mb-4">
                              <i className="fa-solid fa-images text-taupe text-xs" aria-hidden="true"></i>
                              <h3 className="text-xs font-bold tracking-[.14em] uppercase text-ink">Related Moments</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {(COMPETENCY_PHOTOS[c.id] || []).map(photoId => {
                                const image = IMAGE_LIBRARY[photoId];
                                return (
                                  <PortfolioImage
                                    key={photoId}
                                    image={image}
                                    className="aspect-[4/3]"
                                    caption={image.caption}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </Accordion>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      );
    }

    /* ============================================================
       ARTIFACTS PAGE
    ============================================================ */
    function ArtifactsPage() {
      const [filter, setFilter] = useState('all');
      const [preview, setPreview] = useState(null);
      const FILTERS = ['all','exemplary','proficient','foundational'];
      const shown = filter==='all' ? ARTIFACTS : ARTIFACTS.filter(a => a.level===filter);

      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          {preview && <FileViewer artifact={preview} onClose={() => setPreview(null)} />}
        <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Supporting Evidence"
              title="Artifacts"
              subtitle="Nine artifacts from across graduate preparation, each linked to a specific ACPA/NASPA competency."
            />

            {/* Filter bar */}
            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter artifacts by level">
              {FILTERS.map(f => (
                <button key={f} onClick={() => setFilter(f)} aria-pressed={filter===f}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors min-h-[44px] ${filter===f ? 'bg-brown text-ivory' : 'bg-cream text-muted hover:bg-brown/10 hover:text-brown'}`}>
                  {f==='all' ? 'All Artifacts' : f.charAt(0).toUpperCase()+f.slice(1)}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {shown.map(a => {
                const fileIcon = a.type==='PDF' ? 'fa-file-pdf' : a.type==='PPTX' ? 'fa-file-powerpoint' : 'fa-file-word';
                return (
                  <article key={a.id} role="listitem" className="bg-white border border-cream rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                        <i className={`fa-solid ${fileIcon} text-brown`} aria-hidden="true"></i>
                      </div>
                      <span className="text-xs font-bold text-taupe uppercase tracking-wider">{a.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <Badge level={a.level} />
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-cream text-muted">{a.abbr}</span>
                    </div>
                    <h2 className="font-serif font-bold text-ink mb-2 leading-snug text-base">{a.name}</h2>
                    <p className="text-muted text-sm leading-relaxed flex-grow">{a.desc}</p>
                    <button onClick={() => setPreview(a)}
                      aria-label={`Preview ${a.name} — ${a.type}`}
                      className="mt-5 flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-brown text-brown rounded-lg text-sm font-semibold hover:bg-cream transition-colors min-h-[44px]">
                      <i className="fa-solid fa-eye text-xs" aria-hidden="true"></i>
                      Preview <span className="sr-only">{a.name}</span>
                      <span aria-hidden="true">({a.type})</span>
                    </button>
                  </article>
                );
              })}
            </div>

            {shown.length===0 && (
              <p className="text-center text-muted py-16">No artifacts found at this level.</p>
            )}

          </div>
        </div>
      );
    }

    /* ============================================================
       CONTACT PAGE
    ============================================================ */
    function ContactPage() {
      const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
      const [errors, setErrors] = useState({});
      const [sent, setSent] = useState(false);
      const alertRef = useRef(null);

      const validate = () => {
        const e = {};
        if (!form.name.trim())    e.name = 'Full name is required.';
        if (!form.email.trim())   e.email = 'Email address is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
        if (!form.message.trim()) e.message = 'Message is required.';
        return e;
      };

      const change = f => e => { setForm(v => ({...v,[f]:e.target.value})); setErrors(v => ({...v,[f]:undefined})); };

      const submit = e => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        const subject = form.subject.trim() || 'Portfolio Inquiry';
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
        window.location.href = `mailto:ophelim@bgsu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
        setTimeout(() => alertRef.current?.focus(), 100);
      };

      const inputCls = f => `w-full px-4 py-3 rounded-lg border bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-focusring transition ${errors[f] ? 'border-red-400' : 'border-cream'}`;

      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Get in Touch"
              title="Contact"
              subtitle="I would love to connect — whether you have questions about my portfolio, experience, or are interested in collaborating."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Info column */}
              <div>
                <h2 className="font-serif text-xl font-bold text-ink mb-6">Contact Information</h2>
                <div className="space-y-3 mb-8">
                  {[
                    { icon:'fa-envelope',           label:'Email',    val:'ophelim@bgsu.edu',                             href:'mailto:ophelim@bgsu.edu' },
                    { icon:'fa-location-dot',       label:'Location', val:'Bowling Green, OH',                             href:null },
                    { icon:'fa-brands fa-linkedin', label:'LinkedIn', val:'linkedin.com/in/opheliaivymensah-',             href:'https://www.linkedin.com/in/opheliaivymensah-' },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-4 p-4 bg-white border border-cream rounded-xl">
                      <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center shrink-0">
                        <i className={`fa-solid ${c.icon} text-brown text-sm`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="text-xs text-taupe font-semibold uppercase tracking-wider mb-0.5">{c.label}</p>
                        {c.href
                          ? <a href={c.href} className="text-ink font-medium hover:text-brown transition-colors text-sm" target={c.href.startsWith('http')?'_blank':undefined} rel={c.href.startsWith('http')?'noopener noreferrer':undefined}>{c.val}</a>
                          : <p className="text-ink font-medium text-sm">{c.val}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-brown pl-5 py-1">
                  <p className="font-serif italic text-muted text-sm leading-relaxed">"Guided by faith, accountability, and integrity, I champion equity, fairness, and continuous learning, supporting each unique journey from transition to purpose."</p>
                  <footer className="mt-2 text-xs text-taupe">— Ophelia Ivy Mensah, Mission Statement</footer>
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      );
    }

    /* ============================================================
       GALLERY PAGE
    ============================================================ */
    function GalleryPage() {
      return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Visual Portfolio"
              title="Gallery"
              subtitle="A visual record of professional experiences, events, and milestones throughout graduate training at BGSU."
            />

            {GALLERY_SECTIONS.map(sec => (
              <section key={sec.id} aria-labelledby={`gal-${sec.id}`} className="mb-16">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-cream">
                  <div className="w-9 h-9 bg-cream rounded-full flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${sec.icon} text-brown text-sm`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h2 id={`gal-${sec.id}`} className="font-serif text-2xl font-bold text-ink">{sec.label}</h2>
                    <p className="text-sm text-muted mt-1">{sec.intro}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {sec.photoIds.map(photoId => {
                    const image = IMAGE_LIBRARY[photoId];
                    return (
                      <article key={photoId} className="space-y-3">
                        <PortfolioImage image={image} className="aspect-[4/3]" />
                        <div className="px-1">
                          <h3 className="font-serif text-lg text-ink">{image.caption}</h3>
                          <p className="text-sm text-muted mt-1">
                            {sec.label === 'Professional Development' ? 'A portfolio moment showing professional growth in action.' :
                             sec.label === 'Conferences & Travel' ? 'A travel experience that deepened community and perspective.' :
                             sec.label === 'Campus Life' ? 'An everyday scene from student connection and campus belonging.' :
                             'A program or event environment centered on student engagement.'}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      );
    }

    /* ============================================================
       APP ROOT
    ============================================================ */
    function App() {
      const { page, navigate } = useHashRouter();
      const [hc, toggleHc] = useHighContrast();

      // Scroll to top + shift focus to main on page change
      useEffect(() => {
        window.scrollTo({ top:0, behavior:'auto' });
        document.getElementById('main')?.focus({ preventScroll:true });
      }, [page]);

      const PAGES = {
        home:         <HomePage navigate={navigate} />,
        about:        <AboutPage />,
        resume:       <ResumePage />,
        competencies: <CompetenciesPage />,
        artifacts:    <ArtifactsPage />,
        gallery:      <GalleryPage />,
        contact:      <ContactPage />,
      };

      return (
        <div className="min-h-screen flex flex-col">
          <SkipLink />
          <Navbar page={page} navigate={navigate} hc={hc} toggleHc={toggleHc} />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {PAGES[page] || PAGES.home}
          </main>
          <Footer navigate={navigate} />
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
