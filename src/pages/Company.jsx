import { ArrowRight, ArrowUpRight, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/PageFrame'
import { netsaServices } from '../data/portfolio'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Company() {
  return (
    <main id="page-content" className="page company-page">
      <section className="page-hero company-hero">
        <Reveal className="page-hero-index"><span>03</span><p>Company / Founder</p></Reveal>
        <Reveal className="page-title-wrap" delay={0.1}>
          <span className="netsa-label">Netsa Digital Solutions</span>
          <h1>Think first.<br /><em>Build after.</em></h1>
          <p>A Sabah-based digital solutions company that starts by listening to what a business actually needs.</p>
        </Reveal>
        <Building2 className="page-hero-icon" aria-hidden="true" />
      </section>

      <section className="company-proof">
        <Reveal className="company-proof-image"><img src={asset('projects/netsa-company.png')} alt="Netsa Digital Solutions company website" /></Reveal>
        <Reveal className="company-proof-copy" delay={0.1}>
          <span>Founded by Allan Andan</span>
          <h2>Digital help without the hard sell.</h2>
          <p>Netsa helps startups, SMEs, IKS, and local businesses understand, choose, and build practical digital solutions based on their real needs, budget, and stage of growth.</p>
          <a href="https://netsa-company-profile.vercel.app/" target="_blank" rel="noreferrer">Visit company website <ArrowUpRight /></a>
        </Reveal>
      </section>

      <section className="netsa-method">
        <Reveal className="section-kicker"><span>Method / 05</span><p>How Netsa works</p></Reveal>
        <div className="method-track">
          {['Listen', 'Understand', 'Recommend', 'Build', 'Support'].map((item, index) => (
            <Reveal className="method-step" key={item} delay={index * 0.07}>
              <span>0{index + 1}</span><h2>{item}</h2><ArrowRight />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="netsa-services">
        <Reveal className="services-intro"><span>What we can build</span><h2>Solutions shaped<br />around the business.</h2></Reveal>
        <div className="service-list">
          {netsaServices.map((service, index) => (
            <Reveal className="service-row" key={service} delay={(index % 3) * 0.06}>
              <span>0{index + 1}</span><p>{service}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="company-founder">
        <Reveal><span>Founder&apos;s note</span><blockquote>“The difficult part is often not building. It&apos;s knowing what should be built.”</blockquote></Reveal>
        <Reveal className="company-founder-card" delay={0.1}>
          <img src={asset('allan-editorial.png')} alt="Allan Andan, founder of Netsa Digital Solutions" />
          <div><h2>Allan Andan</h2><p>Founder · Netsa Digital Solutions</p><Link to="/about">Read my story <ArrowRight /></Link></div>
        </Reveal>
      </section>
    </main>
  )
}
