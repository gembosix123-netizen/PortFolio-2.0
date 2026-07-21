import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimeHeroTitle from '../components/AnimeHeroTitle'
import { Reveal } from '../components/PageFrame'
import ProjectCard from '../components/ProjectCard'
import SplineExperience from '../components/SplineExperience'
import { developmentProjects, disciplines } from '../data/portfolio'
import { ease } from '../lib/motion'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Home() {
  return (
    <main id="page-content" className="home-page">
      <section className="home-hero">
        <div className="hero-status">
          <span><i /> Available for selected work</span>
          <span>Kota Kinabalu · Sabah · Malaysia</span>
        </div>

        <div className="home-hero-copy">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Founder / Developer / Designer
          </motion.p>
          <AnimeHeroTitle />
          <motion.div className="hero-summary" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7, ease }}>
            <p>I&apos;m Allan Andan. I create websites, business systems, AI products, graphic identities, and apparel—with equal care for how they work and how they feel.</p>
            <Link to="/development">Explore the work <ArrowRight /></Link>
          </motion.div>
        </div>

        <motion.figure
          className="home-portrait"
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

        <a className="hero-scroll" href="#worlds"><ArrowDown /> Choose a world</a>
      </section>

      <section className="discipline-index" id="worlds" aria-labelledby="worlds-title">
        <Reveal className="section-kicker"><span>Index / 03</span><p id="worlds-title">This is not one kind of portfolio.</p></Reveal>
        <div className="discipline-list">
          {disciplines.map((item) => (
            <motion.div key={item.href} whileHover="hover" style={{ '--discipline-color': item.color }}>
              <Link to={item.href}>
                <span>{item.number}</span>
                <div><h2>{item.title}</h2><p>{item.subtitle}</p></div>
                <motion.i variants={{ hover: { rotate: -25, scale: 1.08 } }}><ArrowUpRight /></motion.i>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="home-motion-section">
        <Reveal className="motion-copy">
          <span className="pill">Interactive thinking</span>
          <h2>Different tools.<br /><em>One point of view.</em></h2>
          <p>Code gives ideas function. Design gives them character. Business thinking makes sure they solve the right problem.</p>
          <Link to="/about">How I work <ArrowRight /></Link>
        </Reveal>
        <SplineExperience />
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
