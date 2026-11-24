/* ===== SETTINGS ===== */
const PHOTO = "img/profile.jpg";                 // your photo
const LINKS = {
  github:   "https://github.com/",               // <- put your GitHub link
  linkedin: "https://www.linkedin.com/",         // <- put your LinkedIn link
  email:    "ahmedarafatt237@gmail.com",
  phone:    "+201091434793",
  cv:       "assets/Ahmed_Ayman_Kamal.pdf"       // CV file (already included)
};

/* ===== PROJECTS =====
   Each row: [repo-name, category, "English title", "العنوان", "English description", "الوصف", "live-url (only if not on GitHub Pages)"]
   - GitHub link  = github.com/GH_USER/<repo-name>
   - Live link    = GitHub Pages by default, or the 7th value (Vercel etc.)
   - Screenshot   = img/projects/<repo-name in lowercase>.jpg  (optional; a colored card shows until you add it) */
const GH_USER = "ahmedarafat20";

const CATS = {
  apps:       { en: "Web Apps & Brands",        ar: "تطبيقات وهويات",         ic: "✦",  h: 265 },
  factory:    { en: "Factories & Business",     ar: "مصانع وشركات",          ic: "🏭", h: 200 },
  contracting:{ en: "Contracting & Doors",      ar: "مقاولات وأبواب",         ic: "🏗️", h: 28 },
  decor:      { en: "Interior & Decor",         ar: "ديكور وجبس ودهانات",     ic: "🎨", h: 320 },
  stone:      { en: "Marble, Ceramic & Glass",  ar: "رخام وسيراميك وزجاج",    ic: "🪟", h: 185 },
  insulation: { en: "Insulation, Leaks & Tanks",ar: "عزل وتسربات وخزانات",    ic: "💧", h: 215 },
  ac:         { en: "AC & Appliances",          ar: "تكييف وأجهزة",           ic: "❄️", h: 195 },
  mep:        { en: "Plumbing, Electrical & Gas",ar: "سباكة وكهرباء وغاز",    ic: "⚡", h: 48 },
  moving:     { en: "Moving, Transport & Storage",ar: "نقل وتخزين",          ic: "🚚", h: 12 },
  services:   { en: "Cleaning & Services",      ar: "نظافة وخدمات",           ic: "🧹", h: 150 }
};

/* shown first in the "Highlights" strip */
const FEATURED = ["hadath-alganoub", "manchester-clean", "unitedmedmac", "rokn-momen", "alkhaleeg", "itn-gama"];

