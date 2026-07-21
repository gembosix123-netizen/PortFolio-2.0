import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ease } from '../lib/motion'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
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
        <img src={asset(project.image)} alt={`${project.title} interface`} />
        <span>Open case study <ArrowRight /></span>
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
