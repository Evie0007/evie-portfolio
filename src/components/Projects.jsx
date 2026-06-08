import { forwardRef } from 'react'

const PROJECTS = [
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
    desc: 'Brief description. What you built, what it demonstrates, what you learned.',
    tech: ['Java', 'Data Structures', 'Algorithms'],
    href: '#',
  },
  {
    tag:  'Frontend · UI',
    name: 'Project Three',
    desc: 'Brief description. What you built, what it demonstrates, what you learned.',
    tech: ['HTML / CSS', 'JavaScript'],
    href: '#',
  },
]

const DocProjects = forwardRef(function DocProjects(_, ref) {
  return (
    <div ref={ref} className="doc" style={{ display: 'none' }}>
      <div className="doc-inner">
        <div className="doc-header">
          <span className="doc-label">My Projects</span>
          <span className="doc-pagenum">pg. 02</span>
        </div>

        <h2 className="section-label">Selected work</h2>

        {PROJECTS.map(p => (
          <a key={p.name} href={p.href} className="project-card">
            <div>
              <div className="proj-tag">{p.tag}</div>
              <h3>{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="pills">
                {p.tech.map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>
            <span className="proj-arrow">↗</span>
          </a>
        ))}

        <div className="meta-row">
          <div className="meta-cell">
            <div className="meta-lbl">Status</div>
            <div className="meta-val">Open to work</div>
          </div>
          <div className="meta-cell">
            <div className="meta-lbl">Available from</div>
            <div className="meta-val">Summer 2026</div>
          </div>
        </div>
      </div>
      <div className="doc-footer">
        <span className="doc-footer-name">evie — portfolio</span>
        <span className="doc-footer-stamp">2026</span>
      </div>
    </div>
  )
})

export default DocProjects
