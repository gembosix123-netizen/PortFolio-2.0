import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/PageFrame'
import { toolGroups } from '../data/portfolio'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function About() {
  return (
    <main id="page-content" className="page about-page">
      <section className="about-intro">
        <Reveal className="about-title">
          <span>04 / About Allan</span>
          <h1>Not only<br />a coder.</h1>
        </Reveal>
        <Reveal className="about-intro-copy" delay={0.1}>
          <p className="about-lead">I&apos;m a multidisciplinary builder based in Kota Kinabalu—working across technology, business, and visual design.</p>
          <p>I founded Netsa Digital Solutions to help local businesses make clearer digital decisions. My development work includes company websites, community platforms, business systems, and AI products. My design practice moves between logos, sports identities, apparel, and motion.</p>
          <span><MapPin /> Kota Kinabalu, Sabah, Malaysia</span>
        </Reveal>
      </section>

      <section className="about-portrait-section">
        <img src={asset('allan-editorial.png')} alt="Editorial portrait of Allan Andan" />
        <div className="about-portrait-words" aria-hidden="true"><span>Think</span><span>Make</span><span>Lead</span></div>
      </section>

      <section className="tools-section">
        <Reveal className="section-kicker"><span>Toolkit</span><p>Frameworks, software & strengths</p></Reveal>
        <div className="tool-groups">
          {toolGroups.map((group, groupIndex) => (
            <Reveal className="tool-group" key={group.title} delay={groupIndex * 0.08}>
              <span>0{groupIndex + 1}</span><h2>{group.title}</h2>
              <div>{group.tools.map((tool) => <p key={tool}>{tool}</p>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-path">
        <Reveal><span>Path so far</span><h2>Service taught me people.<br />Design taught me clarity.<br />Code taught me possibility.</h2></Reveal>
        <div>
          {[
            ['Now', 'Founder & multidisciplinary creator', 'Netsa Digital Solutions'],
            ['2025', 'AI & web development pathway', 'Gamuda AI Academy'],
            ['2022—24', 'Hospitality & service experience', 'Raia Hotel'],
            ['2021—22', 'Retail operations & customers', 'Walk-in & Shop'],
          ].map(([period, role, place]) => <Reveal className="path-row" key={period}><span>{period}</span><h3>{role}</h3><p>{place}</p></Reveal>)}
        </div>
      </section>

      <section className="about-next">
        <h2>Pick a side of my work.</h2>
        <div><Link to="/development">Development <ArrowRight /></Link><Link to="/design">Graphic design <ArrowRight /></Link></div>
      </section>
    </main>
  )
}
