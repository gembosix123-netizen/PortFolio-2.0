import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import AnimeHeroTitle from '../components/AnimeHeroTitle'
import KineticManifesto from '../components/KineticManifesto'
import { Reveal } from '../components/PageFrame'
import ProjectCard from '../components/ProjectCard'
import SplineExperience from '../components/SplineExperience'
import { developmentProjects, disciplines } from '../data/portfolio'
import { ease } from '../lib/motion'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Home() {
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 115])
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 190])
  const portraitRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 3.5])
  const outlineX = useTransform(scrollYProgress, [0, 1], ['-2%', '8%'])

  return (
    <main id="page-content" className="home-page">
      <section className="home-hero" ref={heroRef}>
        <motion.div
          className="hero-outline-word"
          style={{ x: reduceMotion ? 0 : outlineX }}
          aria-hidden="true"
        >
          Allan
        </motion.div>
        <div className="hero-shape hero-shape-one" aria-hidden="true" />
        <div className="hero-shape hero-shape-two" aria-hidden="true" />
        <div className="hero-status">
          <span><i /> Available for selected work</span>
          <span>Kota Kinabalu · Sabah · Malaysia</span>
        </div>

        <motion.div className="home-hero-copy" style={{ y: reduceMotion ? 0 : copyY }}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Founder / Developer / Designer
          </motion.p>
          <AnimeHeroTitle />
          <motion.div className="hero-summary" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7, ease }}>
            <p>I&apos;m Allan Andan. I create websites, business systems, AI products, graphic identities, and apparel—with equal care for how they work and how they feel.</p>
            <Link to="/development">Explore the work <ArrowRight /></Link>
          </motion.div>
        </motion.div>

        <motion.figure
          className="home-portrait"
          style={{
            y: reduceMotion ? 0 : portraitY,
            rotate: reduceMotion ? 0 : portraitRotate,
          }}
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1, delay: 0.5, ease }}
        >
          <img src={asset('allan-editorial.png')} alt="Allan Andan, founder, developer, and graphic designer" />
          <figcaption>
            <span>Allan Andan</span>
            <span>Based in Sabah</span>
          </figcaption>
          <motion.div className="portrait-sticker" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
            Multi-disciplinary · Multi-disciplinary ·
          </motion.div>
        </motion.figure>

        <div className="hero-card-stack" data-anime-reveal data-anime-stagger aria-hidden="true">
          <span className="hero-float-card hero-float-card-one"><small>01</small><strong>Systems</strong><i>Useful by design</i></span>
          <span className="hero-float-card hero-float-card-two"><small>02</small><strong>Identity</strong><i>Built with character</i></span>
          <span className="hero-float-card hero-float-card-three"><small>03</small><strong>Strategy</strong><i>Think before build</i></span>
        </div>

        <a className="hero-scroll" href="#worlds"><ArrowDown /> Choose a world</a>
      </section>

      <div className="motion-ticker motion-ticker-hero" aria-hidden="true" data-anime-reveal>
        <div>
          <span>Developer</span><i>✦</i><span>Designer</span><i>✦</i><span>Founder</span><i>✦</i><span>Problem solver</span><i>✦</i>
          <span>Developer</span><i>✦</i><span>Designer</span><i>✦</i><span>Founder</span><i>✦</i><span>Problem solver</span><i>✦</i>
        </div>
      </div>

      <section className="discipline-index" id="worlds" aria-labelledby="worlds-title">
        <Reveal className="section-kicker"><span>Index / 03</span><p id="worlds-title">This is not one kind of portfolio.</p></Reveal>
        <div className="discipline-list">
          {disciplines.map((item) => (
            <motion.div key={item.href} whileHover="hover" style={{ '--discipline-color': item.color }}>
              <Link to={item.href} data-anime-reveal>
                <span>{item.number}</span>
                <div><h2>{item.title}</h2><p>{item.subtitle}</p></div>
                <motion.i variants={{ hover: { rotate: -25, scale: 1.08 } }}><ArrowUpRight /></motion.i>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <KineticManifesto />

      <section className="home-motion-section">
        <Reveal className="motion-copy">
          <span className="pill">Interactive thinking</span>
          <h2>Different tools.<br /><em>One point of view.</em></h2>
          <p>Code gives ideas function. Design gives them character. Business thinking makes sure they solve the right problem.</p>
          <Link to="/about">How I work <ArrowRight /></Link>
        </Reveal>
        <div className="motion-stage-wrap">
          <SplineExperience />
          <span className="motion-seam-label" aria-hidden="true">Interactive layer / move the pointer</span>
        </div>
      </section>

      <section className="home-selected" aria-labelledby="selected-title">
        <Reveal className="selected-heading">
          <span>Selected development</span>
          <h2 id="selected-title">Built for the<br />real world.</h2>
          <Link to="/development">View all projects <ArrowRight /></Link>
        </Reveal>
        <div className="selected-projects">
          {developmentProjects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="founder-callout">
        <div className="founder-ghost-word" aria-hidden="true">Netsa</div>
        <div className="founder-tape" aria-hidden="true">Think first · Build after · Think first · Build after</div>
        <Reveal>
          <span>Founder of</span>
          <h2>Netsa<br />Digital<br />Solutions.</h2>
        </Reveal>
        <Reveal className="founder-callout-copy" delay={0.15}>
          <p>A Sabah-based digital company helping startups, SMEs, IKS, and local businesses understand what to build before spending money building it.</p>
          <div>
            <Link to="/company">Meet the company <ArrowRight /></Link>
            <a href="https://netsa-company-profile.vercel.app/" target="_blank" rel="noreferrer">Visit Netsa <ArrowUpRight /></a>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
