/* ===== SETTINGS ===== */
const PHOTO = "img/profile.jpg";                 // your photo
const LINKS = {
  github:   "https://github.com/",               // <- put your GitHub link
  linkedin: "https://www.linkedin.com/",         // <- put your LinkedIn link
  email:    "ahmedarafatt237@gmail.com",
  phone:    "+201091434793",
  cv:       "assets/Ahmed_Ayman_Kamal.pdf"       // CV file (already included)
};

/* ===== PROJECTS (add as many as you want) =====
   image  : optional. Default = img/projects/<number>.jpg  (1.jpg, 2.jpg ...)
   desc   : text, or { en:"...", ar:"..." } to translate
   github / live : leave out a link and its button hides */
const PROJECTS = [
  { title: "Project One", desc: { en: "Short description of what this project does and the tech behind it.", ar: "وصف مختصر للمشروع والتقنيات المستخدمة فيه." },
    tags: ["React", "Tailwind"], github: "https://github.com/", live: "https://example.com" },
  { title: "Project Two", desc: { en: "Another project description goes here.", ar: "وصف مشروع آخر هنا." },
    tags: ["React", "REST API"], github: "https://github.com/" }
];

/* ===== CERTIFICATES (add up to ~15) =====
   image : optional. Default = img/certs/<number>.jpg */
const CERTS = [
  { title: "Front-End Development", issuer: "Information Technology Institute (ITI)" },
  { title: "React Development",     issuer: "Information Technology Institute (ITI)" },
  { title: "CCNA Certification",    issuer: "Cisco" },
  { title: "Cyber Security",        issuer: "Information Technology Institute (ITI)" },
  { title: "Software Fundamentals", issuer: "Information Technology Institute (ITI)" }
];

/* ===== SKILLS ===== */
const SKILLS = [
  { h: { en: "Frontend", ar: "الواجهات الأمامية" }, items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"] },
  { h: { en: "Backend & Databases", ar: "الخلفية وقواعد البيانات" }, items: ["Node.js", "Express.js", "SQL", "MongoDB", "Mongoose", "RESTful APIs"] },
  { h: { en: "Tools", ar: "الأدوات" }, items: ["Git", "GitHub", "VS Code", "Postman", "Microsoft Office"] },
  { h: { en: "Networking & Security", ar: "الشبكات والأمن" }, items: ["CCNA", "Subnetting", "VLANs", "Network Security", "Security Fundamentals", "Risk Awareness"] },
  { h: { en: "Soft Skills", ar: "المهارات الشخصية" }, items: { en: ["Problem Solving", "Time Management", "Client Communication", "Team Collaboration", "Working Under Pressure"], ar: ["حل المشكلات", "إدارة الوقت", "التواصل مع العملاء", "العمل الجماعي", "العمل تحت الضغط"] } }
];

/* ===== TEXT (English / Arabic) ===== */
const T = {
  en: {
    n_about: "About", n_skills: "Skills", n_projects: "Projects", n_certs: "Certificates", n_contact: "Contact",
    name: "Ahmed Ayman Kamal", role: "Front-End React Developer",
    b_cv: "Download CV", b_gh: "GitHub", b_pr: "Projects",
    about_h: "About me",
    summary: "Front-End React Developer with hands-on experience building responsive web applications using React, JavaScript, HTML, CSS and Tailwind CSS. Freelancing since 2022, delivering high-quality projects under tight deadlines, with a strong background in IT systems, networking (CCNA) and cybersecurity fundamentals.",
    st_apps: "Web apps built", st_year: "Years freelancing", st_cert: "Certificates",
    edu_h: "Education", edu_t: "Bachelor of Computer Science", edu_d: "Egyptian E-Learning University · Grade: B",
    exp_h: "Experience", exp_t: "Front-End React Developer (Freelance)", present: "Present",
    exp: ["Built 15+ responsive web apps with React, JavaScript, Tailwind CSS and Bootstrap.", "Integrated RESTful APIs to show dynamic data and improve interaction.", "Optimized performance and responsiveness across all devices.", "Delivered projects on tight deadlines with high client satisfaction.", "Worked directly with clients to gather requirements."],
    lang_h: "Languages", langs: [["Arabic", "Native"], ["English", "Intermediate"]],
    skills_h: "Skills & Qualifications",
    proj_h: "Projects", proj_sub: "Selected work. Tap an image to enlarge it.",
    cert_h: "Certificates", cert_sub: "Courses and certifications.",
    contact_h: "Let's work together", contact_sub: "Open to freelance work and full-time roles.",
    code: "GitHub", live: "Live demo", email: "Email", phone: "Phone", linkedin: "LinkedIn"
  },
  ar: {
    n_about: "نبذة", n_skills: "المهارات", n_projects: "المشاريع", n_certs: "الشهادات", n_contact: "تواصل",
    name: "أحمد أيمن كمال", role: "مطوّر واجهات أمامية React",
    b_cv: "تحميل السيرة الذاتية", b_gh: "GitHub", b_pr: "المشاريع",
    about_h: "نبذة عني",
    summary: "مطوّر واجهات أمامية بخبرة عملية في بناء تطبيقات ويب متجاوبة باستخدام React وJavaScript وHTML وCSS وTailwind CSS. أعمل بشكل حر منذ 2022 وأسلّم مشاريع عالية الجودة ضمن مواعيد ضيقة، مع خلفية قوية في أنظمة تكنولوجيا المعلومات والشبكات (CCNA) وأساسيات الأمن السيبراني.",
    st_apps: "تطبيق ويب", st_year: "سنوات فريلانس", st_cert: "شهادات",
    edu_h: "التعليم", edu_t: "بكالوريوس علوم الحاسب", edu_d: "الجامعة المصرية للتعلم الإلكتروني · التقدير: جيد",
    exp_h: "الخبرة", exp_t: "مطوّر واجهات أمامية React (فريلانس)", present: "الآن",
    exp: ["بناء أكثر من 15 تطبيق ويب متجاوب باستخدام React وJavaScript وTailwind CSS وBootstrap.", "ربط واجهات RESTful API لعرض بيانات ديناميكية وتحسين التفاعل.", "تحسين الأداء والاستجابة على جميع الأجهزة.", "تسليم المشاريع في مواعيد ضيقة مع رضا عالٍ من العملاء.", "العمل مباشرة مع العملاء لجمع المتطلبات."],
    lang_h: "اللغات", langs: [["العربية", "اللغة الأم"], ["الإنجليزية", "متوسط"]],
    skills_h: "المؤهلات والمهارات",
    proj_h: "المشاريع", proj_sub: "مجموعة من أعمالي. اضغط على الصورة لتكبيرها.",
    cert_h: "الشهادات", cert_sub: "الدورات والشهادات.",
    contact_h: "لنعمل معًا", contact_sub: "متاح للعمل الحر والوظائف بدوام كامل.",
    code: "GitHub", live: "المعاينة", email: "البريد", phone: "الهاتف", linkedin: "LinkedIn"
  }
};
