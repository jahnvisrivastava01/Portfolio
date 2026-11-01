// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Jahnvi Srivastava",
  role: "Full Stack Developer",
  location: "Navi Mumbai, Maharashtra",
  email: "jahnvisrivastava0104@gmail.com",
  github: "https://github.com/jahnvisrivastava01",
  linkedin: "https://www.linkedin.com/in/jahnvisrivastava20",
  resume: "/JahnviSrivastava_Resume.pdf",
  summary:
    "Computer Science undergraduate at Amity University Mumbai building full-stack web and mobile applications. Most recently a Full Stack Developer Intern at State Bank of India, shipping an enterprise application with ASP.NET Core MVC, C#, SQL Server and Entity Framework Core. I also work across React, Node.js, FastAPI and Flutter.",
};

export const stats = [
  { value: "4", label: "Internships" },
  { value: "8.59", label: "CGPA" },
  { value: "100+", label: "DSA problems solved" },
];

export const experience = [
  {
    company: "State Bank of India (SBI)",
    role: "Full Stack Developer Intern",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Developed an enterprise-level Title Deed Management System using ASP.NET Core MVC, C#, SQL Server, Entity Framework Core, Razor Views, Bootstrap, JavaScript and AJAX.",
      "Implemented secure authentication, CRUD operations, database relationships, role-based modules, server-side validation and document management following MVC architecture and clean coding practices.",
    ],
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "EF Core", "Razor", "AJAX"],
  },
  {
    company: "Ibtidaa Tech",
    role: "Frontend Developer Intern",
    period: "Jul 2025 – Aug 2025",
    points: [
      "Developed a responsive personal portfolio website in React showcasing education, skills, projects, achievements and contact details.",
      "Built reusable React components and interactive navigation across Home, Education, Skills, Projects, Achievements and Contact sections.",
    ],
    stack: ["React", "JavaScript", "CSS"],
  },
  {
    company: "Ibtidaa Tech",
    role: "Graphic & Media Design Intern",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Designed the company's logo, business cards and promotional graphics while keeping brand identity consistent across digital assets.",
    ],
    stack: ["Branding", "Graphic Design"],
  },
  {
    company: "StaxTech",
    role: "Software Development Intern",
    period: "May 2025 – Jun 2025",
    points: [
      "Developed a responsive weather website with HTML, CSS and JavaScript that shows real-time weather for any searched city.",
      "Designed an interactive interface with dynamic weather updates and responsive layouts.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
  },
];

// Set `github` / `live` to the exact repo or deployment URL when available.
export const projects = [
  {
    title: "Indian Job Market Intelligence",
    tagline: "Full-stack analytics on ~98K Indian job listings",
    points: [
      "Seven pages — overview, market heatmaps, salary percentiles, skill lookup across 42K skills, skill-gap check and full-text job explorer — sharing one URL-based filter set.",
      "Cleaning pipeline in pandas: city normalisation, exact skill matching, salary outlier removal and a 21-family role classifier.",
      "ML salary predictor with P10/P50/P90 quantile models (scikit-learn), 21% median absolute error on held-out data.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Recharts", "FastAPI", "pandas", "scikit-learn"],
    github: "https://github.com/jahnvisrivastava01/Indian_Job_Market_Dashboard",
    live: "https://indian-job-market-dashboard.vercel.app",
  },
  {
    title: "Drive — Google Drive Clone",
    tagline: "Full-stack cloud storage application",
    points: [
      "Email/password and Google Sign-In using JWT, bcrypt and Firebase Authentication.",
      "File upload, dashboard, recent, starred and delete flows built with Multer and MongoDB.",
      "Responsive EJS + Tailwind interface, deployed on Render.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "EJS", "Tailwind CSS"],
    github: "https://github.com/jahnvisrivastava01",
    live: "https://drive-iykg.onrender.com",
  },
  {
    title: "ResumeIQ — AI Resume Analyzer",
    tagline: "ML-powered resume classification",
    points: [
      "React frontend and FastAPI backend with resume upload and text extraction.",
      "TF-IDF feature extraction and a Naive Bayes model to analyse and classify resume text.",
      "Deployed on Render for online access.",
    ],
    stack: ["React", "FastAPI", "Python", "TF-IDF", "Naive Bayes"],
    github: "https://github.com/jahnvisrivastava01/resume-analyzer",
    live: "https://resume-scanner-ai-363o.onrender.com",
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "C#", "Dart", "SQL", "C++"] },
  { group: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend & APIs", items: ["ASP.NET Core MVC", "FastAPI", "Node.js", "Express.js", "REST APIs"] },
  { group: "Mobile", items: ["Flutter", "Android Development", "Responsive UI"] },
  { group: "Databases & Cloud", items: ["SQL Server", "PostgreSQL", "MongoDB", "SQLite", "Firebase Firestore", "Render"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"] },
  { group: "Core Concepts", items: ["OOP", "Data Structures & Algorithms", "Authentication", "State Management", "Async Programming"] },
];

export const education = [
  {
    school: "Amity University Mumbai",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2023 – 2027",
    detail: "CGPA: 8.59",
  },
  {
    school: "Ryan International School, Navi Mumbai",
    degree: "Senior Secondary (CBSE)",
    period: "2022 – 2023",
    detail: "72%",
  },
];

export const leadership = {
  title: "Technical Lead",
  org: "Google Developer Groups (GDG) On Campus, Amity University Mumbai",
  period: "2024 – 2025",
  points: [
    "Coordinated technical events — documentation, presentations and event logistics.",
    "Created presentation materials and maintained documentation for workshops and community activities.",
    "Worked with the organising team on running and promoting developer-focused campus events.",
  ],
};

export const achievements = [
  "Participated in HackCelestial 2.0 Hackathon",
  "Participated in Vibe2Ship Hackathon by Coding Ninjas",
  "Solved 100+ Data Structures & Algorithms problems",
];

export const certifications = [
  { name: "Full Stack Web Development Bootcamp", issuer: "Udemy" },
  { name: "The Complete Flutter Development Bootcamp with Dart", issuer: "Udemy" },
  { name: "Backend Development Bootcamp 2026: Python, Flask, REST APIs, Docker & SQL", issuer: "Udemy" },
  { name: "Full Stack Generative and Agentic AI with Python", issuer: "Udemy" },
  { name: "Web Development Training", issuer: "Internshala" },
  { name: "Internship & Job Preparation Training", issuer: "Internshala" },
  { name: "Power BI Workshop", issuer: "" },
  { name: "Cybersecurity Certification", issuer: "" },
];
