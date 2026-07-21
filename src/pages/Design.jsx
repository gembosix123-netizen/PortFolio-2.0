import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { Reveal } from '../components/PageFrame'
import { designCollections } from '../data/portfolio'
import { ease } from '../lib/motion'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function Design() {
  return (
    <main id="page-content" className="page design-page">
      <section className="page-hero design-hero">
        <Reveal className="page-hero-index"><span>02</span><p>Graphic design portfolio</p></Reveal>
        <Reveal className="page-title-wrap" delay={0.1}>
          <h1>Identity with<br /><em>something to say.</em></h1>
          <p>Logos, jersey systems, animated invitations, and visual experiments. Not decoration—character made visible.</p>
        </Reveal>
        <Palette className="page-hero-icon" aria-hidden="true" />
      </section>

      {designCollections.map((collection, collectionIndex) => (
        <section className="design-collection" key={collection.slug} style={{ '--collection-color': collection.color }}>
          <Reveal className="collection-heading">
            <span>0{collectionIndex + 1}</span>
            <h2>{collection.title}</h2>
            <p>{collection.description}</p>
          </Reveal>
          <div className="design-grid">
            {collection.images.map((image, index) => (
              <motion.figure
                key={image}
                className={(index + collectionIndex) % 3 === 0 ? 'design-item-wide' : ''}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease }}
              >
                <img src={asset(image)} alt={`${collection.title} design ${index + 1}`} />
                <figcaption><span>{collection.title}</span><span>0{index + 1}</span></figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      ))}

      <section className="motion-design">
        <Reveal className="motion-design-copy"><span>03 / Motion</span><h2>Designed to<br /><em>move.</em></h2><p>An animated digital invitation for Hans & Yati, bringing typography, pacing, and atmosphere together.</p></Reveal>
        <Reveal className="motion-design-media" delay={0.12}>
          <video src={asset('hans_yati_card.mp4')} autoPlay muted loop playsInline aria-label="Hans and Yati animated digital invitation" />
        </Reveal>
      </section>
    </main>
  )
}
