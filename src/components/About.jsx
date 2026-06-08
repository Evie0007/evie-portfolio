import { forwardRef } from 'react'

const SKILLS = [
  'JavaScript', 'Java', 'HTML / CSS', 'JSON', 'Git',
  'React', 'Node.js', 'REST APIs', 'OOP', 'Data Structures', 'Algorithms',
]

const DocAbout = forwardRef(function DocAbout(_, ref) {
  return (
    <div ref={ref} className="doc" style={{ display: 'flex' }}>
      <div className="doc-inner">
        <div className="doc-header">
          <span className="doc-label">About me</span>
          <span className="doc-pagenum">pg. 01</span>
        </div>

        <div className="eyebrow">CS Student · Open to internships</div>
        <h1>Hi, I'm<br /><em>Evie.</em></h1>
        <p style={{ maxWidth: 480, marginTop: 12 }}>
          Computer Science student passionate about full-stack development, clean
          code, and building software that people actually enjoy using. I turn
          ideas into working things.
        </p>

        <hr className="divider" />
        <h2 className="section-label">Skills</h2>
        <div className="skills-wrap">
          {SKILLS.map(s => <span key={s} className="skill-tag">{s}</span>)}
        </div>

        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">12+</div>
            <div className="stat-lbl">Projects</div>
          </div>
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-lbl">Languages</div>
          </div>
          <div className="stat">
            <div className="stat-num">3rd</div>
            <div className="stat-lbl">Year</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-lbl">Curiosity</div>
          </div>
        </div>

        <span className="handnote">always learning, always building ✦</span>
      </div>
      <div className="doc-footer">
        <span className="doc-footer-name">evie — portfolio</span>
        <span className="doc-footer-stamp">2026</span>
      </div>
    </div>
  )
})

export default DocAbout