const RAW = [
  ["hadath-alganoub","decor","Hadath Al Janoub","حداثة الجنوب","Kitchens and interior decor.","مطابخ وديكورات داخلية."],
  ["unitedmedmac","stone","United Medmac","ميدماك المتحدة","Marble, granite and ceramic.","رخام وجرانيت وسيراميك."],
  ["watan","stone","Watan Glass","الوطن للزجاج","Glass, mirrors and aluminum.","زجاج ومرايا وألمنيوم."],
  ["manchester-clean","services","Manchester Cleaning","نظافة مانشستر","Cleaning services, Manchester UK.","خدمات نظافة، مانشستر (بريطانيا)."],
  ["rokn-momen","insulation","Rokn Al Momen","ركن المؤمن","Tank cleaning and pest control.","تنظيف خزانات ومكافحة حشرات."],
  ["itn-gama","factory","ITN Gama","آي تي إن جاما","Chip programming services.","خدمات برمجة الشرائح."],
  ["alkhaleeg","factory","Al Khaleeg Laser Cutting","الخليج لقص الجدران بالليزر","Laser wall cutting, Riyadh.","قص الجدران بالليزر، الرياض.","https://alkhaleeg.vercel.app"],
  ["gaddah","contracting","Contracting & Carpentry","مقاولات ونجارة","Contracting and carpentry, Jeddah.","مقاولات ونجارة، جدة."],
  ["alqema","decor","Al Qimma Kitchens","القمة للمطابخ","Kitchens and cabinets, Madinah.","مطابخ وخزائن، المدينة المنورة."],
  ["curax","factory","Curax","كيوراكس","Digital agency: marketing, web and AI.","وكالة رقمية: تسويق وويب وذكاء اصطناعي.","https://curax-seven.vercel.app"],
  ["alaraby","contracting","Al Rabie Modern Contracting","الربيع الحديث للمقاولات","General contracting company.","شركة مقاولات عامة."],
  ["asphalt-site","contracting","Asphalt Contracting","مقاولات الأسفلت","Asphalt paving contractor.","مقاول رصف أسفلت."],
  ["handasa","contracting","Engineering Office","مكتب هندسي","Engineering office and permits.","مكتب هندسي وتصاريح."],
  ["mokawl","contracting","Riyadh Contractor","مقاول الرياض","Contracting services, Riyadh.","خدمات مقاولات، الرياض."],
  ["trmim","contracting","Renovation & Finishing","ترميم وتشطيب","Renovation and finishing, Jeddah.","ترميم وتشطيب، جدة."],
  ["hnager","contracting","Hangars & Shades","هناجر ومظلات","Hangars, shades and warehouses.","هناجر ومظلات ومستودعات."],
  ["hadm","contracting","Demolition & Scrap","هدم وتشليح","Demolition and scrap, Dammam.","هدم وتشليح، الدمام."],
  ["samer-gnoub","contracting","Exterior GRC Decor","ديكور GRC خارجي","Exterior GRC decor works.","أعمال ديكور GRC للواجهات."],
  ["ynba-albahr","contracting","Yanbu Building Materials","مواد بناء ينبع","Building materials, Yanbu.","مواد بناء، ينبع."],
  ["garage-door","contracting","Automatic Doors","أبواب أوتوماتيك","Automatic doors, Dammam.","أبواب أوتوماتيك، الدمام.","https://garage-door-three.vercel.app"],
  ["gdoor","contracting","Automatic Doors Khobar","أبواب أوتوماتيك الخبر","Automatic doors, Dammam-Khobar.","أبواب أوتوماتيك، الدمام والخبر."],
  ["decor","decor","Painting & Wallpaper","دهانات وورق جدران","Painting and wallpaper, Dammam.","دهانات وورق جدران، الدمام."],
  ["Movies","apps","Movies App","تطبيق أفلام","Browse and discover movies.","تصفح واكتشف الأفلام.","https://movies-dusky-eight.vercel.app"],
  ["test","factory","Al Saqr Arabi Factory III","مصنع الصقر العربي (3)","Third design of the factory site.","تصميم ثالث لموقع المصنع."],
  ["dehan2","decor","Painting & Epoxy","دهانات وإيبوكسي","Painting and epoxy, Riyadh.","دهانات وإيبوكسي، الرياض."],
  ["demo-ui-flowers","apps","Flowers Shop","متجر زهور","UI for a natural flowers shop.","واجهة لمتجر زهور طبيعية."],
  ["project-dehan","decor","Riyadh Painter","نقاش الرياض","Painting services, Riyadh.","خدمات دهان، الرياض."],
  ["checkpoint","apps","Checkpoint Menu","منيو تشيك بوينت","Digital menu for a juice and coffee shop.","منيو رقمي لمحل عصائر وقهوة.","https://checkpoint-three-mauve.vercel.app"],
  ["Am-Technology","factory","AM Technology","إيه إم تكنولوجي","Digital solutions company.","شركة حلول رقمية."],
  ["Graduation_Project","apps","Fitweb — AI Fitness App","Fitweb — تطبيق لياقة بالذكاء الاصطناعي","Graduation project: an AI-powered fitness web app.","مشروع التخرج: تطبيق ويب للياقة بالذكاء الاصطناعي.","https://graduation-project-vert.vercel.app"],
  ["lamsat-fn","decor","Lamsat Fan","لمسة فن","Painting and decor, Jeddah.","دهانات وديكور، جدة.","https://lamsat-fn.vercel.app"],
  ["Earth-and-Solar-System","apps","Earth & Solar System","الأرض والمجموعة الشمسية","Educational space page.","صفحة تعليمية عن الفضاء."],
  ["arishet_alyasmeen","apps","Arishet Al Yasmeen","عريشة الياسمين","Levantine restaurant website.","موقع مطعم شامي.","https://arishet-alyasmeen.vercel.app"],
  ["geddah_bord","decor","Gypsum Board & Decor","جبس بورد وديكور","Gypsum board and decor, Jeddah.","جبس بورد وديكور، جدة."],
  ["gypsum-geddah","decor","Gypsum Ceilings","أسقف جبسية","Gypsum ceilings, Jeddah.","أسقف جبسية، جدة."],
  ["website","decor","Gypsum Board Jeddah","جبس بورد جدة","Gypsum board works, Jeddah.","أعمال جبس بورد، جدة.","https://website-henna-ten-53.vercel.app"],
["site5","decor","Bedroom Furniture","غرف نوم","Bedroom furniture, Riyadh.","غرف نوم، الرياض."],
["ceramic","stone","Ceramic & Marble","سيراميك ورخام","Ceramic and marble, Riyadh.","سيراميك ورخام، الرياض."],
["balat","stone","Tile Installer","مركب بلاط","Tile installation, Jeddah.","تركيب بلاط، جدة."],
["mbalat-ceramic","stone","Ceramic Contractor","مقاول سيراميك","Ceramic contractor, Riyadh.","مقاول سيراميك، الرياض."],
["diwan-site","stone","Diwan Stone","ديوان للرخام","Marble, ceramic and stone.","رخام وسيراميك وحجر."],
["medmac","stone","Medmac Marble","ميدماك للرخام","Marble industries.","صناعات الرخام."],
["Almadina_Company","stone","Al Madina Glass","المدينة للزجاج","Glass company website.","موقع شركة زجاج.","https://work-eight-gamma.vercel.app"],
["co","stone","Mirrors & Glass","مرايا وزجاج","Mirrors and glass, Riyadh.","مرايا وزجاج، الرياض."],
["pr1","stone","Glass & Mirrors","زجاج ومرايا","Glass and mirrors, Riyadh.","زجاج ومرايا، الرياض."],
["aladham","insulation","Al Adham Tanks","الأدهم للخزانات","Tank cleaning and insulation.","تنظيف وعزل خزانات."],
["alnoor","insulation","Al Noor Tanks","النور للخزانات","Tank cleaning and insulation, Riyadh.","تنظيف وعزل خزانات، الرياض."],
["azl","insulation","Insulation Services","خدمات العزل","Insulation services, Jeddah.","خدمات عزل، جدة."],
["azlll","insulation","Leak Detection 24h","كشف تسربات 24 ساعة","Leak detection, Jeddah, 24h.","كشف تسربات، جدة، على مدار الساعة."],
["site2","insulation","Leak Detection Jeddah","كشف تسربات جدة","Leak detection services, Jeddah.","خدمات كشف تسربات، جدة."],
["site4","insulation","Roof & Tank Insulation","عزل أسطح وخزانات","Roof and tank insulation, Riyadh.","عزل أسطح وخزانات، الرياض."],
["jazl-site","insulation","Hafr Al Batin Insulation","عزل حفر الباطن","Insulation services, Hafr Al Batin.","خدمات عزل، حفر الباطن."],
["nabeaalhoda","insulation","Nabea Al Huda","ينبوع الهدى","Pool construction and insulation.","إنشاء مسابح وعزل."],
["air","ac","Al Ahsa AC Maintenance","صيانة تكييف الأحساء","AC and cooling maintenance, Al Ahsa.","صيانة تكييف وتبريد، الأحساء."],
["alafdal","ac","Al Afdal Cooling","الأفضل للتكييف والتبريد","Cooling and AC company, Jeddah.","شركة تكييف وتبريد، جدة.","https://alafdal.vercel.app"],
["takeef","ac","Jeddah AC Maintenance","صيانة تكييف جدة","AC maintenance, Jeddah.","صيانة تكييف، جدة."],
["takeefat","ac","Khamis Mushait AC","تكييف خميس مشيط","AC services, Khamis Mushait.","خدمات تكييف، خميس مشيط.","https://takeefat.vercel.app"],
["takeeff","ac","Khamis & Abha Services","خدمات خميس وأبها","Services in Khamis Mushait and Abha.","خدمات في خميس مشيط وأبها.","https://takeeff.vercel.app"],
["web1","ac","Used AC Buying","شراء مكيفات مستعملة","Used AC buying, Riyadh.","شراء مكيفات مستعملة، الرياض."],
["web2","ac","Used AC Trading","بيع وشراء مكيفات","Used AC buying and selling, Riyadh.","بيع وشراء مكيفات مستعملة، الرياض."],
["naeim","ac","Appliance Repair","صيانة أجهزة","Appliance repair, Jeddah.","صيانة أجهزة منزلية، جدة."],
["markaz-alnokhba","ac","Al Nokhba TV Repair","النخبة لإصلاح التلفزيونات","TV repair, Kuwait.","إصلاح تلفزيونات، الكويت."],
["eldarp","ac","Motor Repair Workshop","ورشة إصلاح محركات","Electric motor repair workshop.","ورشة إصلاح محركات كهربائية."],
["isnad2","ac","Commercial Kitchen Equipment","معدات مطابخ تجارية","Commercial kitchen equipment.","معدات مطابخ تجارية."],
["alhamzawy","ac","Al Hamzawy Used Appliances","الحمزاوي للأجهزة المستعملة","Used appliances and kitchens, Riyadh.","أجهزة ومطابخ مستعملة، الرياض."],
["albaraka-site","ac","Al Baraka Used Goods","البركة للمستعمل","Used furniture and appliances.","أثاث وأجهزة مستعملة."],
["ahmed-tulba","mep","Ahmed Tolba Plumber","أحمد طلبة للسباكة","Plumber, Riyadh.","سباك، الرياض."],
["almina","mep","Electrical & Plumbing","كهرباء وسباكة","Electrical and plumbing services.","خدمات كهرباء وسباكة."],
["kahraba-mnazl","mep","Home Electrician","كهربائي منازل","Home electrician, Dammam.","كهربائي منازل، الدمام."],
["kahrbaey","mep","Plumber & Electrician","سباك وكهربائي","Plumbing and electrical, Jeddah.","سباكة وكهرباء، جدة."],
["sbak","mep","Riyadh Plumber","سباك الرياض","Plumbing services, Riyadh.","خدمات سباكة، الرياض."],
["gas","mep","Central Gas Piping","غاز مركزي","Central gas piping, Jeddah and Mecca.","تمديد غاز مركزي، جدة ومكة."],
["qasoura","mep","Taif Central Gas","غاز مركزي الطائف","Central gas, Taif.","غاز مركزي، الطائف."],
["mahmoud-mokhtar","mep","Mahmoud Mokhtar","محمود مختار","Tiler and plumber, Dammam-Khobar.","مبلط وسباك، الدمام والخبر.","https://mahmoud-mokhtar.vercel.app"],
["Isnad","mep","Elevator Services","خدمات المصاعد","Elevator installation and maintenance.","تركيب وصيانة مصاعد."],
["aboabdullah","moving","Mecca Furniture Moving","نقل أثاث مكة","Furniture moving, Mecca.","نقل أثاث، مكة."],
["site6","moving","Riyadh Furniture Moving","نقل أثاث الرياض","Furniture moving, Riyadh.","نقل أثاث، الرياض.","https://site6-tan.vercel.app"],
["site9","moving","Taif Furniture Moving","نقل أثاث الطائف","Furniture moving, Taif.","نقل أثاث، الطائف."],
["abomohammad","moving","Forklift & Crane Rental","تأجير رافعات وونشات","Forklift and crane rental, Riyadh.","تأجير رافعات شوكية وونشات، الرياض."],
["almarj_cooler","moving","Al Marj Refrigerated Transport","المرج للنقل المبرد","Refrigerated transport, Saudi Arabia.","نقل مبرد، السعودية.","https://almarj-cooler.vercel.app"],
["alnesr","moving","Al Nesr Delivery","النسر للتوصيل","Fast delivery, UAE.","توصيل سريع، الإمارات."],
["site7","moving","Storage Warehouses","مستودعات تخزين","Storage warehouses, Riyadh.","مستودعات تخزين، الرياض.","https://site7-snowy.vercel.app"],
["scrab","moving","Scrap Buying","شراء سكراب","Scrap buying, Riyadh.","شراء سكراب، الرياض."],
["balat-arar","services","Arar Cleaning","نظافة عرعر","Cleaning company, Arar.","شركة نظافة، عرعر."],
["prestige_touch","services","Prestige Touch","لمسة بريستيج","Cleaning services.","خدمات نظافة.","https://prestige-touch.vercel.app"],
["project-motkn","services","Najran Maintenance","صيانة نجران","Cleaning and maintenance, Najran.","نظافة وصيانة، نجران."],
["site","services","Abu Dhabi Maintenance","صيانة أبوظبي","Maintenance and property management, Abu Dhabi.","صيانة وإدارة أملاك، أبوظبي."],
["faridahomecare","services","Farida Home Care","فريدة للرعاية المنزلية","Home care and nursing.","رعاية منزلية وتمريض."],
["hams","services","Sponsorship Transfers","نقل كفالات","Sponsorship transfers, Riyadh.","نقل كفالات، الرياض."],
["internet","services","Home Internet","إنترنت منزلي","Home internet provider.","مزود إنترنت منزلي."]
];

