import React, { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("reveal-show")
        );
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToId = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (id) => {
    scrollToId(id);
    setMenuOpen(false); // close menu on mobile after click
  };

  return (
    <div className="site">
      {/* NAVBAR */}
      <nav className="nav glass">
        <div className="brand">
          Shiv<span>.</span>
        </div>

        {/* Mobile menu button (content same, sirf UI) */}
        <button
          className="btn round menu-btn"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>

        <ul className={`links ${menuOpen ? "show" : ""}`}>
          <li>
            <button onClick={() => handleNavClick("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("exp")}>Experience</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("contact")}>Contact</button>
          </li>
        </ul>

        <a className="btn ghost" href="#" download>
          Download Resume
        </a>
      </nav>

      {/* HERO */}
      <header id="home" className="hero-card glass reveal">
        <div className="hero-left">
          <p className="hey">
            Hey, I am <span className="name-accent">Shiv</span>
          </p>
          <h1 className="title typewriter">Web Developer</h1>
          <p className="sub">
            I am Shiv , a passionate MERN Stack Developer with a strong interest
            in building scalable and user-friendly web applications.
          </p>
          <div className="cta">
            <button
              className="btn primary"
              onClick={() => scrollToId("contact")}
            >
              Hire me
            </button>
            <a
              href="mailto:shivkumardev@example.com"
              className="btn round"
              aria-label="email"
            >
              ✉️
            </a>
          </div>

          {/* Testimonial */}
          <div className="testimonial">
            <div className="quote">
              Passionate MERN stack developer focused on building scalable and
              user-friendly applications.
            </div>
            <div className="who">
              <img src="/avatar.png" alt="client" />
              <div>
                <div className="name">Shiv Kumar</div>
                <div className="role">Frontend Engineer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <img className="dev" src="/hero.png" alt="Developer" />
            {/* Floating skill badges */}
            <div className="badge b1">HTML</div>
            <div className="badge b2">CSS</div>
            <div className="badge b3">JS</div>
            <div className="badge b4">React</div>
            <div className="badge b5">Node</div>
            <div className="badge b6">Mongo</div>
          </div>
        </div>
      </header>

      {/* SKILLS (id add kiya) */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
           
            <div className="skill-card">
              <img
                src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
                alt="HTML"
                className="skill-icon"
              />
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <img
                src="https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png"
                alt="CSS"
                className="skill-icon"
              />
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                alt="JavaScript"
                className="skill-icon"
              />
              <p>JavaScript (ES6+)</p>
            </div>
            <div className="skill-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                alt="React"
                className="skill-icon"
              />
              <p>React.js</p>
            </div>
            <div className="skill-card">
              <img
                src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/10/node-icon.png"
                alt="Node.js"
                className="skill-icon"
              />
              <p>Node.js</p>
            </div>
            <div className="skill-card">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175137.png?f=webp"
                alt="MongoDB"
                className="skill-icon"
              />
              <p>MongoDB</p>
            </div>
            <div className="skill-card">
              <img
                src="https://img.icons8.com/office40/512/express-js.png"
                alt="Express.js"
                className="skill-icon"
              />
              <p>Express.js</p>
            </div>
            <div className="skill-card">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                alt="Git"
                className="skill-icon"
              />
              <p>Git</p>
            </div>
            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="skill-icon"
              />
              <p>GitHub</p>
            </div>
            <div className="skill-card">
              <img
                src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
                alt="Vercel"
                className="skill-icon"
              />
              <p>Vercel</p>
            </div>
            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
                alt="Docker"
                className="skill-icon"
              />
              <p>Docker</p>
            </div>
            <div className="skill-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                alt="Bootstrap"
                className="skill-icon"
              />
              <p>Bootstrap</p>
            </div>
            <div className="skill-card">
              <img
                src="https://db.cs.uni-tuebingen.de/teaching/ws2223/sql-is-a-programming-language/logo.svg"
                alt="sql"
                className="skill-icon"
              />
              <p>SQL</p>
            </div>

                <div className="skill-card">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQEAO8b3YbB2bw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1670420866062?e=2147483647&v=beta&t=g8_5fQXK2PxUapClJTjmx9uV2t6noDWTkkiQSbb33ys"
                alt="sql"
                className="skill-icon"
              />
              <p>REST API</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="exp" className="section reveal">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="tl-item interact">
            <div className="dot" />
            <div className="content">
              <h3>MERN Stack Developer </h3>
              <span>2025 – Present</span>
              <ul>
                <li>Built responsive apps with auth & secure REST APIs.</li>
                <li>
                  Built responsive UIs with React and modern CSS frameworks..
                </li>
                <li>
                  Integrated authentication (JWT) and database connections..
                </li>
              </ul>
            </div>
          </div>
          <div className="tl-item interact">
            <div className="dot" />
            <div className="content">
              <h3>Frontend Projects</h3>
              <span>2024 – 2025</span>
              <ul>
              <li>Developed multiple responsive websites using React, Bootstrap, and Tailwind CSS.</li>
    <li>Integrated **third-party APIs** (e.g., news, weather, AI image generation) for dynamic data.</li>
    <li>Built interactive UIs with animations and optimized performance for mobile devices.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="title">What I Do</h2>
        <div className="services-container">
          {/* Card 1 */}
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Experienced in building scalable web applications with MongoDB,
              Express.js, React, and Node.js. Focused on clean code, performance
              optimization, and delivering user-centric solutions.
            </p>
          </div>
          {/* Card 2 */}
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Designing intuitive, visually appealing interfaces that enhance
              user experience. Skilled in wireframes, prototypes, and creating
              seamless, responsive user journeys for web and mobile
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS (id add kiya) */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        {/* Container with col-10 center */}
        <div className="projects-container">
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://www.wizbrand.com/tutorials/wp-content/uploads/2023/06/image-generator-thumbnail.png"
                alt="AI Image Generator"
              />
              <h3>AI Image Generator</h3>
              <p>
                A web app that generates unique AI-based images from user
                prompts.
              </p>
              <span className="tech">Tech: Reactjs, OpenAI API,bootstrap</span>
              <a href="#" target="_blank" className="live-btn" rel="noreferrer">
                🔗 Live Demo
              </a>
            </div>
            <div className="project-card">
              <img
                src="https://agenciasebrae.com.br/wp-content/uploads/2023/02/Mais-7-Alternativas-Gratuitas-e-Pagas-ao-ChatGPT_p11526_cover_image_resized.jpg"
                alt="News App"
              />
              <h3>ChatGpt Clone</h3>
              <p>
                A web-based AI chatbot that provides real-time text responses
                and generates images from user prompts, offering an interactive
                and seamless experience.
              </p>
              <span className="tech">Tech: Reactjs, GeminiAPI, Bootstrap</span>
              <a href="#" target="_blank" className="live-btn" rel="noreferrer">
                🔗 Live Demo
              </a>
            </div>
            <div className="project-card">
              <img
                src="https://www.tanishqgoldenharvest.co.in/Areas/Online/Content/images/_NewImages/sliderNew2.jpg"
                alt="Library Website"
              />
              <h3>jewelry Clone</h3>
              <p>
                A responsive jewelry store web app with smooth navigation using
                React Router. Includes homepage, product galleries, about, and
                contact sections. Fully interactive UI with modern, responsive
                design.
              </p>
              <span className="tech">
                Tech: React, Bootstrap, AOS,bootstrap, CSS
              </span>
              <a href="#" target="_blank" className="live-btn" rel="noreferrer">
                🔗 Live Demo
              </a>
            </div>
            <div className="project-card">
              <img
                src="https://i.ytimg.com/vi/t9g6mu6m1i4/maxresdefault.jpg"
                alt="Portfolio"
              />
              <h3>Myntra Clone</h3>
              <p>
                A responsive e-commerce web app with 3D animations and
                interactive UI. Showcases products, highlights skills/projects,
                and provides smooth, modern user experience. Built with
                React.js, and css.
              </p>
              <span className="tech">
                Tech: Reactjs, css, raect-router-dom,bootstrap
              </span>
              <a href="#" target="_blank" className="live-btn" rel="noreferrer">
                🔗 Live Demo
              </a>
            </div>
            <div className="project-card">
              <img
                src="https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Jewelry Store"
              />
              <h3>Wheather App</h3>
              <p>
                A responsive web app that displays real-time weather data using
                external APIs. Users can search for any city and view current
                temperature, conditions, and forecasts. Built with React,css,
                and API integration.
              </p>
              <span className="tech">Tech: ReactJs,css,bootstrap,api </span>
              <a href="#" target="_blank" className="live-btn" rel="noreferrer">
                🔗 Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="edu-section">
        <h2 className="edu-title">My Education</h2>
        <div className="edu-timeline">
          {/* Left Side */}
          <div className="edu-container edu-left">
            <div className="edu-card">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Dr. Ram Manohar Lohia Avadh University</p>
              <span className="edu-year">2020 - 2023</span>
            </div>
          </div>
          {/* Right Side */}
          <div className="edu-container edu-right">
            <div className="edu-card">
              <h3>Master of Computer Applications (MCA)</h3>
              <p>Dr. Ram Manohar Lohia Avadh University</p>
              <span className="edu-year">2023 - 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section reveal">
        <h2 className="section-title">Let’s Build Something</h2>
        <form
          className="contact"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! I will get back to you.");
          }}
        >
          <input placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <input placeholder="Subject (optional)" />
          <textarea placeholder="Your Message" required rows="5" />
          <button className="btn primary">Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer glass">
        <div>
          © {new Date().getFullYear()} Shiv Kumar — All rights reserved.
        </div>
        <div className="socials">
          <a
            href="https://github.com/shiv21461562"
            aria-label="GitHub"
            className="pill"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shiv-kumar-7b644b253/"
            aria-label="LinkedIn"
            className="pill"
          >
            LinkedIn
          </a>
          <a href="shiv2523598@gmail.com" className="pill">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
