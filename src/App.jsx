
import './App.css';

const skills = [
  {
    category: '01 / BACKEND DEVELOPMENT',
    title: 'Backend',
    description: 'Building APIs and application logic',
    skills: ['Python', 'FastAPI', 'Django', 'REST API'],
    accent: 'purple',
  },
  {
    category: '02 / FRONTEND DEVELOPMENT',
    title: 'Frontend',
    description: 'Creating responsive user interfaces',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    accent: 'blue',
  },
  {
    category: '03 / DATABASE TECHNOLOGIES',
    title: 'Database',
    description: 'Working with relational databases',
    skills: ['SQL', 'PostgreSQL', 'Oracle SQL'],
    accent: 'pink',
  },
  {
    category: '04 / DEVELOPER WORKFLOW',
    title: 'Tools',
    description: 'Tools I use to build and manage projects',
    skills: ['Git', 'GitHub', 'VS Code'],
    accent: 'cyan',
  },
];

const projects = [
  {
    number: '01',
    name: 'Todo Application',
    type: 'FULL STACK WEB APPLICATION',
    description:
      'A task management application designed to organise daily tasks and practise frontend-to-backend API integration.',
    features: [
      'Task management interface',
      'REST API integration',
      'Database-backed architecture',
    ],
    stack: ['React', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    github: 'https://github.com/keerthanaguberan2005-sketch/todo-project',
    demo: '',
    visual: 'todo',
  },
  {
    number: '02',
    name: 'InterviewFlow',
    type: 'INTERVIEW PREPARATION PLATFORM',
    description:
      'A personal interview preparation platform to organise interview schedules, track preparation progress and manage notes.',
    features: [
      'Interview scheduling',
      'Preparation progress tracking',
      'Notes and dashboard',
    ],
    stack: ['React', 'CSS', 'Django', 'REST API'],
    github: '',
    demo: 'https://interviewpreparationwebsite.netlify.app/',
    visual: 'interview',
  },
];

function SectionLabel({ number, children }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span className="label-slash">/</span>
      {children}
    </p>
  );
}

