import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Mail,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'
import './App.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const experience = [
  {
    period: '2025 — NOW',
    role: 'Aspiring Developer',
    company: 'Gamuda AI Academy',
    description:
      'An intensive technology pathway focused on modern web development and practical AI integration, including the SignBridge capstone project.',
  },
  {
    period: '2022 — 2024',
    role: 'Banquet Assistant',
    company: 'Raia Hotel',
    description:
      'Delivered reliable guest service and worked closely with a fast-moving team during professional events and functions.',
  },
  {
    period: '2021 — 2022',
    role: 'Shop Assistant',
    company: 'Walk-in & Shop',
    description:
      'Supported daily retail operations, sales, customer service, and inventory management.',
  },
]

const services = [
  'Frontend Development',
  'AI Integration',
  'Visual Identity',
  'Apparel Design',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Allan Andan, home" onClick={closeMenu}>
          AA<span>.</span>
        </a>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="https://wa.me/601112076533" target="_blank" rel="noreferrer">
          Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <main id="main-content">
        <section className="hero section" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow-row reveal">
              <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
              <p className="hero-location">Malaysia · 2026</p>
            </div>

            <h1 id="hero-title" className="hero-title reveal reveal-delay-1">
              Creative
              <span>Developer <em>&amp;</em></span>
              Designer.
            </h1>

            <div className="hero-bottom reveal reveal-delay-2">
              <p>
                I&apos;m Allan Andan. I build clear digital experiences and bold visual identities—where practical technology meets thoughtful design.
              </p>
              <a className="circle-link" href="#work" aria-label="View selected work">
                <ArrowDown size={24} aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="portrait-card reveal reveal-delay-2">
            <img src={asset('allan1.png')} alt="Allan Andan at Gamuda AI Academy" />
            <figcaption>
              <span>Allan Andan</span>
              <span>Developer / Designer</span>
            </figcaption>
          </figure>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...services, ...services].map((service, index) => (
              <span key={`${service}-${index}`}>{service} <b>✳</b></span>
            ))}
          </div>
        </div>

        <section className="about section light-section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-index">01 / About</p>
            <h2 id="about-title">Ideas should look good <em>and</em> work hard.</h2>
          </div>

          <div className="about-grid">
            <p className="about-lead">
              My path connects two disciplines: visual design that creates identity, and development that turns ideas into useful products.
            </p>
            <div className="about-details">
              <p>
                At Gamuda AI Academy, I&apos;m strengthening my skills in React, Python, FastAPI, and AI-powered product development. Before technology, customer-facing roles taught me discipline, teamwork, and how to deliver under pressure.
              </p>
              <ul className="skills-list" aria-label="Core skills">
                {services.map((service, index) => (
                  <li key={service}><span>0{index + 1}</span>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="work section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-dark">
            <p className="section-index">02 / Selected work</p>
            <h2 id="work-title">Made with purpose.</h2>
          </div>

          <article className="project project-featured">
            <a
              className="project-media project-media-wide"
              href="https://signbridge-app-6f7c4.web.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the SignBridge AI project"
            >
              <img src={asset('signbridge-hero.jpg.png')} alt="SignBridge AI website homepage" />
              <span className="project-open"><ArrowUpRight aria-hidden="true" /></span>
            </a>
            <div className="project-meta">
              <div>
                <p className="project-number">Project 01 · Capstone</p>
                <h3>SignBridge AI</h3>
              </div>
              <p>
                An AI-powered communication bridge created for Deaf and hearing communities, combining a clear interface with accessible technology.
              </p>
              <ul className="tag-list" aria-label="SignBridge technologies">
                <li>React</li><li>Python</li><li>FastAPI</li><li>AI</li>
              </ul>
            </div>
          </article>

          <div className="project-grid">
            <article className="project">
              <div className="project-media video-frame">
                <video
                  src={asset('hans_yati_card.mp4')}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Animated Hans and Yati digital invitation"
                />
              </div>
              <div className="project-meta compact">
                <div>
                  <p className="project-number">Project 02 · Motion</p>
                  <h3>Hans &amp; Yati</h3>
                </div>
                <p>An elegant animated digital invitation designed to make a personal moment feel memorable.</p>
              </div>
            </article>

            <article className="project">
              <div className="project-media collage" aria-label="Apparel and identity design gallery">
                <img src={asset('jersey2.jpg')} alt="White and red custom football jersey" />
                <img src={asset('jersey3.jpg')} alt="Turquoise patterned custom jersey" />
                <img src={asset('logo1.jpg')} alt="Raja football club panther identity" />
                <img src={asset('logo2.jpg')} alt="Predator football club identity" />
              </div>
              <div className="project-meta compact">
                <div>
                  <p className="project-number">Project 03 · Design</p>
                  <h3>Identity &amp; Apparel</h3>
                </div>
                <p>A collection of sports identities, jersey concepts, and graphic systems built for teams with character.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="experience section light-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="section-index">03 / Experience</p>
            <h2 id="experience-title">The journey so far.</h2>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-row" key={item.company}>
                <p className="experience-number">0{index + 1}</p>
                <p className="experience-period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="experience-description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <p className="section-index">04 / Contact</p>
          <div className="contact-heading">
            <h2 id="contact-title">Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
            <a className="contact-arrow" href="mailto:allanzyt123@gmail.com" aria-label="Email Allan">
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:allanzyt123@gmail.com">
              <Mail size={18} aria-hidden="true" />
              <span>Email</span>
              <strong>allanzyt123@gmail.com</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="https://wa.me/601112076533" target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              <span>WhatsApp</span>
              <strong>011-1207 6533</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="https://github.com/gembosix123-netizen" target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
              <strong>@gembosix123-netizen</strong>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Allan Andan</p>
        <p>Designed with intention. Built with React.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
