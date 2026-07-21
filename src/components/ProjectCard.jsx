import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ease } from '../lib/motion'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function ProjectCard({ project, featured = false }) {
  const cardRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const plateRotate = useTransform(scrollYProgress, [0, 1], [-1.8, 1.8])

  return (
    <motion.article
      ref={cardRef}
      className={`project-card${featured ? ' project-card-featured' : ''}`}
      style={{ '--card-color': project.color }}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card-meta">
        <span>{project.number}</span>
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <Link className="project-card-image" to={`/development/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <motion.div
          className="project-card-image-layer"
          style={{ y: reduceMotion ? 0 : imageY, rotate: reduceMotion ? 0 : plateRotate }}
        >
          <img src={asset(project.image)} alt={`${project.title} interface`} />
        </motion.div>
        <span className="project-card-ghost" aria-hidden="true">{project.number}</span>
        <span className="project-card-open">Open case study <ArrowRight /></span>
        <i className="project-card-sheen" aria-hidden="true" />
      </Link>
      <div className="project-card-copy">
        <div>
          <h2>{project.title}</h2>
          <p>{project.summary}</p>
        </div>
        <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
          Live site <ArrowUpRight />
        </a>
      </div>
    </motion.article>
  )
}
