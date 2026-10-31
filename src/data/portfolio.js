export const data = {
  name: "Athulya Joseph",
  title: "Senior Full Stack Developer",
  tagline: "PHP · Laravel · React · AngularJS",
  summary:
    "Senior Full-Stack Developer with 8+ years of experience building scalable web applications and enterprise platforms. I specialise in PHP, Laravel, JavaScript, and modern frontend frameworks, with a focus on developing reliable, maintainable systems that perform consistently in production environments. My work spans backend architecture, API design, and responsive user interfaces. I have contributed to and led the delivery of multiple production systems across enterprise and e-commerce domains, with an emphasis on clean architecture, performance optimisation, and long-term maintainability. I work closely with cross-functional teams to deliver stable, well-tested solutions in structured development environments.",
  location: "Berlin, Germany",
  email: "athulyajoseph0@gmail.com",
  phone: "+49 152 1453 2946",
  linkedin: "https://linkedin.com/in/athulyajoseph",
  github: "https://github.com/athulyajoseph",

  stats: [
    { num: "8+", label: "Years Experience" },
    { num: "4", label: "Companies" },
    { num: "15+", label: "Technologies" },
    { num: "100k+", label: "Users Served" },
  ],

  about: [
    "I'm a Senior Full-Stack Developer with over 8 years of experience designing and delivering scalable web applications across diverse industries - from e-commerce and enterprise portals to content management platforms. I've led and contributed to teams across multiple organisations, consistently shipping clean, maintainable systems that perform under real-world conditions.",
    "My core expertise spans PHP and Laravel on the back-end, React and TypeScript on the front-end, and headless CMS platforms - particularly AEM and Contentful - for enterprise-scale content delivery. I take a pragmatic approach to architecture: choosing the right tool for the problem, writing code that's easy to hand off, and keeping systems observable and maintainable over time. I've led architecture migrations, built RESTful microservice APIs at scale, and integrated analytics platforms like Adobe Analytics and Adobe Target.",
    "What drives me is impact. I get the most satisfaction when something I've built genuinely makes a user's day easier - not just technically impressive, but actually needed.",
  ],
  
  aboutBullets: [
    "Delivered 15+ production applications across enterprise and e-commerce domains", 
    "Contributed to platforms serving 100K+ users with a focus on reliability and performance", 
    "Designed and developed RESTful APIs and backend systems using PHP and Laravel", 
    "Built responsive frontend applications using React and Angular", 
    "Worked with AEM, Contentful, and headless CMS architectures", 
    "Improved application performance and maintainability across multiple projects", 
    "Collaborated with cross-functional teams in agile development environments"
  ],

  skills: [
    {
      skillicon: "faCode", 
      title: "Backend",
      tags: ["PHP", "Laravel", "CodeIgniter", "Core PHP", "RESTful APIs", "MVC Architecture"],
    },
    {
      skillicon: "faDesktop",
      title: "Frontend",
      tags: ["React", "AngularJS", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      skillicon: "faDatabase",
      title: "Databases",
      tags: ["PostgreSQL", "MySQL", "Redis", "Memcached"],
    },
    {
      skillicon: "faCloud",
      title: "DevOps & Cloud",
      tags: ["Docker", "Jenkins", "CI/CD", "AWS S3", "GitHub", "Linux", "Apache"],
    },
    {
      skillicon: "faChartLine",
      title: "Analytics & CMS",
      tags: ["Adobe Analytics", "Adobe Target", "AEM", "WordPress", "Contentful", "Magento"],
    },
    {
      icon: "faCheckSquare",
      title: "Practices & Tools",
      tags: ["Debugging", "Performance Optimization", "Code Refactoring", "Agile/Scrum", "PHPUnit", "Technical Documentation"],
    },
  ],

  experience: [
    {
      role: "Technical Lead",
      company: "Experion Technologies",
      period: "Aug 2021 - Present",
      bullets: [
        "Led full stack development for Harley-Davidson and xPort (port management platform) using Laravel, React, AngularJS, AEM & Contentful.",
        "Designed and maintained scalable RESTful APIs handling high traffic and complex business logic.",
        "Spearheaded a major architecture migration for xPort, modernizing the codebase for improved scalability and deployment reliability.",
        "Optimized PostgreSQL, MySQL, and Redis caching strategies to boost API response times.",
        "Implemented Docker-based deployments and CI/CD pipelines for automated releases.",
        "Integrated Adobe Analytics & Adobe Target for A/B personalization and user behavior tracking.",
        "Collaborated with cross-functional teams to deliver features aligned with business needs",
        "Mentored developers and conducted code reviews to maintain code quality",
      ],
      tags: ["PHP", "Laravel", "React", "AngularJS", "TypeScript", "PostgreSQL", "MySQL", "AEM", "Contentful", "Adobe Analytics", "Adobe Target","Contentsquare", "Redis", "Active Directory", "Jenkins", "Jira", "Docker", "Linux", "Agile", "Scrum", "PHPUnit", "Sprint Planning", "Technical Documentation"],
    },
    {
      role: "PHP Developer",
      company: "Qaptive Technologies",
      period: "Mar 2019 - Mar 2021",
      bullets: [
        "Built and maintained backend services for Loqqat (school bus tracking) and Loqqat Ride (employee commute platform) using Laravel, Angular & Bootstrap.",
        "Developed RESTful APIs and integrated third-party cloud services for real-time mobile data exchange.",
        "Designed and optimized MySQL schemas for high-frequency location and tracking data.",
        "Delivered backend support for Magento e-commerce projects including custom modules and integrations.",
      ],
      tags: ["Laravel", "CodeIgniter", "MySQL", "Magento", "RESTful API", "Amazon S3", "GitHub", "Bootstrap", "Memcached", "JavaScript", "JQuery", "Moodle"],
    },
    {
      role: "Web Developer",
      company: "Ridgecone Technologies",
      period: "Feb 2018 - Jan 2019",
      bullets: [
        "Developed and customized WordPress themes and plugins.",
        "Implemented PHP-based backend features integrated with MySQL.",
        "Managed CMS migrations and third-party integrations.",
      ],
      tags: ["WordPress", "Core PHP", "MySQL", "WooCommerce", "Custom Theme Development", "Plugin Development"],
    },
    {
      role: "PHP Developer",
      company: "BC to AD Hyperlink Ltd",
      period: "Jan 2017 - Feb 2018",
      bullets: [
        "Developed backend modules using PHP aligned with business requirements.",
        "Contributed to sprint planning and technical documentation.",
        "Supported testing, deployment, and post-release maintenance.",
      ],
      tags: ["PHP", "CodeIgniter", "WordPress", "Agile", "MySQL"],
    },
  ],

  projects: [
    {
      num: "01",
      client: "Harley-Davidson",
      name: "Global Web Platform",
      desc: "Led full stack development of the Harley-Davidson web platform, integrating AEM, Contentful with Adobe Target and Adobe Analytics for personalized user experiences across global markets.",
      tags: ["AEM", "Contentful", "Adobe Analytics", "Adobe Target"],
    },
    {
      num: "02",
      client: "xPort",
      name: "Port Management Platform",
      desc: "Architected and led migration of a legacy port management platform to a modern scalable architecture. Built RESTful APIs, Docker CI/CD pipelines, and optimized PostgreSQL/Redis for high-throughput operations.",
      tags: ["Laravel", "AngularJS", "PostgreSQL", "Docker", "Redis"],
    },
    {
      num: "03",
      client: "Loqqat",
      name: "School Bus Tracking System",
      desc: "Built real-time vehicle tracking backend for schools and enterprises. Designed high-frequency MySQL schemas, REST APIs for mobile clients, and cloud integrations handling thousands of concurrent location updates.",
      tags: ["Laravel", "Angular", "MySQL", "REST API", "Amazon S3"],   
    },
    {
      num: "04",
      client: "Loqqat Ride",
      name: "Employee Commute Platform",
      desc: "Developed the employee commute management platform for enterprise clients. Integrated third-party cloud services, enabling seamless tracking, scheduling, and route optimization.",
      tags: ["Laravel", "Bootstrap", "REST API", "JavaScript"],
    },
  ],

  education: [
    {
      short: "MCA",
      degree: "Master of Computer Applications",
      school: "M.G. University, Kerala, India",
      year: "2011 – 2014",
    },
    {
      short: "BCA",
      degree: "Bachelor of Computer Applications",
      school: "M.G. University, Kerala, India",
      year: "2008 – 2011",
    },
  ],
};
