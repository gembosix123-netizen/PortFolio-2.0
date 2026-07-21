import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Github,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MoveRight,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import { experience, projects, services, techStack } from './data/portfolio'
import './App.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const ease = [0.22, 1, 0.36, 1]

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
}

function ProjectMedia({ media }) {
  if (media.type === 'video') {
    return (
      <video
        src={asset(media.src)}
        autoPlay
        loop
        muted
        playsInline
        aria-label={media.alt}
      />
    )
  }

  if (media.type === 'gallery') {
    return (
      <div className="project-gallery">
        {media.items.map((item) => (
          <img key={item.src} src={asset(item.src)} alt={item.alt} />
        ))}
      </div>
    )
  }

  return <img src={asset(media.src)} alt={media.alt} />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [introVisible, setIntroVisible] = useState(true)
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(-400)
  const pointerY = useMotionValue(-400)
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24 })
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 26 })
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(heroProgress, [0, 1], [0, reduceMotion ? 0 : 130])
  const heroOpacity = useTransform(heroProgress, [0, 0.78], [1, 0.1])

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroVisible(false), reduceMotion ? 100 : 1450)
    const movePointer = (event) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    window.addEventListener('pointermove', movePointer)
    return () => {
      window.clearTimeout(introTimer)
      window.removeEventListener('pointermove', movePointer)
    }
  }, [pointerX, pointerY, reduceMotion])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <AnimatePresence>
        {introVisible && (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ y: '-100%' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.9, ease }}
          >
            <div className="intro-mark" aria-label="Allan">
              {'ALLAN'.split('').map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.07, ease }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="intro-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease }}
            />
            <p>Creative developer · Visual designer</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-glow" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Allan Andan, home" onClick={closeMenu}>
          ALLAN<span>®</span>
        </a>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="https://wa.me/601112076533" target="_blank" rel="noreferrer">
          Start a project <ArrowUpRight size={16} aria-hidden="true" />
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
        <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
          <motion.div className="hero-ambient" style={{ opacity: heroOpacity }} aria-hidden="true" />

          <motion.div
            className="hero-content"
            initial="hidden"
            animate={introVisible ? 'hidden' : 'visible'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            <motion.div className="hero-meta" variants={reveal}>
              <p><span className="status-dot" /> Open for selected projects</p>
              <p>Kuala Lumpur · MY</p>
              <p>Scroll to explore <ArrowDown size={14} /></p>
            </motion.div>

            <h1 id="hero-title" className="hero-title">
              {['Ideas', 'Into', 'Impact.'].map((word, index) => (
                <span className={index === 1 ? 'outline-word' : ''} key={word}>
                  <span className="word-mask">
                    <motion.span
                      initial={{ y: '115%', rotate: 3 }}
                      animate={introVisible ? { y: '115%' } : { y: 0, rotate: 0 }}
                      transition={{ duration: 0.95, delay: 0.55 + index * 0.12, ease }}
                    >
                      {word}
                    </motion.span>
                  </span>
                </span>
              ))}
            </h1>

            <motion.div className="hero-intro" variants={reveal}>
              <p className="hero-kicker"><Sparkles size={16} /> Creative developer × visual designer</p>
              <p className="hero-copy">
                I&apos;m <strong>Allan Andan</strong>. I turn raw ideas into digital products, motion, and visual identities that people can feel and use.
              </p>
            </motion.div>
          </motion.div>

          <motion.figure
            className="portrait-card"
            style={{ y: portraitY }}
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={introVisible ? {} : { opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.1, delay: 0.75, ease }}
          >
            <img src={asset('allan1.png')} alt="Allan Andan at Gamuda AI Academy" />
            <div className="portrait-scan" aria-hidden="true" />
            <figcaption>
              <span>Developer / Designer</span>
              <span>2026 Portfolio</span>
            </figcaption>
            <div className="portrait-index" aria-hidden="true">A/01</div>
          </motion.figure>

          <motion.a
            className="hero-orbit"
            href="#work"
            aria-label="View selected work"
            initial={{ scale: 0, rotate: -60 }}
            animate={introVisible ? {} : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', delay: 1.1 }}
          >
            <span>View work · View work ·</span>
            <ArrowDown size={22} />
          </motion.a>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...services, ...services].map((service, index) => (
              <span key={`${service}-${index}`}>{service}<b>✦</b></span>
            ))}
          </div>
        </div>

        <section className="about section section-light" id="about" aria-labelledby="about-title">
          <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={reveal}>
            <span>01</span><p>About / Approach</p>
          </motion.div>

          <div className="about-layout">
            <motion.h2 id="about-title" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}>
              Design with <em>energy.</em><br />Build with purpose.
            </motion.h2>

            <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}>
              <p>
                My work sits between two worlds: visual design that gives an idea personality, and development that makes it useful. I care about the small interactions because that&apos;s where a portfolio stops feeling like a template.
              </p>
              <p>
                At Gamuda AI Academy, I&apos;m expanding that approach through React, Python, FastAPI, and AI-powered product development.
              </p>
              <a href="#stack">Explore my toolkit <MoveRight size={18} /></a>
            </motion.div>
          </div>

          <div className="stat-grid">
            {[
              ['03', 'Selected projects'],
              ['04', 'Creative services'],
              ['01', 'AI capstone'],
            ].map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease }}
              >
                <strong>{number}</strong><span>{label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="stack section" id="stack" aria-labelledby="stack-title">
          <motion.div className="section-label section-label-dark" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={reveal}>
            <span>02</span><p>Frameworks / Software</p>
          </motion.div>

          <div className="stack-heading">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal}>
              <p className="overline"><Zap size={15} /> My working toolkit</p>
              <h2 id="stack-title">Code.<br /><span>Create.</span><br />Ship.</h2>
            </motion.div>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              From front-end interfaces and AI integration to identity design and deployment—the tools I use to move an idea from sketch to screen.
            </motion.p>
          </div>

          <div className="tool-grid">
            {techStack.map((tool, index) => (
              <motion.article
                className="tool-card"
                key={tool.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7, rotate: index % 2 ? 0.7 : -0.7 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 5) * 0.06, duration: 0.55, ease }}
              >
                <span className="tool-code">{tool.code}</span>
                <div><h3>{tool.name}</h3><p>{tool.category}</p></div>
                <ArrowUpRight size={18} />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="work section section-light" id="work" aria-labelledby="work-title">
          <motion.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={reveal}>
            <span>03</span><p>Selected work</p>
          </motion.div>

          <div className="work-heading">
            <motion.h2 id="work-title" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal}>
              Work that<br /><em>moves.</em>
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              Technology, motion, and identity—three different outputs, one consistent focus on clear ideas and memorable execution.
            </motion.p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <motion.article
                className={`project-card project-${project.media.type}`}
                key={project.id}
                style={{ '--project-accent': project.accent }}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.9, ease }}
              >
                <div className="project-topline">
                  <span>{project.number}</span>
                  <p>{project.category}</p>
                  <span>Allan Andan ©26</span>
                </div>

                <div className="project-layout">
                  <motion.div className="project-media" whileHover="hovered">
                    <motion.div
                      className="project-media-inner"
                      variants={{ hovered: { scale: 1.035 } }}
                      transition={{ duration: 0.65, ease }}
                    >
                      <ProjectMedia media={project.media} />
                    </motion.div>
                    <div className="project-corner"><Layers3 size={18} /> Case {project.number}</div>
                  </motion.div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    {project.href && (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        Launch project <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-title">
          <motion.div className="section-label section-label-dark" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={reveal}>
            <span>04</span><p>Experience / Journey</p>
          </motion.div>

          <div className="experience-heading">
            <motion.h2 id="experience-title" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={reveal}>
              Built through<br /><span>experience.</span>
            </motion.h2>
            <Code2 size={68} strokeWidth={1} aria-hidden="true" />
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <motion.article
                className="experience-row"
                key={item.company}
                initial={{ opacity: 0, x: index % 2 ? 35 : -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, ease }}
              >
                <span>0{index + 1}</span>
                <p className="experience-period">{item.period}</p>
                <div><h3>{item.role}</h3><p>{item.company}</p></div>
                <p className="experience-description">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div className="contact-bg" aria-hidden="true">LET&apos;S TALK</div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}>
            <p className="contact-kicker"><span className="status-dot" /> Available for ideas worth building</p>
            <h2 id="contact-title">Got a wild idea?<br /><em>Send it over.</em></h2>
          </motion.div>

          <div className="contact-grid">
            <a href="mailto:allanzyt123@gmail.com">
              <Mail aria-hidden="true" /><span>Email</span><strong>allanzyt123@gmail.com</strong><ArrowUpRight />
            </a>
            <a href="https://wa.me/601112076533" target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /><span>WhatsApp</span><strong>011-1207 6533</strong><ArrowUpRight />
            </a>
            <a href="https://github.com/gembosix123-netizen" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" /><span>GitHub</span><strong>@gembosix123-netizen</strong><ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Allan Andan</p>
        <p>Designed with energy · Built with React</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
