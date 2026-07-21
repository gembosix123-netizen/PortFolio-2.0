import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/PageFrame'
import { developmentProjects } from '../data/portfolio'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = developmentProjects.find((item) => item.slug === slug)
  if (!project) return <Navigate to="/development" replace />

  return (
    <main id="page-content" className="page project-detail" style={{ '--project-color': project.color }}>
      <section className="case-hero">
        <Link className="back-link" to="/development"><ArrowLeft /> All development</Link>
        <Reveal className="case-meta"><span>{project.number}</span><span>{project.type}</span><span>{project.year}</span></Reveal>
        <Reveal delay={0.1}><h1>{project.title}</h1></Reveal>
        <Reveal className="case-summary" delay={0.15}>
          <p>{project.summary}</p>
          <a href={project.href} target="_blank" rel="noreferrer">Launch project <ArrowUpRight /></a>
        </Reveal>
      </section>

      <section className="case-image-wrap">
        <img src={asset(project.image)} alt={`${project.title} website or application interface`} />
      </section>

      <section className="case-story">
        <Reveal><span>01 / Challenge</span><h2>{project.challenge}</h2></Reveal>
        <Reveal delay={0.12}><span>02 / Response</span><p>{project.response}</p></Reveal>
      </section>

      <section className="case-highlights">
        <p>Project highlights</p>
        <div>{project.highlights.map((highlight, index) => <span key={highlight}><i>0{index + 1}</i>{highlight}</span>)}</div>
      </section>

      <section className="next-case">
        <span>Continue exploring</span>
        <Link to="/development">All development projects <ArrowUpRight /></Link>
      </section>
    </main>
  )
}
