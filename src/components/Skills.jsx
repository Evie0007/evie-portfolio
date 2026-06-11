import { useInView } from '../hooks/useInView'
import { FlowerGroupLeft, FlowerGroupRight } from './Flowers'

const SKILLS = [
  'JavaScript', 'Java', 'HTML', 'CSS', 'Python',
  'React', 'Node.js', 'REST APIs', 'Git', 'GitHub',
  'OOP', 'Data Structures', 'Algorithms', 'SQL', 'JSON',
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="section" id="skills" ref={ref}>
      <FlowerGroupLeft  visible={inView} />

      <div className="section-inner">
        <p className="section-tag">02 — Skills</p>
        <h2 className="section-heading">What I work with</h2>
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

      <FlowerGroupRight visible={inView} />
    </section>
  )
}
