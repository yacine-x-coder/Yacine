import { useEffect, useRef, useState } from "react";
import "./index.css";

type Secret = {
  id: number;
  title: string;
  text: string;
};

const skills = [
  { name: "HTML5", level: 95, type: "Markup" },
  { name: "CSS3", level: 94, type: "Styling" },
  { name: "JavaScript", level: 90, type: "Language" },
  { name: "TypeScript", level: 84, type: "Language" },
  { name: "React", level: 86, type: "Framework" },
  { name: "Tailwind CSS", level: 82, type: "Styling" },
  { name: "Next.js", level: 75, type: "Framework" },
  { name: "Git / GitHub", level: 80, type: "Tools" },
];

const projects = [
  { name: "HORIS", number: "01", category: "Architecture / Portfolio", description: "A premium architectural portfolio with a refined editorial interface.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/Architect/" },
  { name: "LANGUACAMPUS", number: "02", category: "Education / Web App", description: "A language-learning management experience built around interactive data.", tech: ["HTML", "CSS", "JavaScript", "LocalStorage"], link: "https://yacine-x-coder.github.io/LangyaCampus/" },
  { name: "CYBERNEXUS", number: "03", category: "Cyber / AI", description: "A futuristic developer experience focused on programming and cybersecurity.", tech: ["React", "Node.js", "Express", "AI"], link: "https://yacine-x-coder.github.io/CyberNexus/" },
  { name: "TRUST", number: "04", category: "Digital Experience", description: "A clean digital interface designed around trust, clarity and modern interaction.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/trust/" },
  { name: "DELICIOUS", number: "05", category: "Food / Web", description: "A polished food-focused web experience with visual presentation and motion.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/Delicious/" },
  { name: "DMA", number: "06", category: "Web Project", description: "A modern interface experiment built to explore layout, interaction and presentation.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/DMA/" },
  { name: "ARTIVA SKETCH", number: "07", category: "Creative Tool", description: "A browser-based creative environment designed for drawing and experimentation.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/Artiva_Sketch/" },
  { name: "NOUR NEIGE", number: "08", category: "Web Experience", description: "A visual web project focused on atmosphere, presentation and interaction.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/nour_neige/" },
  { name: "COFFEE SHOP", number: "09", category: "Business / Web", description: "A stylish coffee-shop interface combining product presentation and responsive design.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/Coffee_shop/" },
  { name: "OUSIS", number: "10", category: "Brand / Web", description: "A modern brand experience with visual cards, atmosphere and interactive details.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/Ousis/" },
  { name: "MY SECOND PORTFOLIO", number: "11", category: "Portfolio", description: "An earlier portfolio experiment and another step in the evolution of Y.DEV.", tech: ["HTML", "CSS", "JavaScript"], link: "https://yacine-x-coder.github.io/portfolio/" },
];

const corePages = [
  ["01", "SYSTEM", "Core system information and portfolio status.", "system.boot();"],
  ["02", "IDENTITY", "The identity layer behind Y.DEV.", "identity.load();"],
  ["03", "ARCHITECTURE", "How the interface is structured.", "architecture.render();"],
  ["04", "FRONTEND", "The client-side technologies behind the experience.", "frontend.build();"],
  ["05", "BACKEND", "The server-side direction and future integrations.", "backend.connect();"],
  ["06", "COMPONENTS", "Reusable UI thinking and component-based development.", "components.reuse();"],
  ["07", "TYPES", "Type-safe development with TypeScript.", "types.safe();"],
  ["08", "MOTION", "Animations, transitions and interactive motion.", "motion.animate();"],
  ["09", "SECURITY", "A developer mindset focused on safer interfaces.", "security.inspect();"],
  ["10", "TERMINAL", "Command-line inspired interaction and exploration.", "terminal.execute();"],
  ["11", "PROJECTS", "A deeper index of the work shown in the portfolio.", "projects.open();"],
  ["12", "EXPERIMENTS", "Small experiments that turn ideas into interfaces.", "experiments.run();"],
  ["13", "DESIGN", "Visual systems, spacing, depth and interface details.", "design.compose();"],
  ["14", "LEARNING", "Continuous learning is part of the development process.", "learning.continue();"],
  ["15", "GOALS", "The next milestones for building and learning.", "goals.define();"],
  ["16", "WORKFLOW", "A simple loop: plan, build, test and improve.", "workflow.repeat();"],
  ["17", "TOOLS", "The tools that support coding and creation.", "tools.ready();"],
  ["18", "VISION", "A look toward larger digital experiences.", "vision.expand();"],
  ["19", "CLASSIFIED", "A page intentionally surrounded by hidden signals.", "classified.access();"],
  ["20", "FINAL NODE", "The final page of the core portfolio directory.", "finalNode.unlock();"],
];

