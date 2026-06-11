import { useInView } from '../hooks/useInView'
import { FlowerGroupLeft, FlowerGroupRight } from './Flowers'

const LINKS = [
  { label: 'Email',    value: 'you@email.com',               href: 'mailto:you@email.com' },
  { label: 'GitHub',   value: 'github.com/Evie0007',         href: 'https://github.com/Evie0007' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile' },
  { label: 'Resume',   value: 'Download PDF ↓',              href: '#' },
]

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section className="section" id="contact" ref={ref}>
      <FlowerGroupLeft  visible={inView} />

      <div className="section-inner">
        <p className="section-tag">04 — Contact</p>
        <h2 className="section-heading">Let's work <em style={{ fontStyle: 'italic', color: '#B86478' }}>together.</em></h2>
        <p className="contact-intro">
          I'm currently looking for internship opportunities. My inbox is always
          open — whether you have a question, a project idea, or just want to
          say hello.
        </p>

        <div className="contact-links">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} className="contact-link">
              <span className="contact-link-label">{l.label}</span>
              <span className="contact-link-value">{l.value}</span>
            </a>
          ))}
        </div>
      </div>

      <FlowerGroupRight visible={inView} />
    </section>
  )
}
