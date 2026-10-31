export const data = {
  name: "Athulya Joseph",
  initials: "AJ",
  title: "Senior Full-Stack Engineer",
  role: "Technical Lead",
  headline: "I build fast, reliable web platforms — from Laravel APIs to React/TypeScript frontends and the pipelines that ship them.",
  intro:
    "9+ years delivering production systems for enterprise, logistics and e-commerce clients. I lead full-stack delivery, modernize legacy platforms and keep releases predictable.",
  location: "Berlin, Germany",
  availability: "Open to Senior Full-Stack & Technical Lead roles",
  email: "athulyajoseph0@gmail.com",
  phone: "+49 152 1453 2946",
  linkedin: "https://linkedin.com/in/athulyajoseph",
  github: "https://github.com/athulyajoseph",

  heroStack: ["PHP", "Laravel", "React", "TypeScript", "PostgreSQL", "Docker"],

  stats: [
    { num: "9+", label: "Years building for the web" },
    { num: "15+", label: "Production applications shipped" },
    { num: "100k+", label: "Users served" },
  ],

  about: [
    "I'm strongest where backend, frontend and delivery meet: designing REST APIs, tuning PostgreSQL and MySQL queries, caching, and turning manual releases into automated pipelines.",
    "At Experion Technologies I re-architected xPort, a port management platform, from .NET and AngularJS to a Laravel API with a React/TypeScript frontend, and introduced Docker, Redis and Jenkins CI/CD along the way. I've also led AEM, Contentful and Adobe Analytics/Target work for global brands.",
    "Clients trust me as their main technical contact — on-site in Suriname and remotely — and I mentor developers through code reviews and sprint planning.",
  ],

  strengths: [
    { title: "Full-stack delivery", text: "Laravel APIs, React/TypeScript frontends, Agile/Scrum teams." },
    { title: "Legacy modernization", text: "Re-architecting .NET and AngularJS systems without stopping the business." },
    { title: "Performance", text: "Query optimization, Redis caching, removing redundant API calls." },
    { title: "Release automation", text: "Dockerized environments and Jenkins CI/CD replacing manual releases." },
  ],

  experience: [
    {
      company: "Experion Technologies",
      location: "Kochi, India · On-site in Suriname · Remote",
      period: "Aug 2021 — Present",
      roles: [
        { title: "Consultant", period: "Nov 2025 — Present" },
        { title: "Technical Lead", period: "Oct 2025 — Nov 2025" },
        { title: "Lead Software Engineer", period: "Oct 2023 — Oct 2025" },
        { title: "Senior Software Engineer", period: "Aug 2021 — Sep 2023" },
      ],
      bullets: [
        "Re-architected xPort, a port management platform, from .NET and AngularJS to a Laravel API and React/TypeScript frontend, introducing Dockerized environments and Redis caching.",
        "Replaced manual releases with Docker-based Jenkins CI/CD pipelines, automated dev and QA deployments, Jira-tracked releases and standardized GitHub conventions.",
        "Optimized PostgreSQL and MySQL queries and Redis caching strategies, improving API response times and reliability.",
        "Stabilized the Laravel/Angular platform of Flexible Drive, an Australian auto parts supplier, by removing redundant API calls, restructuring API data and adding client-side caching.",
        "Led AEM, Contentful and Adobe Analytics/Target delivery for enterprise clients, including A/B testing, behavior tracking and stakeholder dashboards.",
        "Primary technical contact for clients on-site in Suriname and remotely; mentor developers, lead code reviews and run sprint planning.",
      ],
      tags: ["Laravel", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Jenkins", "AEM", "Contentful", "Adobe Analytics"],
    },
    {
      company: "Qaptive Technologies",
      location: "Kochi, India",
      period: "Mar 2019 — Mar 2021",
      roles: [{ title: "PHP Developer", period: "Mar 2019 — Mar 2021" }],
      bullets: [
        "Sole backend developer for Loqqat, a real-time school bus tracking platform, and built the backend for Loqqat Ride, an employee commute platform.",
        "Built REST APIs for the Android and iOS apps and integrated GPS data with Google Maps for live vehicle tracking.",
        "Designed and optimized MySQL schemas for high-frequency location data; built Magento modules for e-commerce clients.",
      ],
      tags: ["Laravel", "MySQL", "REST APIs", "Google Maps API", "Magento"],
    },
    {
      company: "Ridgecone Technologies",
      location: "Cherthala, India",
      period: "Feb 2018 — Jan 2019",
      roles: [{ title: "Web Developer", period: "Feb 2018 — Jan 2019" }],
      bullets: [
        "Built custom WordPress themes and plugins, including PHP and MySQL backend features.",
        "Managed CMS migrations and third-party integrations.",
      ],
      tags: ["WordPress", "PHP", "MySQL"],
    },
    {
      company: "BC to AD Hyperlink Ltd",
      location: "India",
      period: "Jan 2017 — Feb 2018",
      roles: [{ title: "PHP Developer", period: "Jan 2017 — Feb 2018" }],
      bullets: [
        "Developed PHP backend modules from business requirements and contributed to technical documentation.",
        "Supported testing, deployment and post-release maintenance.",
      ],
      tags: ["PHP", "CodeIgniter", "MySQL"],
    },
  ],

  projects: [
    {
      client: "xPort",
      name: "Port management platform",
      desc: "Led the migration of a legacy .NET/AngularJS platform to a Laravel API and React/TypeScript frontend, with Docker-based CI/CD and Redis caching for high-throughput operations.",
      highlights: ["Legacy → modern stack", "Automated releases", "Faster API responses"],
      tags: ["Laravel", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      featured: true,
    },
    {
      client: "Global motorcycle brand · USA",
      name: "Global web platform",
      desc: "Full-stack delivery on AEM and Contentful, with Adobe Target and Adobe Analytics powering personalization and A/B testing across global markets.",
      highlights: ["Personalization", "A/B testing", "Global markets"],
      tags: ["AEM", "Contentful", "Adobe Target", "Adobe Analytics"],
      featured: true,
    },
    {
      client: "Loqqat",
      name: "Real-time school bus tracking",
      desc: "Sole backend developer. REST APIs for Android and iOS apps, live GPS tracking on Google Maps, and MySQL schemas tuned for high-frequency location data.",
      tags: ["Laravel", "MySQL", "REST APIs", "Google Maps"],
    },
    {
      client: "Loqqat Ride",
      name: "Employee commute platform",
      desc: "Built the Laravel backend for an enterprise commute product: trip tracking, scheduling and integrations with third-party services.",
      tags: ["Laravel", "REST APIs", "JavaScript"],
    },
    {
      client: "Side project",
      name: "FreshandGood",
      desc: "React + TypeScript web app for finding traditional Kerala foods in nearby shops: geolocation shop finder, Leaflet maps, typo-tolerant search and SEO-ready pages.",
      tags: ["React", "TypeScript", "Vite", "Tailwind", "Leaflet"],
      links: [
        { label: "Live site", href: "https://freshandgood.netlify.app/" },
        { label: "Code", href: "https://github.com/athulyajoseph/FreshandGood" },
      ],
    },
  ],

  skills: [
    { title: "Backend", tags: ["PHP", "Laravel", "RESTful APIs", "CodeIgniter", "MVC", "PHPUnit"] },
    { title: "Frontend", tags: ["React", "TypeScript", "JavaScript (ES6+)", "Angular", "AngularJS", "HTML5 / CSS3"] },
    { title: "Data & caching", tags: ["PostgreSQL", "MySQL", "Redis", "Memcached"] },
    { title: "DevOps & cloud", tags: ["Docker", "Jenkins", "CI/CD", "AWS S3", "Git / GitHub", "Linux"] },
    { title: "CMS & analytics", tags: ["AEM", "Contentful", "Adobe Analytics", "Adobe Target", "WordPress", "Magento"] },
    { title: "Ways of working", tags: ["Agile / Scrum", "Sprint planning", "Code reviews", "Mentoring", "Client communication"] },
  ],

  education: [
    { short: "MCA", degree: "Master of Computer Applications", school: "M.G. University, Kerala", year: "2011 — 2014" },
    { short: "BCA", degree: "Bachelor of Computer Applications", school: "M.G. University, Kerala", year: "2008 — 2011" },
  ],
};