const PROJECTS = RAW.map(r => ({
  slug: r[0], cat: r[1], t: { en: r[2], ar: r[3] }, d: { en: r[4], ar: r[5] },
  url: r[6] || `https://${GH_USER}.github.io/${r[0]}/`,
  gh: `https://github.com/${GH_USER}/${r[0]}`,
  img: `img/projects/${r[0].toLowerCase()}.${(typeof HAS_IMG !== "undefined" && HAS_IMG[r[0].toLowerCase()]) || "jpg"}`
}));

/* Only projects that have an image are shown (list is built by tools/manifest.js). Empty manifest = show all. */
const hasManifest = typeof HAS_IMG !== "undefined" && Object.keys(HAS_IMG).length > 0;
const LIST = PROJECTS.filter(p => !hasManifest || HAS_IMG[p.slug.toLowerCase()]);

/* ===== CERTIFICATES =====
   Images: img/certs/1.jpeg ... 17.jpeg (same order as this list; jpg / png / webp also work) */
const CERTS = [
  { title: { en: "Graduation Certificate", ar: "شهادة التخرج" }, issuer: { en: "Egyptian E-Learning University (EELU)", ar: "الجامعة المصرية للتعلم الإلكتروني" }, year: 2025 },
  { title: { en: "Front End – Angular", ar: "تطوير الواجهات الأمامية – Angular" }, issuer: { en: "Information Technology Institute (ITI)", ar: "معهد تكنولوجيا المعلومات (ITI)" }, year: 2023 },
  { title: { en: "Software Fundamentals", ar: "أساسيات البرمجيات" }, issuer: { en: "Information Technology Institute (ITI)", ar: "معهد تكنولوجيا المعلومات (ITI)" }, year: 2022 },
  { title: { en: "Cyber Security", ar: "الأمن السيبراني" }, issuer: { en: "Information Technology Institute (ITI)", ar: "معهد تكنولوجيا المعلومات (ITI)" }, year: 2024 },
  { title: { en: "NASA Space Apps Challenge", ar: "تحدي ناسا Space Apps" }, issuer: { en: "NASA", ar: "ناسا" }, year: 2024 },
  { title: { en: "Graduation Achievement", ar: "شهادة تقدير عند التخرج" }, issuer: { en: "Egyptian E-Learning University (EELU)", ar: "الجامعة المصرية للتعلم الإلكتروني" }, year: 2025 },
  
  { title: { en: "Device Configuration & Management", ar: "إعداد وإدارة الأجهزة" }, issuer: { en: "ITS / Certiport", ar: "ITS / Certiport" }, year: 2024 },
  { title: { en: "Network Virtualization Concepts", ar: "مفاهيم المحاكاة الافتراضية للشبكات" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "Cloud & Virtualization Concepts", ar: "مفاهيم الحوسبة السحابية والمحاكاة الافتراضية" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "Ethical Hacking", ar: "الاختراق الأخلاقي" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "Implementation of Computer Network Fundamentals", ar: "تطبيق أساسيات شبكات الحاسب" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "OWASP Top 10 Web 2021", ar: "OWASP Top 10 للويب 2021" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "Python", ar: "بايثون" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "Computer Network Fundamentals", ar: "أساسيات شبكات الحاسب" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "Red Hat System Administration I", ar: "إدارة أنظمة Red Hat (1)" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 },
  { title: { en: "SSDLC", ar: "دورة حياة تطوير البرمجيات الآمنة SSDLC" }, issuer: { en: "Mahara Tech", ar: "Mahara Tech" }, year: 2022 }
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

Object.assign(T.en, { st_apps: "Live websites", p_all: "All", p_search: "Search projects…", p_more: "Show more", p_hl: "Highlights",
  p_count: "{n} live projects across {c} categories", preview: "Preview", open: "Open site", desktop: "Desktop", mobile: "Mobile",
  pvhint: "Blank preview? Use Open site.", p_none: "No projects match your search.", shown: "Showing {a} of {b}" });
Object.assign(T.ar, { st_apps: "موقع منشور", p_all: "الكل", p_search: "ابحث في المشاريع…", p_more: "عرض المزيد", p_hl: "أبرز الأعمال",
  p_count: "{n} مشروع منشور في {c} تصنيفات", preview: "معاينة", open: "فتح الموقع", desktop: "كمبيوتر", mobile: "موبايل",
  pvhint: "المعاينة فارغة؟ استخدم فتح الموقع.", p_none: "لا توجد مشاريع مطابقة لبحثك.", shown: "عرض {a} من {b}" });
