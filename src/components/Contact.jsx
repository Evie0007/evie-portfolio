import { forwardRef } from 'react'

const FIELDS = [
  { label: 'Email',    value: 'you@email.com',                    href: 'mailto:you@email.com' },
  { label: 'GitHub',   value: 'github.com/yourusername',          href: 'https://github.com/yourusername' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile',      href: 'https://linkedin.com/in/yourprofile' },
  { label: 'Resume',   value: 'Download PDF ↓',                   href: '#' },
]

const DocContact = forwardRef(function DocContact(_, ref) {
  return (
    <div ref={ref} className="doc" style={{ display: 'none' }}>
      <div className="doc-inner">
        <div className="doc-header">
          <span className="doc-label">Contact</span>
          <span className="doc-pagenum">pg. 03</span>
        </div>

        <h2 className="section-label">Get in touch</h2>
        <h1>Let's work<br /><em>together.</em></h1>

        <div style={{ marginTop: 26 }}>
          {FIELDS.map(f => (
            <div key={f.label} className="contact-field">
              <span className="field-label">{f.label}</span>
              <a href={f.href} className="field-val">{f.value}</a>
            </div>
          ))}
        </div>

        <div className="contact-note">
          <p>"I'm currently looking for internship opportunities. My inbox is always
          open — whether you have a question, a project idea, or just want to say
          hello."</p>
        </div>

        <div className="meta-row">
          <div className="meta-cell">
            <div className="meta-lbl">Response time</div>
            <div className="meta-val">within 24 hrs</div>
          </div>
          <div className="meta-cell">
            <div className="meta-lbl">Timezone</div>
            <div className="meta-val">Your timezone</div>
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

export default DocContact
