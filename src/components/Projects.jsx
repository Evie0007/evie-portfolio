import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const DEV_PROJECTS = [
  {
    tag:  'Featured · Full-stack',
    name: 'Project Name Here',
    desc: 'A short description of what this project does and what problem it solves. Outcome-focused and clear.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    href: '#',
  },
  {
    tag:  'Algorithm · Java',
    name: 'Project Two',
    desc: 'Brief description — what you built, what it demonstrates, and what you learned from it.',
    tech: ['Java', 'Data Structures', 'Algorithms'],
    href: '#',
  },
  {
    tag:  'Frontend · UI',
    name: 'Project Three',
    desc: 'Brief description — what you built, what it demonstrates, and what you learned from it.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    href: '#',
  },
]

const MARKETING_PROJECTS = [
  {
    tag:  'Social Media · Campaign',
    name: 'Campaign Name Here',
    desc: 'Brief description of the campaign goal, strategy used, and measurable outcome achieved.',
    tech: ['Instagram', 'Canva', 'Meta Ads'],
    href: '#',
  },
  {
    tag:  'Content · Branding',
    name: 'Marketing Project Two',
    desc: 'Brief description — what you created, for what brand or audience, and what results it achieved.',
    tech: ['Canva', 'Copywriting', 'Analytics'],
    href: '#',
  },
  {
    tag:  'SEO · Email',
    name: 'Marketing Project Three',
    desc: 'Brief description — the strategy, tools used, and measurable impact on engagement or reach.',
    tech: ['SEO', 'Mailchimp', 'Google Analytics'],
    href: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.06 })
  const [tab, setTab] = useState('dev')

  const projects = tab === 'dev' ? DEV_PROJECTS : MARKETING_PROJECTS

  return (
    <section
      ref={ref}
      className={`section section-alt section-reveal${inView ? ' reveal-visible' : ''}`}
      id="projects"
    >

      <div className="section-inner">
        <h2 className="section-heading">My Work</h2>
        <p className="section-body">A few things I've built and created.</p>

        <div className="work-tabs">
          <button
            className={`work-tab${tab === 'dev' ? ' active' : ''}`}
            onClick={() => setTab('dev')}
          >
            Development
          </button>
          <button
            className={`work-tab${tab === 'marketing' ? ' active' : ''}`}
            onClick={() => setTab('marketing')}
          >
            Digital Marketing
          </button>
        </div>

        <div className="projects-grid">
          {projects.map(p => (
            <a
              key={p.name}
              href={p.href}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="project-arrow">↗</span>
              <p className="project-tag">{p.tag}</p>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}
