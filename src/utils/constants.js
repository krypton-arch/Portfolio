// Personal Information
export const PERSONAL_INFO = {
    name: "Sounak Chakraborty",
    tagline: "FULL-STACK DEVELOPER & SYSTEMS BUILDER",
    email: "sounakchakraborty371@gmail.com",
    phone: "+91 9831297490",
    linkedin: "https://www.linkedin.com/in/sounak-chakraborty-6a39a311a/",
    github: "https://github.com/krypton-arch",
    portfolio: "https://sounakdev.netlify.app",
    resume: "/MyResume.pdf",
    profilePic: "/ProfilePic.png",
};

// Bio
export const BIO = `MCA student (2027) at Christ University with experience building AI-powered applications, distributed backend systems, and full-stack web platforms using Java, Spring Boot, React, Django, PostgreSQL, Redis, and Docker. Interested in software engineering, backend development, and scalable systems.`;

// Skills categorized
export const SKILLS = {
    Languages: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["Spring Boot", "Django", "React", "Next.js", "Express.js", "Socket.io", "Tailwind CSS"],
    "Databases & ORM": ["PostgreSQL (pgvector)", "MySQL 8", "MongoDB", "Redis", "Spring Data JPA (Hibernate)", "Mongoose"],
    "Developer Tools": ["Git", "Docker", "Maven", "Postman", "VS Code", "Eclipse"],
    "Core CS Concepts": ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
    "Backend Concepts": ["REST APIs", "JWT Authentication", "Spring Security", "Circuit Breaker", "Rate Limiting", "Load Balancing", "Distributed Tracing"],
    "AI & ML": ["RAG", "Vector Search", "Reciprocal Rank Fusion (RRF)", "Ollama", "Google Gemini API"],
    "Operating Systems": ["Linux", "UNIX", "Windows"],
    Integrations: ["Razorpay API", "Google OAuth (NextAuth)", "SMTP Mail"],
};

// Projects
export const PROJECTS = [
    {
        id: 1,
        title: "RepoSage",
        subtitle: "Scale-Safe Repository Intelligence System",
        year: "2026",
        description:
            "A private offline codebase Q&A search engine supporting repositories with 10,000+ files. Features hybrid retrieval using HNSW vector search and full-text search, fused via Reciprocal Rank Fusion and Cross-Encoder reranking.",
        techStack: [
            "Django",
            "Next.js 16",
            "React 19",
            "PostgreSQL",
            "pgvector",
        ],
        features: [
            "Hybrid retrieval with HNSW vector search + full-text search via RRF and Cross-Encoder reranking, reducing irrelevant results by ~35%",
            "Incremental ingestion pipeline with SHA-256 deduplication and checkpoint-resume, reducing re-indexing time by 60%+",
            "Telemetry console for monitoring execution latency and retrieval quality",
            "Staleness tracker for detecting code-to-document knowledge drift",
        ],
        github: "https://github.com/krypton-arch/RepoSage",
        demo: null,
        isPrivate: false,
    },
    {
        id: 2,
        title: "Gatekeeper",
        subtitle: "Intelligent Adaptive API Gateway",
        year: "2026",
        description:
            "A self-healing API gateway sustaining over 5,000 requests per minute during load testing. Routes requests to microservices, enforces security policies, and provides centralized monitoring.",
        techStack: [
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
            "React",
            "Socket.io",
            "Docker",
        ],
        features: [
            "Redis-backed token bucket rate limiting, three-state circuit breaking, and automated DDoS protection",
            "Weighted round-robin load balancing with backend health monitoring and automatic failover",
            "W3C-compatible distributed tracing across microservices",
            "Real-time React dashboard with Socket.io WebSocket streaming for live traffic & alerts",
        ],
        github: "https://github.com/zs0c131y/Gatekeeper",
        demo: "https://gatekeeper-full.fly.dev/",
        isPrivate: false,
    },
    {
        id: 3,
        title: "Fitoholic",
        subtitle: "Full-Stack AI-Powered Fitness Tracker",
        year: "2025",
        description:
            "A fitness tracking web application with real-time tracking of steps, calories, water intake, and weight. Integrates Razorpay payments and Google Gemini API for AI-powered fitness recommendations.",
        techStack: [
            "Spring Boot",
            "Java 21",
            "React 18",
            "MySQL 8",
            "JWT",
            "Razorpay API",
            "Google Gemini API",
            "Tailwind CSS",
        ],
        features: [
            "Razorpay payment processing and Google Gemini API for AI fitness recommendations",
            "Spring Security 6 and JWT-based authentication with password reset",
            "Interactive dashboards with animated visualizations using Framer Motion",
            "Responsive UI with Tailwind CSS and Light/Dark theme toggle",
        ],
        github: "https://github.com/krypton-arch/Fitoholic_Project",
        demo: null,
        isPrivate: false,
    },
];

// Education
export const EDUCATION = [
    {
        id: 1,
        institution: "Christ University",
        location: "Bangalore",
        degree: "Master of Computer Applications (MCA)",
        duration: "2025 - 2027",
        grade: null,
    },
    {
        id: 2,
        institution: "Techno Main Salt Lake",
        location: "Kolkata",
        degree: "Bachelor of Computer Applications (BCA)",
        duration: "2022 - 2025",
        grade: "7.8 CGPA",
    },
    {
        id: 3,
        institution: "South Point High School",
        location: "Kolkata",
        degree: "Higher Secondary — Commerce",
        duration: "2006 - 2022",
        grade: "86%",
    },
];

// Navigation Links
export const NAV_LINKS = [
    { name: "PROFILE", href: "#home" },
    { name: "SKILLS", href: "#skills" },
    { name: "GALLERY", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
];