const journey = [
  ["01", "HTML", "The beginning"],
  ["02", "CSS", "Design & layouts"],
  ["03", "JavaScript", "Logic & interaction"],
  ["04", "React", "Component thinking"],
  ["05", "TypeScript", "Safer development"],
];

const services = [
  ["01", "WEB INTERFACES", "Modern responsive interfaces."],
  ["02", "WEB APPLICATIONS", "Interactive browser applications."],
  ["03", "UI / UX", "Clean and intuitive experiences."],
  ["04", "INTERACTIONS", "Animations and micro-interactions."],
];

const terminalMessages = [
  "SYSTEM STATUS: ONLINE",
  "DEVELOPER MODE: READY",
  "BUILD PIPELINE: STABLE",
  "NETWORK: SECURE",
  "CREATIVE ENGINE: ACTIVE",
  "TYPE SAFELY. BUILD BOLDLY.",
];

const secrets: Secret[] = [
  {
    id: 1,
    title: "PROTOCOL 01",
    text: "You found a layer that was never meant to be obvious.",
  },
  {
    id: 2,
    title: "PROTOCOL 02",
    text: "Curiosity is a developer skill.",
  },
  {
    id: 3,
    title: "PROTOCOL 03",
    text: "The interface has more depth than the interface shows.",
  },
  {
    id: 4,
    title: "PROTOCOL 04",
    text: "Not every clickable thing looks clickable.",
  },
  {
    id: 5,
    title: "PROTOCOL 05",
    text: "Good developers inspect what others ignore.",
  },
  {
    id: 6,
    title: "PROTOCOL 06",
    text: "There are patterns hidden inside ordinary interactions.",
  },
  {
    id: 7,
    title: "PROTOCOL 07",
    text: "You are getting closer.",
  },
  {
    id: 8,
    title: "PROTOCOL 08",
    text: "The portfolio is watching your curiosity.",
  },
  {
    id: 9,
    title: "PROTOCOL 09",
    text: "One discovery can lead to another.",
  },
  {
    id: 10,
    title: "PROTOCOL 10",
    text: "Some secrets require patience.",
  },
  {
    id: 11,
    title: "PROTOCOL 11",
    text: "The obvious path is not always the complete path.",
  },
  {
    id: 12,
    title: "PROTOCOL 12",
    text: "You found a deeper layer.",
  },
  {
    id: 13,
    title: "PROTOCOL 13",
    text: "Small details can contain large surprises.",
  },
  {
    id: 14,
    title: "PROTOCOL 14",
    text: "Developer instinct detected.",
  },
  {
    id: 15,
    title: "PROTOCOL 15",
    text: "There is still more beneath the surface.",
  },
  {
    id: 16,
    title: "PROTOCOL 16",
    text: "This one was deliberately difficult.",
  },
  {
    id: 17,
    title: "PROTOCOL 17",
    text: "Persistence unlocked another layer.",
  },
  {
    id: 18,
    title: "PROTOCOL 18",
    text: "You are entering classified territory.",
  },
  {
    id: 19,
    title: "PROTOCOL 19",
    text: "Almost nobody checks everything.",
  },
  {
    id: 20,
    title: "PROTOCOL 20",
    text: "FINAL DISCOVERY — You found all twenty hidden protocols.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [terminalLine, setTerminalLine] = useState(terminalMessages[0]);
  const [hackerMode, setHackerMode] = useState(false);
  const [secretOpen, setSecretOpen] = useState<Secret | null>(null);
  const [discovered, setDiscovered] = useState<number[]>([]);
  const [toast, setToast] = useState("");
  const [, setLogoClicks] = useState(0);
  const [, setProjectClicks] = useState<Record<number, number>>({});
  const [, setFooterClicks] = useState(0);
  const [, setCodeClicks] = useState(0);
  const [, setAboutVisits] = useState(0);
  const [, setTerminalFocus] = useState(0);
  const [, setTypedSequence] = useState("");
  const [, setShowClassified] = useState(false);
  const [globeRotation, setGlobeRotation] = useState({ x: -12, y: -22 });
  const [globeDragging, setGlobeDragging] = useState(false);
  const globeDragStart = useRef({ x: 0, y: 0, rx: -12, ry: -22 });
  const terminalRef = useRef<HTMLDivElement>(null);

  /*
   * ---------------------------------------------------------
   * SECRET SYSTEM
   * ---------------------------------------------------------
   */

  const score = discovered.length * 100;

  const unlockSecret = (id: number) => {
    setDiscovered((previous) => {
      if (previous.includes(id)) return previous;

      const next = [...previous, id].sort((a, b) => a - b);

      localStorage.setItem("yacine-secret-protocols", JSON.stringify(next));

      return next;
    });

    const secret = secrets.find((item) => item.id === id);

    if (secret) {
      setSecretOpen(secret);
      setToast(`CLASSIFIED PROTOCOL ${String(id).padStart(2, "0")} DISCOVERED`);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("yacine-secret-protocols");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setDiscovered(
            parsed.filter(
              (value): value is number =>
                typeof value === "number" && value >= 1 && value <= 20,
            ),
          );
        }
      } catch {
        localStorage.removeItem("yacine-secret-protocols");
      }
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTerminalLine((current) => {
        const index = terminalMessages.indexOf(current);
        return terminalMessages[(index + 1) % terminalMessages.length];
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  /*
   * Secret: keyboard investigation
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      setTypedSequence((previous) => {
        const next = `${previous}${key}`.slice(-18);

        if (next.includes("yacine")) {
          unlockSecret(3);
        }

        if (next.includes("portfolio")) {
          unlockSecret(7);
        }

        if (next.includes("developer")) {
          unlockSecret(11);
        }

        return next;
      });

      /*
       * Secret keyboard sequence.
       */
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "y") {
        unlockSecret(14);
      }

      /*
       * Secret: Escape does not close the menu if something classified
       * is active — instead it can reveal another layer.
       */
      if (event.key === "Escape" && secretOpen) {
        setSecretOpen(null);
      }

      /*
       * Secret: Alt + Shift + D
       */
      if (
        event.altKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "d"
      ) {
        unlockSecret(18);
        setShowClassified(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [secretOpen]);

  /*
   * Secret: logo interaction.
   */
  const handleLogoClick = () => {
    setLogoClicks((previous) => {
      const next = previous + 1;

      if (next === 4) unlockSecret(1);
      if (next === 8) unlockSecret(12);
      if (next >= 12) {
        unlockSecret(19);
      }

      return next;
    });
  };

  /*
   * Secret: project number interactions.
   */
  const handleProjectClick = (index: number) => {
    setProjectClicks((previous) => {
      const nextCount = (previous[index] || 0) + 1;

      const updated = {
        ...previous,
        [index]: nextCount,
      };

      if (index === 0 && nextCount === 3) unlockSecret(5);
      if (index === 1 && nextCount === 4) unlockSecret(8);
      if (index === 2 && nextCount === 5) unlockSecret(13);
      if (index === 3 && nextCount === 6) unlockSecret(16);

      return updated;
    });
  };

  /*
   * Secret: terminal focus.
   */
  const handleTerminalFocus = () => {
    setTerminalFocus((previous) => {
      const next = previous + 1;

      if (next === 3) unlockSecret(4);
      if (next === 7) unlockSecret(9);

      return next;
    });
  };

  /*
   * Secret: code lab.
   */
  const handleCodeClick = () => {
    setCodeClicks((previous) => {
      const next = previous + 1;

      if (next === 5) unlockSecret(6);
      if (next === 11) unlockSecret(15);

      return next;
    });
  };

  /*
   * Secret: about visits.
   */
  const handleAboutVisit = () => {
    setAboutVisits((previous) => {
      const next = previous + 1;

      if (next === 3) unlockSecret(2);

      return next;
    });
  };

  /*
   * Secret: footer.
   */
  const handleFooterClick = () => {
    setFooterClicks((previous) => {
      const next = previous + 1;

      if (next === 7) unlockSecret(17);

      return next;
    });
  };

  /*
   * Terminal commands.
   */
  const handleTerminalSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const command = terminalInput.trim().toLowerCase();

    if (!command) return;

    setTerminalHistory((previous) => [
      ...previous.slice(-7),
      `$ ${terminalInput}`,
    ]);

    if (command === "help") {
      setTerminalHistory((previous) => [
        ...previous,
        "Available: help / whoami / skills / projects / status / clear",
      ]);
    } else if (command === "whoami") {
      setTerminalHistory((previous) => [
        ...previous,
        "YACINE — DEVELOPER / BUILDER / LEARNER",
      ]);
    } else if (command === "skills") {
      setTerminalHistory((previous) => [
        ...previous,
        "HTML CSS JS TS REACT TAILWIND NEXT.JS GIT",
      ]);
    } else if (command === "projects") {
      setTerminalHistory((previous) => [
        ...previous,
        "4 PROJECT NODES FOUND.",
      ]);
    } else if (command === "status") {
      setTerminalHistory((previous) => [
        ...previous,
        "ALL SYSTEMS OPERATIONAL.",
      ]);
    } else if (command === "clear") {
      setTerminalHistory([]);
    } else if (command === "sudo") {
      unlockSecret(4);

      setTerminalHistory((previous) => [
        ...previous,
        "Permission granted... just kidding.",
      ]);
    } else if (command === "matrix") {
      unlockSecret(9);
      setHackerMode(true);

      setTerminalHistory((previous) => [
        ...previous,
        "VISUAL PROTOCOL ACTIVATED.",
      ]);
    } else if (command === "debug") {
      unlockSecret(20);

      setTerminalHistory((previous) => [
        ...previous,
        "DEEP DEBUG CHANNEL OPENED.",
      ]);
    } else {
      setTerminalHistory((previous) => [
        ...previous,
        `Command not found: ${command}`,
      ]);
    }

    setTerminalInput("");
  };

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => {
      setToast("");
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [toast]);

  /*
   * Console message.
   */
  useEffect(() => {
    console.log(
      "%cY.DEV // SYSTEM ONLINE",
      "color:#00ff88;font-size:18px;font-weight:bold;",
    );

    console.log(
      "%cThere is more here than meets the eye.",
      "color:#00ff88;font-size:13px;",
    );

    console.log(
      "%cCLASSIFIED PROTOCOLS: ████████████████████",
      "color:#5affb0;font-size:12px;",
    );
  }, []);

  return (
    <div className={`app ${hackerMode ? "hacker-mode" : ""}`}>
      {/* CYBER BACKGROUND */}
      <div className="cyber-background">
        <div className="grid-plane" />
        <div className="scanlines" />
        <div className="noise" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        <div className="floating-code code-one">
          {"{ dev: true }"}
        </div>

        <div className="floating-code code-two">
          {"<React />"}
        </div>

        <div className="floating-code code-three">
          {"npm run build"}
        </div>

        <div className="floating-code code-four">
          {"01010101"}
        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="secret-toast">
          <span>◉</span>
          {toast}
        </div>
      )}

      {/* SECRET MODAL */}
      {secretOpen && (
        <div
          className="secret-overlay"
          onClick={() => setSecretOpen(null)}
        >
          <div
            className="secret-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="secret-header">
              <span>◈ CLASSIFIED</span>

              <button onClick={() => setSecretOpen(null)}>×</button>
            </div>

            <div className="secret-icon">⌬</div>

            <div className="secret-number">
              {String(secretOpen.id).padStart(2, "0")}
            </div>

            <h2>{secretOpen.title}</h2>

            <p>{secretOpen.text}</p>

            <div className="secret-score">
              <div>
                <span>SCORE</span>
                <strong>{score.toString().padStart(4, "0")} XP</strong>
              </div>
              <div>
                <span>HIDDEN ITEMS</span>
                <strong>{discovered.length}/20</strong>
                <div className="score-progress">
                  <span style={{ width: `${(discovered.length / 20) * 100}%` }} />
                </div>
              </div>
            </div>

            <div className="secret-footer">
              <span>PROTOCOL DISCOVERED</span>
              <span>
                {discovered.length.toString().padStart(2, "0")}/20
              </span>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <button
            className="logo"
            onClick={handleLogoClick}
            aria-label="Y DEV"
          >
            <span>Y</span>
            <b>.DEV</b>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>01 HOME</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>02 ABOUT</a>
            <a href="#stack" onClick={() => setMenuOpen(false)}>03 STACK</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>04 PROJECTS</a>
            {corePages.map(([number, title]) => (
              <a href={`#page-${number}`} key={number} onClick={() => setMenuOpen(false)}>
                {number} {title}
              </a>
            ))}
          </nav>

          <div className="secret-header-hint" title="There are hidden things here">
            <i />
            SOME THINGS ARE HIDDEN
          </div>

          <div className="nav-status">
            <span className="status-dot" />
            ONLINE
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content reveal">
            <div className="system-badge">
              <span className="pulse-dot" />
              SYSTEM ONLINE
            </div>

            <p className="hero-small">
              HELLO WORLD // I'M
            </p>

            <h1>
              YACINE<span>_</span>
            </h1>

            <div className="typing-wrapper">
              <span className="typing-prefix">&gt;</span>
              <span className="typing-text">{terminalLine}</span>
              <span className="cursor">▋</span>
            </div>

            <p className="hero-description">
              Young developer building modern digital experiences with
              code, creativity and curiosity.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                VIEW PROJECTS
                <span>↗</span>
              </a>

              <a href="#contact" className="btn btn-secondary">
                CONTACT ME
              </a>
            </div>

            <div className="tech-tags">
              <span>REACT</span>
              <span>TYPESCRIPT</span>
              <span>JAVASCRIPT</span>
              <span>CSS</span>
              <span>TAILWIND</span>
            </div>
          </div>

          {/* TERMINAL */}
          <div
            className="terminal-card reveal delay-one"
            ref={terminalRef}
            onFocus={handleTerminalFocus}
            tabIndex={0}
          >
            <div className="terminal-top">
              <div className="terminal-lights">
                <span />
                <span />
                <span />
              </div>

              <div className="terminal-title">
                yacine@developer:~
              </div>

              <div className="terminal-live">
                LIVE
              </div>
            </div>

            <div className="terminal-body">
              <div className="terminal-history">
                <div className="terminal-line">
                  <span className="green">root@yacine</span>
                  <span>:</span>
                  <span className="blue">~</span>
                  <span>$</span>
                  <span>./portfolio</span>
                </div>

                <div className="terminal-output">
                  Initializing developer portfolio...
                </div>

                <div className="terminal-output">
                  Loading interface...
                </div>

                <div className="terminal-output success">
                  ✓ SYSTEM READY
                </div>

                {terminalHistory.map((line, index) => (
                  <div className="terminal-output" key={`${line}-${index}`}>
                    {line}
                  </div>
                ))}
              </div>

              <form
                className="terminal-input-line"
                onSubmit={handleTerminalSubmit}
              >
                <span className="green">guest@Y.DEV</span>
                <span>:</span>
                <span className="blue">~</span>
                <span>$</span>

                <input
                  value={terminalInput}
                  onChange={(event) =>
                    setTerminalInput(event.target.value)
                  }
                  placeholder="type a command..."
                  autoComplete="off"
                  spellCheck={false}
                />

                <span className="cursor">▋</span>
              </form>

              <div className="terminal-hint">
                <span>STATUS:</span> {terminalLine}
              </div>
            </div>
          </div>

          {/* hidden information, deliberately subtle */}
          <div className="hero-bottom-secret">
            <span>001</span>
            <span>010</span>
            <span>100</span>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <strong>08+</strong>
              <span>TECHNOLOGIES</span>
            </div>

            <div className="stat-card">
              <strong>04+</strong>
              <span>PROJECTS</span>
            </div>

            <div className="stat-card">
              <strong>∞</strong>
              <span>IDEAS</span>
            </div>

            <div className="stat-card classified-stat">
              <strong>{discovered.length}</strong>
              <span>DISCOVERED</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          className="section about-section"
          id="about"
          onMouseEnter={handleAboutVisit}
        >
          <div className="section-heading">
            <span>01 //</span>
            <h2>ABOUT<span>.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="big-text">
                I don't just write code.
                <br />
                <span>I build experiences.</span>
              </p>

              <p>
                I'm Yacine, a developer interested in modern web
                technologies, interactive interfaces and creative digital
                experiences.
              </p>

              <p>
                My journey started with the fundamentals of the web and
                gradually moved toward JavaScript, React and TypeScript.
              </p>

              <p>
                Every project is another opportunity to learn something
                new, experiment with ideas and improve the way I build.
              </p>
            </div>

            <div className="code-window">
              <div className="code-window-top">
                <span>developer.ts</span>
                <span>● ● ●</span>
              </div>

              <pre>
{`const developer = {
  name: "Yacine",
  mindset: "BUILD",
  curiosity: true,
  learning: "continuous",

  create() {
    return "something useful";
  }
};`}
              </pre>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="section journey-section">
          <div className="section-heading">
            <span>02 //</span>
            <h2>JOURNEY<span>.</span></h2>
          </div>

          <div className="journey-line">
            {journey.map(([number, title, text]) => (
              <div className="journey-item" key={number}>
                <div className="journey-number">{number}</div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section className="section stack-section" id="stack">
          <div className="section-heading">
            <span>03 //</span>
            <h2>TECH STACK<span>.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill.name}
                onMouseEnter={() => {
                  if (index === 6) unlockSecret(6);
                }}
              >
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-type">{skill.type}</div>

                <div className="skill-bar">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services-section">
          <div className="section-heading">
            <span>04 //</span>
            <h2>WHAT I BUILD<span>.</span></h2>
          </div>

          <div className="services-grid">
            {services.map(([number, title, description]) => (
              <div className="service-card" key={number}>
                <span className="service-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span>05 //</span>
            <h2>SELECTED PROJECTS<span>.</span></h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <button
                    className="project-number"
                    onClick={() => handleProjectClick(index)}
                    aria-label={`Project ${project.number}`}
                  >
                    {project.number}
                  </button>

                  <span>{project.category}</span>
                </div>

                <div className="project-visual">
                  <div className="project-grid" />
                  <div className="project-symbol">
                    {"</>"}
                  </div>
                </div>

                <div className="project-info">
                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-bottom">
                  <span>LIVE PROJECT</span>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>↗ OPEN</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 20 CORE PAGES */}
        <section className="section core-pages-section" id="pages">
          <div className="section-heading">
            <span>05.5 //</span>
            <h2>CORE DIRECTORY<span>.</span></h2>
          </div>

          <div className="core-pages-grid">
            {corePages.map(([number, title]) => (
              <a className="core-page-index" href={`#page-${number}`} key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <em>↗</em>
              </a>
            ))}
          </div>
        </section>

        {corePages.map(([number, title, description, code]) => (
          <section className="section core-page-section" id={`page-${number}`} key={`page-${number}`}>
            <div className="core-page-panel">
              <div className="core-page-top">
                <span>PAGE {number}</span>
                <span>CORE NODE // ONLINE</span>
              </div>
              <div className="core-page-body">
                <div>
                  <span className="core-page-label">PRIMARY PAGE</span>
                  <h2>{title}<span>.</span></h2>
                  <p>{description}</p>
                </div>
                <div className="core-page-terminal">
                  <span>&gt;</span> {code}
                  <br />
                  <span>&gt;</span> node_{number}.status = "ready";
                  <br />
                  <span>&gt;</span> explore();
                </div>
              </div>
              <button className="page-secret-node" onClick={() => unlockSecret(Number(number))} aria-label={`Hidden protocol ${number}`} title="Hidden protocol">◌</button>
            </div>
          </section>
        ))}

        {/* 3D GLOBE */}
        <section className="section globe-section" id="page-18-globe">
          <div className="section-heading">
            <span>18.5 //</span>
            <h2>3D ROADMAP<span>.</span></h2>
          </div>
          <div className="globe-layout">
            <div
              className={`globe-stage ${globeDragging ? "dragging" : ""}`}
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                globeDragStart.current = { x: event.clientX, y: event.clientY, rx: globeRotation.x, ry: globeRotation.y };
                setGlobeDragging(true);
              }}
              onPointerMove={(event) => {
                if (!globeDragging) return;
                setGlobeRotation({
                  x: globeDragStart.current.rx - (event.clientY - globeDragStart.current.y) * 0.25,
                  y: globeDragStart.current.ry + (event.clientX - globeDragStart.current.x) * 0.35,
                });
              }}
              onPointerUp={() => setGlobeDragging(false)}
              onPointerCancel={() => setGlobeDragging(false)}
            >
              <div className="globe" style={{ transform: `rotateX(${globeRotation.x}deg) rotateY(${globeRotation.y}deg)` }}>
                <div className="globe-sphere" />
                <div className="globe-line globe-lat lat-one" />
                <div className="globe-line globe-lat lat-two" />
                <div className="globe-line globe-lat lat-three" />
                <div className="globe-line globe-long long-one" />
                <div className="globe-line globe-long long-two" />
                <div className="globe-line globe-long long-three" />
                <div className="globe-node node-a">01</div>
                <div className="globe-node node-b">05</div>
                <div className="globe-node node-c">10</div>
                <div className="globe-node node-d">20</div>
              </div>
            </div>
            <div className="globe-info">
              <span>INTERACTIVE NODE MAP</span>
              <h3>ROTATE THE<br /><b>WORLD.</b></h3>
              <p>Drag the globe to inspect the roadmap. The same developer mindset connects every node: learn, build, test and evolve.</p>
              <div className="globe-readout">
                <span>X ROTATION</span><strong>{Math.round(globeRotation.x)}°</strong>
                <span>Y ROTATION</span><strong>{Math.round(globeRotation.y)}°</strong>
              </div>
            </div>
          </div>
        </section>

        {/* CODE LAB */}
        <section className="section code-lab-section">
          <div className="section-heading">
            <span>06 //</span>
            <h2>CODE LAB<span>.</span></h2>
          </div>

          <div
            className="lab-terminal"
            onClick={handleCodeClick}
          >
            <div className="lab-header">
              <span>experiments.ts</span>
              <span>LOCAL</span>
            </div>

            <div className="lab-content">
              <span className="line-number">01</span>
              <span className="code-purple">const</span>
              <span className="code-blue">idea</span>
              <span>=</span>
              <span className="code-green">
                "build something interesting"
              </span>
              <span>;</span>
            </div>

            <div className="lab-content">
              <span className="line-number">02</span>
              <span className="code-purple">while</span>
              <span>(</span>
              <span className="code-yellow">learning</span>
              <span>) {"{"}</span>
            </div>

            <div className="lab-content">
              <span className="line-number">03</span>
              <span className="indent">build();</span>
            </div>

            <div className="lab-content">
              <span className="line-number">04</span>
              <span>{"}"}</span>
            </div>
          </div>
        </section>

        {/* FUTURE */}
        <section className="section future-section">
          <div className="future-box">
            <div>
              <span className="future-label">NEXT TARGET</span>
              <h2>BUILD. LEARN. REPEAT.</h2>
              <p>
                The current stack is only the beginning. The goal is to
                keep learning, building larger projects and exploring
                new technologies.
              </p>
            </div>

            <div className="future-code">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>∞</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section">
          <div className="section-heading">
            <span>07 //</span>
            <h2>FAQ<span>.</span></h2>
          </div>

          <div className="faq-grid">
            <details>
              <summary>Who is Yacine?</summary>
              <p>
                A young developer learning, experimenting and building
                web projects.
              </p>
            </details>

            <details>
              <summary>What technologies do you use?</summary>
              <p>
                HTML, CSS, JavaScript, TypeScript, React, Tailwind,
                Next.js and developer tools.
              </p>
            </details>

            <details>
              <summary>Why the cyber design?</summary>
              <p>
                Because programming, terminals and futuristic interfaces
                are part of the visual identity of this portfolio.
              </p>
            </details>

            <details>
              <summary>Is everything here finished?</summary>
              <p>
                No. A developer is always learning and improving.
              </p>
            </details>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="contact-box">
            <span>READY TO CONNECT?</span>

            <h2>
              LET'S BUILD
              <br />
              SOMETHING<span>.</span>
            </h2>

            <p>
              Have an idea, project or simply want to talk about
              development?
            </p>

            <div className="contact-actions">
              <a
                href="mailto:your-email@example.com"
                className="btn btn-primary"
              >
                SEND MESSAGE ↗
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                GITHUB ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="footer"
        onClick={handleFooterClick}
      >
        <div className="footer-left">
          <strong>Y.DEV</strong>
          <span>BUILDING THE FUTURE, ONE LINE AT A TIME.</span>
        </div>

        <div className="footer-center">
          <span>© 2026 YACINE</span>
        </div>

        <div className="footer-right">
          <span>STATUS:</span>
          <span className="green-text">ONLINE</span>
        </div>

        {/* This text is intentionally subtle. */}
        <div className="footer-classified">
          [ protocol integrity: 20 ]
        </div>
      </footer>
    </div>
  );
}

export default App;
