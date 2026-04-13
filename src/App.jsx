import { useEffect, useRef } from 'react'
import './App.css'
import profileImage from './assets/WhatsApp Image 2026-04-13 at 20.13.39.jpeg'
import resumePDF from './assets/bhupendra_resume 2.1.pdf'

function App() {
  const revealRefs = useRef([])
  const statRefs = useRef([])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduceMotion && 'IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              revealObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.14 }
      )

      revealRefs.current.forEach((el) => {
        if (el) revealObserver.observe(el)
      })

      const animateCount = (el) => {
        const target = Number(el.dataset.count || 0)
        const duration = 1200
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const value = Math.floor(target * (0.15 + progress * 0.85))
          el.textContent = progress < 1 ? value.toLocaleString() : target.toLocaleString()

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        requestAnimationFrame(tick)
      }

      const statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCount(entry.target)
              statObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.45 }
      )

      statRefs.current.forEach((el) => {
        if (el) statObserver.observe(el)
      })
    } else {
      revealRefs.current.forEach((el) => {
        if (el) el.classList.add('is-visible')
      })
      statRefs.current.forEach((el) => {
        if (el) el.textContent = Number(el.dataset.count || 0).toLocaleString()
      })
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container nav-bar">
          <a className="brand" href="#home" aria-label="Go to top">
            <span className="brand-mark">BP</span>
            <span className="brand-text">
              <strong>Bhupendra</strong>
              <small>Pratap Singh</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button--ghost" href={resumePDF} download="Bhupendra_Pratap_Singh_Resume.pdf">
            Download Resume
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal" ref={(el) => revealRefs.current.push(el)}>
              <p className="eyebrow">AI Trainer • Full-Stack Developer • CSE (AIML)</p>
              <h1>Building practical products with AI, clean UX, and measurable impact.</h1>
              <p className="lead">
                I'm Bhupendra Pratap Singh, a computer science student at Noida Institute of
                Engineering and Technology. I build AI-powered and full-stack experiences that turn
                ideas into reliable products.
              </p>

              <div className="hero-actions">
                <a className="button" href="#projects">View Projects</a>
                <a className="button button--secondary" href="#contact">Contact Me</a>
                <a className="button button--ghost" href={resumePDF} download="Bhupendra_Pratap_Singh_Resume.pdf">
                  Resume PDF
                </a>
              </div>

              <div className="social-row" aria-label="Social links">
                <a href="https://in.linkedin.com/in/bhupendra-pratap-singh-394271261" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/Bhupendrapratapsingh20" target="_blank" rel="noreferrer">GitHub</a>
                <a href="mailto:bhuvitech2003@gmail.com">Email</a>
              </div>
            </div>

            <aside className="hero-card reveal" aria-label="Profile highlights" ref={(el) => revealRefs.current.push(el)}>
              <div className="profile-image-container">
                <img src={profileImage} alt="Bhupendra Pratap Singh" className="profile-image" />
              </div>
              <div className="profile-meta">
                <h2>Quick snapshot</h2>
                <p>Greater Noida, Uttar Pradesh</p>
              </div>

              <dl className="quick-facts">
                <div>
                  <dt>Focus</dt>
                  <dd>AI + Full-Stack</dd>
                </div>
                <div>
                  <dt>Strengths</dt>
                  <dd>LLM workflows, React, Node.js</dd>
                </div>
                <div>
                  <dt>LeetCode</dt>
                  <dd>200+ problems solved</dd>
                </div>
                <div>
                  <dt>Open to</dt>
                  <dd>Internships and product roles</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="stats section">
          <div className="container stats-grid">
            <article className="stat-card reveal" ref={(el) => revealRefs.current.push(el)}>
              <strong data-count="200" ref={(el) => statRefs.current.push(el)}>0</strong>
              <span>LeetCode problems solved</span>
            </article>
            <article className="stat-card reveal" ref={(el) => revealRefs.current.push(el)}>
              <strong data-count="4" ref={(el) => statRefs.current.push(el)}>0</strong>
              <span>LLMs fine-tuned</span>
            </article>
            <article className="stat-card reveal" ref={(el) => revealRefs.current.push(el)}>
              <strong data-count="60000" ref={(el) => statRefs.current.push(el)}>0</strong>
              <span>Prompt-response pairs processed</span>
            </article>
            <article className="stat-card reveal" ref={(el) => revealRefs.current.push(el)}>
              <strong data-count="500" ref={(el) => statRefs.current.push(el)}>0</strong>
              <span>Mock interviews conducted</span>
            </article>
          </div>
        </section>

        <section className="section section--alt" id="about">
          <div className="container content-grid">
            <div className="section-heading reveal" ref={(el) => revealRefs.current.push(el)}>
              <p className="eyebrow">About me</p>
              <h2>Turning data, interfaces, and AI into user-friendly systems.</h2>
            </div>
            <div className="card reveal" ref={(el) => revealRefs.current.push(el)}>
              <p>
                I enjoy working across the stack: understanding the problem, shaping the experience,
                and shipping implementations that are useful in the real world. My recent work spans
                model evaluation, prompt workflows, voice-based AI products, and secure web apps.
              </p>
              <p>
                I focus on writing maintainable code, collaborating with teams, and improving systems
                using measurable outcomes such as faster convergence, higher accuracy, and better
                user engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading reveal" ref={(el) => revealRefs.current.push(el)}>
              <p className="eyebrow">Experience</p>
              <h2>Industry work focused on AI evaluation and deployment.</h2>
            </div>

            <div className="timeline">
              <article className="timeline-item reveal" ref={(el) => revealRefs.current.push(el)}>
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content card">
                  <div className="card-top">
                    <div>
                      <h3>AI Trainer Intern</h3>
                      <p className="muted">April 2024 – January 2025</p>
                    </div>
                    <span className="pill">AI / Evaluation</span>
                  </div>
                  <ul className="bullet-list">
                    <li>Fine-tuned 4 LLMs using QA feedback loops and scenario-based evaluations, improving response accuracy by 18%.</li>
                    <li>Processed and validated 60,000+ prompt-response pairs for training datasets, accelerating model convergence by 22%.</li>
                    <li>Reduced hallucination rate by 12% through targeted alignment experiments across 3 generative platforms.</li>
                    <li>Collaborated with a cross-functional team of 5 engineers to deploy updates across 2 production environments weekly.</li>
                  </ul>
                  <p className="muted small">Tech stack: Outlier.ai, Alligner</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="projects">
          <div className="container">
            <div className="section-heading reveal" ref={(el) => revealRefs.current.push(el)}>
              <p className="eyebrow">Projects</p>
              <h2>Featured work blending full-stack systems and AI experiences.</h2>
            </div>

            <div className="projects-grid">
              <article className="project-card card reveal" ref={(el) => revealRefs.current.push(el)}>
                <div className="card-top">
                  <div>
                    <h3>Blood Bank Management System</h3>
                    <p className="muted">October 2024 – March 2025</p>
                  </div>
                  <a className="pill pill--link" href="https://bloodbankmanagementsystem1.netlify.app/" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
                <ul className="bullet-list">
                  <li>Implemented JWT-based authentication for 4 user groups, reducing login-related support tickets by 30%.</li>
                  <li>Designed a real-time inventory module for 800+ blood units with automatic low-stock alerts, reducing stockouts by 40%.</li>
                  <li>Developed 12 RESTful APIs and integrated file uploads using Multer, reaching 95% average API uptime on Render.</li>
                </ul>
                <div className="tag-row">
                  <span>React.js</span><span>Redux</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>JWT</span>
                </div>
              </article>

              <article className="project-card card reveal" ref={(el) => revealRefs.current.push(el)}>
                <div className="card-top">
                  <div>
                    <h3>AI Interviewer</h3>
                    <p className="muted">May 2025 – July 2025</p>
                  </div>
                  <span className="pill">Voice AI</span>
                </div>
                <ul className="bullet-list">
                  <li>Built a voice-based AI recruiter simulating 20+ interview scenarios and supporting 500 mock interviews.</li>
                  <li>Engineered a real-time conversation pipeline handling 2,500+ turns per day with 98% availability.</li>
                  <li>Implemented Supabase authentication and role-based access control for 750+ users, cutting onboarding time by 60%.</li>
                  <li>Optimized prompt flow logic to increase engagement by 25% and reduce average interview time by 15%.</li>
                </ul>
                <div className="tag-row">
                  <span>Next.js</span><span>React</span><span>Vapi</span><span>Supabase</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container content-grid">
            <div className="section-heading reveal" ref={(el) => revealRefs.current.push(el)}>
              <p className="eyebrow">Skills</p>
              <h2>Hands-on tools and fundamentals I use to ship better software.</h2>
            </div>

            <div className="card reveal skills-card" ref={(el) => revealRefs.current.push(el)}>
              <div>
                <h3>Languages</h3>
                <div className="tag-row">
                  <span>C</span><span>C++</span><span>JavaScript</span><span>SQL</span><span>Java</span><span>Python</span>
                </div>
              </div>
              <div>
                <h3>Tools</h3>
                <div className="tag-row">
                  <span>VS Code</span><span>GitHub</span><span>Git</span><span>Postman</span>
                </div>
              </div>
              <div>
                <h3>AI / Voice tools</h3>
                <div className="tag-row">
                  <span>Vapi</span><span>ChatGPT</span><span>Cursor AI</span><span>Trae AI</span>
                </div>
              </div>
              <div>
                <h3>Frameworks</h3>
                <div className="tag-row">
                  <span>Bootstrap</span><span>React</span><span>Redux</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span>
                </div>
              </div>
              <div>
                <h3>CS Fundamentals</h3>
                <div className="tag-row">
                  <span>DSA</span><span>OOPs</span><span>OS</span><span>DBMS</span><span>CN</span><span>System Design</span><span>Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="education">
          <div className="container">
            <div className="section-heading reveal" ref={(el) => revealRefs.current.push(el)}>
              <p className="eyebrow">Education, certification, and achievements</p>
              <h2>Strong academic foundation with practical recognition.</h2>
            </div>

            <div className="edu-grid">
              <article className="card reveal" ref={(el) => revealRefs.current.push(el)}>
                <h3>Education</h3>
                <div className="stacked-list">
                  <div>
                    <strong>Noida Institute of Engineering and Technology</strong>
                    <p className="muted">B.Tech in Computer Science and Engineering – AIML</p>
                    <p className="muted">November 2022 – July 2026 • CGPA 7.70</p>
                  </div>
                  <div>
                    <strong>R.S Excel English Academy</strong>
                    <p className="muted">Intermediate</p>
                    <p className="muted">April 2019 – May 2020 • 74.80%</p>
                  </div>
                </div>
              </article>

              <article className="card reveal" ref={(el) => revealRefs.current.push(el)}>
                <h3>Achievements</h3>
                <ul className="bullet-list">
                  <li>Solved 200+ LeetCode problems, showing persistence and continuous learning.</li>
                  <li>Winner – Youth Games National Golden Cup.</li>
                  <li>Winner of National and State Youth Games Open State Championships.</li>
                </ul>
              </article>

              <article className="card reveal" ref={(el) => revealRefs.current.push(el)}>
                <h3>Certifications</h3>
                <ul className="bullet-list">
                  <li>Mastering Data Structure and Algorithms using C++ — Abdul Bari</li>
                  <li>Data Manipulation in Python — Master Python, NumPy, Pandas, Meta Brains</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-card card reveal" ref={(el) => revealRefs.current.push(el)}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let's build something practical, polished, and useful.</h2>
              <p className="lead compact">
                I'm open to internships, product engineering roles, and collaboration on AI or
                full-stack projects.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button" href="mailto:bhuvitech2003@gmail.com">Email me</a>
              <a className="button button--secondary" href="tel:+918887651886">Call me</a>
              <a className="button button--ghost" href={resumePDF} download="Bhupendra_Pratap_Singh_Resume.pdf">Download Resume</a>
              <a className="button button--ghost" href="https://in.linkedin.com/in/bhupendra-pratap-singh-394271261" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button--ghost" href="https://github.com/Bhupendrapratapsingh20" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {currentYear} Bhupendra Pratap Singh</p>
        </div>
      </footer>
    </>
  )
}

export default App

