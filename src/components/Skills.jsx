import { useInView } from '../hooks/useInView'

const SKILLS = [
  'JavaScript', 'Java', 'HTML', 'CSS', 'Python',
  'React', 'Node.js', 'REST APIs', 'Git', 'GitHub',
  'OOP', 'Data Structures', 'Algorithms', 'SQL', 'JSON',
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.08 })

  return (
    <section
      ref={ref}
      className={`section section-reveal${inView ? ' reveal-visible' : ''}`}
      id="skills"
    >
      <div className="section-inner">
        <h2 className="section-heading">My Skills</h2>
        <p className="section-body">
          A mix of languages, tools, and concepts I've picked up through
          coursework, projects, and a lot of late-night coding sessions.
        </p>

        <div className="skills-wrap">
          {SKILLS.map(s => (
            <span key={s} className="skill-badge">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
