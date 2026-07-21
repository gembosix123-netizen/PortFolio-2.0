import { Code2 } from 'lucide-react'
import { Reveal } from '../components/PageFrame'
import ProjectCard from '../components/ProjectCard'
import { developmentProjects } from '../data/portfolio'

export default function Development() {
  return (
    <main id="page-content" className="page development-page">
      <section className="page-hero development-hero">
        <Reveal className="page-hero-index"><span>01</span><p>Development portfolio</p></Reveal>
        <Reveal className="page-title-wrap" delay={0.1}>
          <h1>Websites.<br />Systems.<br /><em>Useful things.</em></h1>
          <p>From public-facing company websites to management systems and AI products. Each project has its own problem, process, and outcome.</p>
        </Reveal>
        <Code2 className="page-hero-icon" aria-hidden="true" />
      </section>

      <section className="project-archive" aria-label="Development projects">
        {developmentProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index % 2 === 0} />
        ))}
      </section>

      <section className="build-principles">
        <Reveal className="section-kicker"><span>Approach</span><p>How I build</p></Reveal>
        <div className="principle-grid">
          {[
            ['01', 'Understand first', 'The right build starts with the business, audience, and actual pressure—not a list of fashionable features.'],
            ['02', 'Make it clear', 'Information, actions, and visual hierarchy should make the next step feel obvious.'],
            ['03', 'Ship responsibly', 'Responsive behaviour, accessibility, maintainable content, and reliable deployment are part of the design.'],
          ].map(([number, title, copy]) => (
            <Reveal className="principle" key={number} delay={Number(number) * 0.08}>
              <span>{number}</span><h2>{title}</h2><p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
