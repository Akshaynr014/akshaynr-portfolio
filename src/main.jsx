import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronUp,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  CheckCircle2,
  Cpu,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rocket,
  Search,
  Server,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TestTube2,
  Trophy,
  X
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Akshay N R",
  role: "Java Full Stack Developer",
  email: "akshaynr014@gmail.com",
  phone: "+91 93536 63722",
  location: "Bengaluru, Karnataka",
  github: "https://github.com/Akshaynr014",
  linkedin: "https://www.linkedin.com/in/akshay-n-r-2b209b32a/",
  resume: "/assets/Akshay-N-R-Resume.pdf",
  photo: "/assets/profile.jpg"
};

const navLinks = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];
const marqueeSkills = ["Java", "Spring Boot", "React", "Microservices", "REST API", "PostgreSQL", "Docker", "JWT", "JUnit", "Mockito", "Swagger", "Tailwind CSS"];

const commandLinks = [
  { label: "View projects", href: "#projects" },
  { label: "Download resume", href: profile.resume, download: true },
  { label: "Send email", href: `mailto:${profile.email}` },
  { label: "Open GitHub", href: profile.github, external: true },
  { label: "Open LinkedIn", href: profile.linkedin, external: true }
];

const snapshot = [
  { value: "9.14", label: "CGPA" },
  { value: "2", label: "Internships" },
  { value: "7", label: "Microservices in e-commerce build" },
  { value: "68", label: "Unit tests in project work" }
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js 18", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot 3.x", "Spring MVC", "Spring Security", "Hibernate", "JDBC", "JSP", "Servlets"]
  },
  {
    title: "APIs & Architecture",
    icon: Layers3,
    skills: ["REST APIs", "Microservices", "Spring Cloud", "Eureka", "API Gateway", "OpenFeign", "Swagger"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL 15", "MySQL", "SQL", "JPA", "Database-per-Service"]
  },
  {
    title: "Security & Testing",
    icon: ShieldCheck,
    skills: ["JWT", "RBAC", "JUnit 5", "Mockito", "Jacoco", "Global Exception Handling"]
  },
  {
    title: "Tools",
    icon: TestTube2,
    skills: ["Docker", "Docker Compose", "Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA", "VS Code"]
  }
];

const experiences = [
  {
    role: "Java Full-Stack Developer Intern",
    company: "Swajyot Technologies Pvt. Ltd.",
    location: "Koramangala, Bengaluru",
    period: "Dec 2025 - Jul 2026",
    bullets: [
      "Designed and developed a Quality Management System with role-based access for admins, managers, and employees.",
      "Built approval and rejection workflows, dynamic form management, and PDF generation for quality reports.",
      "Implemented modular Spring Boot microservices, secured REST APIs with JWT, and configured API Gateway routing.",
      "Collaborated in Agile/Scrum sprints, code reviews, daily standups, and cross-functional delivery discussions."
    ]
  },
  {
    role: "Java Full-Stack Developer Intern",
    company: "Dyashin Technosoft Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Jan 2025 - Aug 2025",
    bullets: [
      "Completed structured Java full-stack training and internship work across backend and frontend development.",
      "Built mini-projects using Java, Spring Boot, Hibernate, JSP, Servlets, PostgreSQL, and React.js.",
      "Practiced REST API development, backend-frontend integration, CRUD operations, JPA, and JDBC.",
      "Participated in code reviews, collaborative debugging, and agile team development."
    ]
  }
];

const projects = [
  {
    title: "E-Commerce Microservices Platform with AI Assistant",
    category: "Microservices",
    stack: ["Spring Boot", "React", "PostgreSQL", "Docker", "JWT", "Razorpay", "Ollama", "Eureka"],
    description:
      "A full-stack e-commerce platform built with seven independent services, secure checkout, order tracking, product reviews, and an offline AI assistant for product recommendations.",
    highlights: ["7-service microservices architecture", "Razorpay checkout and order flows", "68 unit tests with JUnit, Mockito, and Jacoco"],
    link: profile.github
  },
  {
    title: "Quality Management System",
    category: "Enterprise",
    stack: ["Java", "Spring Boot", "Microservices", "React", "PostgreSQL", "JWT", "PDF Reports"],
    description:
      "Enterprise web application for role-based quality submissions, approval workflows, real-time status tracking, and server-side PDF generation.",
    highlights: ["Admin, Manager, and Employee dashboards", "Approval and rejection workflow", "React route guards and Spring Security"],
    link: profile.github
  },
  {
    title: "MySocial App",
    category: "Full Stack",
    stack: ["React", "Java", "Spring Boot", "PostgreSQL", "JDBC", "REST API"],
    description:
      "A full-stack social networking application with user registration, login, profile management, post sharing, and messaging features.",
    highlights: ["Authentication and profile flows", "Post sharing features", "Backend-frontend REST integration"],
    link: "https://github.com/Akshaynr014/MySocialApp"
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Netlify"],
    description:
      "A responsive portfolio website created to present skills, projects, and contact details with smooth animations and a clean UI.",
    highlights: ["Mobile-friendly layout", "Netlify deployment", "Job-application focused presentation"],
    link: "https://akshaynrportfolio.netlify.app"
  }
];