function SkillCard({ item }) {
  return (
    <article className={`skill-card accent-${item.accent}`}>
      <div className="skill-card-top">
        <span className="skill-category">{item.category}</span>
        <span className="skill-card-mark" aria-hidden="true">
          ↗
        </span>
      </div>

      <h3>{item.title}</h3>
      <p className="skill-description">{item.description}</p>

      <div className="skill-tags">
        {item.skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProjectPreview({ type }) {
  if (type === 'todo') {
    return (
      <div className="preview-shell">
        <div className="preview-topbar">
          <div className="preview-dots">
            <i />
            <i />
            <i />
          </div>
          <span>todo-dashboard.jsx</span>
        </div>

        <div className="todo-preview-content">
          <p className="preview-eyebrow">YOUR WORKSPACE</p>
          <h4>My Tasks<span>.</span></h4>
          <p className="preview-subtitle">Stay focused. Get things done.</p>

          <div className="task-row">
            <span className="task-check">✓</span>
            <span>Plan daily priorities</span>
            <small>DONE</small>
          </div>
          <div className="task-row">
            <span className="task-check" />
            <span>Build REST API</span>
            <small>IN PROGRESS</small>
          </div>
          <div className="task-row">
            <span className="task-check" />
            <span>Review project code</span>
            <small>TODO</small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-shell">
      <div className="preview-topbar">
        <div className="preview-dots">
          <i />
          <i />
          <i />
        </div>
        <span>interviewflow.app</span>
      </div>

      <div className="interview-preview-content">
        <p className="preview-eyebrow">YOUR CAREER WORKSPACE</p>
        <h4>Preparation <span>Dashboard</span></h4>

        <div className="progress-panel">
          <div>
            <span>Preparation progress</span>
            <strong>68%</strong>
          </div>
          <div className="progress-track">
            <span />
          </div>
        </div>

        <div className="interview-mini-grid">
          <div>
            <span className="mini-icon">01</span>
            <strong>Interviews</strong>
            <small>Organise your schedule</small>
          </div>
          <div>
            <span className="mini-icon">02</span>
            <strong>Preparation</strong>
            <small>Track your learning</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-number">PROJECT / {project.number}</span>
        <span className="project-status">PERSONAL PROJECT</span>
      </div>

      <ProjectPreview type={project.visual} />

      <p className="project-type">{project.type}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-features">
        {project.features.map((feature) => (
          <span key={feature}>
            <span className="feature-check">✓</span>
            {feature}
          </span>
        ))}
      </div>

      <div className="project-tags">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub Repository <span>↗</span>
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live Website <span>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="Keerthana home">
          KG<span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-intro">HELLO, I'M</p>

            <h1>
              Keerthana
              <span>Guberan.</span>
            </h1>

            <h2>
              Python Full Stack
              <br />
              <span>Developer</span>
            </h2>

            <p className="hero-description">
              I build web applications using Python and modern web
              technologies. I'm a passionate fresher who enjoys learning,
              solving problems and turning ideas into practical projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Projects <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>
            </div>

            <div className="hero-footnote">
              <span>2025 PHYSICS GRADUATE</span>
              <span className="footnote-divider" />
              <span>PYTHON FULL STACK</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Python developer code illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="file-name">developer.py</span>
              </div>

              <div className="code-content">
                <p><span className="line-number">01</span><span className="code-purple">class</span> Developer:</p>
                <p><span className="line-number">02</span>  name = <span className="code-green">"Keerthana"</span></p>
                <p><span className="line-number">03</span>  role = <span className="code-green">"Python Developer"</span></p>
                <p><span className="line-number">04</span>  skills = [</p>
                <p><span className="line-number">05</span>    <span className="code-orange">"Python"</span>, <span className="code-orange">"FastAPI"</span>,</p>
                <p><span className="line-number">06</span>    <span className="code-orange">"React"</span>, <span className="code-orange">"SQL"</span></p>
                <p><span className="line-number">07</span>  ]</p>
                <p><span className="line-number">08</span></p>
                <p><span className="line-number">09</span>  <span className="code-purple">def</span> build(self):</p>
                <p><span className="line-number">10</span>    <span className="code-purple">return</span> <span className="code-green">"Ideas into reality!"</span></p>
                <p><span className="line-number">11</span></p>
                <p className="code-cursor"><span className="line-number">12</span>  ▍</p>
              </div>
            </div>

            <div className="floating-skill skill-python">
              <span className="skill-symbol python-symbol">Py</span>
              Python
            </div>
            <div className="floating-skill skill-react">
              <span className="skill-symbol react-symbol">✳</span>
              React.js
            </div>
            <div className="floating-skill skill-api">
              <span className="skill-symbol api-symbol">{'</>'}</span>
              FastAPI
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <SectionLabel number="01">ABOUT ME</SectionLabel>
            <h2>
              Learning today.
              <br />
              <span>Building tomorrow.</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I'm Keerthana Guberan, a 2025 B.Sc. Physics graduate and
              Python Full Stack Development course completer. I'm looking
              for an opportunity to begin my software development career. 
              {/* I'm Keerthana Guberan, a 2025 B.Sc. Physics graduate and Python Full Stack Development course completer, aspiring to build a career in software development. */}
            </p>

            <p>
              I enjoy building practical web applications, working with
               APIs and databases, and continuously improving my coding
              skills. I'm eager to learn from experienced developers and
              contribute to real-world projects.
             

             {/* I have a foundation in Python, FastAPI, React.js, SQL, and PostgreSQL, and I enjoy building practical web applications that solve real-world problems. Through hands-on projects like Todo Application and InterviewFlow, I've been developing my skills in frontend development, backend APIs, and database integration. */}
            </p>

            {/* <p>
              I'm passionate about continuous learning, improving my problem-solving abilities, and exploring new technologies. I'm looking for an opportunity as a Python Developer or Junior Full Stack Developer where I can contribute to real-world projects, learn from experienced developers, and grow as a software professional.
            </p> */}

            <div className="about-highlights">
              <div className="highlight-card">
                <span className="highlight-icon">ED / 01</span>
                <strong>B.Sc. Physics</strong>
                <p>Alagappa University · 2025</p>
              </div>
              <div className="highlight-card">
                <span className="highlight-icon">DEV / 02</span>
                <strong>Python Full Stack</strong>
                <p>Course completed · Personal projects</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <SectionLabel number="02">TECHNICAL SKILLS</SectionLabel>
            <h2>
              Tools I work
              <br />
              <span>with.</span>
            </h2>
            <p className="section-description">
              Technologies I've studied and practised through coursework
              and personal projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((item) => (
              <SkillCard item={item} key={item.title} />
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <SectionLabel number="03">SELECTED WORK</SectionLabel>
            <h2>
              Projects I've
              <br />
              <span>built.</span>
            </h2>
            <p className="section-description">
              Practical projects that showcase my learning and
              development journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.number} />
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <SectionLabel number="04">GET IN TOUCH</SectionLabel>
          <h2>
            Let's build something
            <br />
            <span>great together.</span>
          </h2>
          <p>
            I'm looking for an opportunity to start my career as a Python
            Developer. Have an opening or want to connect? I'd love to
            hear from you.
          </p>

          {/* <a
            className="button button-primary contact-button"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Email Me <span>↗</span>
          </a> */}

          
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthanaguberan2005@gmail.com&su=Portfolio%20Contact%20-%20Python%20Developer"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-primary contact-button"
>
  Email Me ↗ <span></span>
</a>


          <div className="social-links">
            <a
              href="https://github.com/keerthanaguberan2005-sketch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/keerthana-g-1480793b0/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="footer-logo" href="#home">
          KG<span></span>
        </a>
        <p>Designed & built by Keerthana Guberan · 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
