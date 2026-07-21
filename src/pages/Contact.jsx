import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/PageFrame'

export default function Contact() {
  return (
    <main id="page-content" className="page contact-page">
      <section className="contact-main">
        <Reveal className="contact-title"><span>05 / Contact</span><h1>Bring the<br /><em>idea.</em><br />I&apos;ll bring<br />the build.</h1></Reveal>
        <Reveal className="contact-options" delay={0.1}>
          <p>Web project, business system, visual identity, jersey design, or a problem that still needs shaping—start with a conversation.</p>
          <a href="https://wa.me/601112076533" target="_blank" rel="noreferrer"><MessageCircle /><span>WhatsApp<strong>011-1207 6533</strong></span><ArrowUpRight /></a>
          <a href="mailto:allanzyt123@gmail.com"><Mail /><span>Email<strong>allanzyt123@gmail.com</strong></span><ArrowUpRight /></a>
          <a href="https://github.com/gembosix123-netizen" target="_blank" rel="noreferrer"><span className="contact-github">GH</span><span>GitHub<strong>@gembosix123-netizen</strong></span><ArrowUpRight /></a>
        </Reveal>
      </section>
      <section className="contact-location">
        <MapPin />
        <p>Based in</p>
        <h2>Kota Kinabalu,<br />Sabah, Malaysia.</h2>
        <span>Available for selected projects and collaborations.</span>
      </section>
    </main>
  )
}