const education = [
  {
    degree: "B.E in Computer Science",
    institution: "Dr. SSS Shiva Kumara Mahaswamy College of Engineering, Bengaluru",
    period: "2021 - 2025",
    result: "CGPA: 9.14 / 10"
  },
  {
    degree: "XII - Science",
    institution: "Sharada PU College, Mangalore",
    period: "2020 - 2021",
    result: "93.83%"
  },
  {
    degree: "X - High School",
    institution: "Bhagavan Sri Sathya Sai High School, Dakshina Kannada",
    period: "2018 - 2019",
    result: "89.76%"
  }
];

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function useReveal() {
  React.useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCommandOpen, setIsCommandOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");
  const progress = useScrollProgress();
  useReveal();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandOpen(true);
      }
      if (event.key === "Escape") setIsCommandOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#061018] text-slate-100">
      <Spotlight />
      <AnimatedBackground />
      <div className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-teal-300 via-sky-300 to-amber-200 transition-all duration-150" style={{ width: `${progress}%` }} />
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsCommandOpen={setIsCommandOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero />
        <ShowcaseStrip />
        <SkillMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingDock setIsCommandOpen={setIsCommandOpen} />
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  );
}

function Spotlight() {
  React.useEffect(() => {
    const update = (event) => {
      document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}

function AnimatedBackground() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const count = Math.min(84, Math.floor(window.innerWidth / 18));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
        r: (index % 4 === 0 ? 1.8 : 1.2) * window.devicePixelRatio
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(45, 212, 191, 0.18)");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.08)");
      gradient.addColorStop(1, "rgba(251, 191, 36, 0.12)");

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = i % 5 === 0 ? "rgba(251, 191, 36, 0.55)" : "rgba(125, 211, 252, 0.46)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const next = particles[j];
          const dx = p.x - next.x;
          const dy = p.y - next.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 * window.devicePixelRatio) {
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 1 - dist / (150 * window.devicePixelRatio);
            ctx.lineWidth = 0.45 * window.devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-70" aria-hidden="true" />;
}

function Header({ isMenuOpen, setIsMenuOpen, setIsCommandOpen, theme, setTheme }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061018]/78 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-amber-200 text-sm font-black text-slate-950 shadow-glow">
            AN
          </span>
          <span className="text-sm font-semibold tracking-wide text-white group-hover:text-teal-200">Akshay N R</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button onClick={() => setIsCommandOpen(true)} className="utility-btn">
            <Search size={16} />
            <span>Ctrl K</span>
          </button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="icon-link" aria-label="Toggle visual theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#061018]/95 px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {link}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <button
                onClick={() => {
                  setIsCommandOpen(true);
                  setIsMenuOpen(false);
                }}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-bold text-slate-100"
              >
                Search
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-bold text-slate-100"
              >
                {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 lg:pt-40">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100 shadow-glow">
            <Sparkles size={16} />
            Fresher Java Full Stack Developer
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Java backends, React interfaces, and microservices that feel production-ready.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I am {profile.name}, a Computer Science graduate focused on clean backend architecture, secure REST APIs,
            responsive React interfaces, and practical microservices-based systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={profile.resume} download className="primary-btn">
              <ArrowDownToLine size={19} />
              Download Resume
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
              <ArrowRight size={19} />
            </a>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            <MiniStat value="Java" label="Primary Stack" />
            <MiniStat value="React" label="Frontend" />
            <MiniStat value="Docker" label="DevOps" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {["Spring Security", "Swagger APIs", "PostgreSQL", "JUnit + Mockito"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2">
                <CheckCircle2 size={15} className="text-teal-200" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <CommandCenter />
      </div>
    </section>
  );
}

function ShowcaseStrip() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal grid gap-4 md:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label} className="snapshot-card">
              <p>{item.value}</p>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillMarquee() {
  return (
    <section className="py-5" aria-label="Core technologies">
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              <Star size={14} />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandCenter() {
  const [showPhoto, setShowPhoto] = React.useState(true);

  return (
    <div className="reveal relative mx-auto w-full max-w-xl [perspective:1100px]">
      <div className="hero-device">
        <div className="absolute -right-4 -top-4 rounded-2xl border border-amber-200/30 bg-amber-200/15 px-4 py-2 text-xs font-bold text-amber-100 shadow-2xl">
          Open to work
        </div>
        <div className="grid gap-5 sm:grid-cols-[0.78fr_1fr]">
          <div className="profile-shell">
            {showPhoto ? (
              <img src={profile.photo} alt="Akshay N R" className="profile-photo" onError={() => setShowPhoto(false)} />
            ) : (
              <div className="profile-fallback">AN</div>
            )}
            <div className="orbit-tag left-2 top-5">REST</div>
            <div className="orbit-tag bottom-8 right-0">JWT</div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Developer Console</p>
            <h2 className="mt-2 text-2xl font-black text-white">{profile.name}</h2>
            <p className="mt-1 text-sm font-semibold text-teal-200">{profile.role}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs text-slate-300">
              <p><span className="text-teal-300">stack</span>: Spring Boot + React</p>
              <p><span className="text-sky-300">security</span>: JWT + RBAC</p>
              <p><span className="text-amber-200">focus</span>: REST APIs + Microservices</p>
              <p className="typing-line mt-3 text-white">readyForRole(true)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            ["Core Stack", "Java, Spring Boot, React, PostgreSQL"],
            ["Architecture", "REST APIs, Microservices, Spring Cloud"],
            ["Quality", "JUnit, Mockito, Swagger, Postman"],
            ["Deployment", "Docker, GitHub, Netlify-ready frontend"]
          ].map(([label, value]) => (
            <div key={label} className="feature-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" label="About Me" title="A job-ready fresher with hands-on full-stack project experience.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel reveal p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-300">
            I am an entry-level Java Full Stack Developer with a B.E. in Computer Science Engineering from VTU and
            practical internship experience building web applications with Spring Boot, React.js, PostgreSQL, and REST
            APIs. My work has focused on role-based access control, approval workflows, secure authentication, CRUD
            operations, dynamic PDF generation, and microservices fundamentals.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I enjoy converting real business requirements into maintainable software. I am comfortable working across
            backend services, database design, API documentation, frontend integration, testing, Git-based collaboration,
            and deployment-ready project structure.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Metric value="9.14" label="B.E. CGPA" />
          <Metric value="2" label="Full-stack internships" />
          <Metric value="68" label="Unit tests in e-commerce project" />
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="Technical Skills" title="A practical toolkit for full-stack Java development.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article key={title} className="tilt-card reveal group glass-panel p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="Experience" title="Internship experience across enterprise and training projects.">
      <div className="relative grid gap-6 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-teal-300 before:to-sky-300 sm:before:block">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="reveal glass-panel p-6 sm:ml-12 sm:p-8">
            <div className="absolute -left-[3.15rem] mt-1 hidden h-8 w-8 rounded-full border-4 border-[#061018] bg-teal-300 shadow-glow sm:block" />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                <p className="mt-2 text-lg font-semibold text-teal-200">{item.company}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} />
                  {item.location}
                </p>
              </div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                <CalendarDays size={16} />
                {item.period}
              </p>
            </div>
            <ul className="mt-6 grid gap-3 text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const [active, setActive] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);
  const visibleProjects = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <Section id="projects" label="Projects" title="Selected work aligned with Java full-stack roles.">
      <FeaturedProject />
      <div className="reveal mb-7 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActive(filter)} className={`filter-pill ${active === filter ? "is-active" : ""}`}>
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.title} className="project-card reveal group glass-panel flex h-full flex-col p-6">
            <div className="project-visual mb-5">
              <div className="project-window">
                <span />
                <span />
                <span />
              </div>
              <div className="project-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-300/15 text-sky-200">
                <BriefcaseBusiness size={23} />
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="icon-link" aria-label={`Open ${project.title}`}>
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-amber-100">{project.category}</p>
            <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-5 grid gap-2 text-sm text-slate-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => setSelectedProject(project)} className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition hover:border-teal-300/50 hover:bg-teal-300/10">
              Project details
              <ArrowRight size={16} />
            </button>
          </article>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}

function FeaturedProject() {
  return (
    <div className="reveal mb-7 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-white/[0.06] to-teal-300/[0.08] p-6 shadow-2xl shadow-slate-950/30 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-200/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-amber-100">
            <Trophy size={15} />
            Featured build
          </p>
          <h3 className="text-2xl font-black text-white sm:text-3xl">Microservices e-commerce platform with offline AI assistant</h3>
          <p className="mt-4 leading-8 text-slate-300">
            A resume-backed project that shows backend structure, service separation, secure checkout, API documentation, testing discipline, and Docker-based delivery.
          </p>
        </div>
        <div className="architecture-board">
          {["API Gateway", "User Service", "Product Service", "Order Service", "Payment Service", "AI Assistant", "Eureka"].map((service, index) => (
            <span key={service} style={{ animationDelay: `${index * 120}ms` }}>
              <Cpu size={16} />
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/75 p-5 backdrop-blur-xl" role="dialog" aria-modal="true">
      <div className="modal-panel w-full max-w-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-200">{project.category}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
          </div>
          <button onClick={onClose} className="icon-link" aria-label="Close project details">
            <X size={18} />
          </button>
        </div>
        <p className="mt-5 leading-8 text-slate-300">{project.description}</p>
        <div className="mt-6 grid gap-3">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200">
              <CheckCircle2 className="mt-0.5 shrink-0 text-teal-200" size={18} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="skill-badge">{tech}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="primary-btn mt-7 w-full sm:w-fit">
          Open project link
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef(null);
  const visibleLinks = commandLinks.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  React.useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const openItem = (item) => {
    if (item.download) {
      window.location.href = item.href;
    } else if (item.external) {
      window.open(item.href, "_blank", "noreferrer");
    } else {
      window.location.href = item.href;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/75 p-4 backdrop-blur-xl" onMouseDown={onClose}>
      <div className="command-panel mx-auto mt-24 max-w-xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <Search className="text-teal-200" size={20} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search actions..."
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="grid gap-2 p-3">
          {visibleLinks.map((item) => (
            <button key={item.label} onClick={() => openItem(item)} className="command-item">
              <span>{item.label}</span>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <Section id="education" label="Education" title="Academic foundation in computer science.">
      <div className="grid gap-5">
        {education.map((item) => (
          <article key={item.degree} className="reveal glass-panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
                <GraduationCap size={24} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                <p className="mt-1 text-slate-300">{item.institution}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-semibold text-teal-200">{item.result}</p>
              <p className="text-sm text-slate-400">{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: Phone },
    { label: "LinkedIn", value: "akshay-n-r-2b209b32a", href: profile.linkedin, icon: BriefcaseBusiness },
    { label: "GitHub", value: "github.com/Akshaynr014", href: profile.github, icon: Code2 }
  ];

  return (
    <Section id="contact" label="Contact" title="Open to entry-level Java full-stack opportunities.">
      <div className="reveal glass-panel overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-300 via-sky-300 to-amber-200 p-8 text-slate-950 sm:p-10">
            <Rocket className="absolute -right-5 -top-5 opacity-20" size={150} />
            <h3 className="relative text-3xl font-black">Let us connect</h3>
            <p className="relative mt-4 leading-7">
              Recruiters and hiring teams can contact me directly through email, phone, LinkedIn, or GitHub.
            </p>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5">
              Call Me
              <Phone size={18} />
            </a>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-card">
                <Icon className="text-teal-200" size={24} />
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-slate-400">{label}</p>
                <p className="mt-1 break-words font-semibold text-white">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-200">{label}</p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric-card reveal">
      <p className="text-4xl font-black text-teal-200">{value}</p>
      <p className="mt-2 font-medium text-slate-300">{label}</p>
    </div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
      <p className="text-sm font-black text-white sm:text-base">{value}</p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">{label}</p>
    </div>
  );
}

function FloatingDock({ setIsCommandOpen }) {
  const [showTop, setShowTop] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const update = () => setShowTop(window.scrollY > 520);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const sharePortfolio = async () => {
    const shareData = {
      title: `${profile.name} | ${profile.role}`,
      text: `Portfolio of ${profile.name}, ${profile.role}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = window.location.href;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      if (error?.name !== "AbortError") {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    }
  };

  return (
    <div className="floating-dock" aria-label="Quick actions">
      <button onClick={() => setIsCommandOpen(true)} aria-label="Open command palette">
        <Search size={18} />
      </button>
      <a href={profile.resume} download aria-label="Download resume">
        <ArrowDownToLine size={18} />
      </a>
      <button onClick={sharePortfolio} aria-label={copied ? "Portfolio link copied" : "Share portfolio"} className={copied ? "is-copied" : ""}>
        {copied ? <CheckCircle2 size={18} /> : <Share2 size={18} />}
      </button>
      <button onClick={goTop} aria-label="Back to top" className={showTop ? "is-visible" : ""}>
        <ChevronUp size={18} />
      </button>
      {copied && <span className="dock-toast">Link copied</span>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
      <p>(c) {new Date().getFullYear()} Akshay N R. Built with React, Vite, and Tailwind CSS.</p>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
