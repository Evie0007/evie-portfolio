import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const DEV_PROJECTS = [
  {
    tag:  'SjHacks 2026 Winner · Full-Stack',
    name: 'Playtest Pilot',
    desc: 'React dashboard for a Unity game playtesting tool with playtest setup, issue tracking, test results, and hardware settings. Integrated with backend services and telemetry data to surface bug severity and performance summaries. Built with a 4-person team in under 24 hours.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
    href: 'https://devpost.com/software/playtest-pilot',
    image: '/projects/playtest-pilot.jpg',
  },
  {
    tag:  'Full-Stack · Java · Team Lead',
    name: "Student's Knowledge Base",
    desc: 'MVC-based faculty information portal with robust CRUD functionality, automated data validation, and SQLite integration for reliable student academic record management. Led a 4-person team through the full SDLC — delivered full marks.',
    tech: ['Java', 'JavaFX', 'SQLite', 'OOP'],
    href: 'https://github.com/Evie0007/CS151-Team-33-Student-Knowledge-Base',
  },
  {
    tag:  'Game Dev · Java',
    name: 'Flappy Cat Game',
    desc: 'Flappy Bird-style game built with OOP principles, managing player, obstacles, scoring, and collision detection as independent objects. Iterated on gameplay logic and tested edge cases to improve responsiveness and stability.',
    tech: ['Java', 'OOP'],
    href: 'https://evie0007.github.io/Flappy-Cat/',
    image: '/projects/flappy-cat.png',
  },
  {
    tag:  'Frontend · React',
    name: 'Claude Monet Website',
    desc: 'Multi-page website showcasing Claude Monet\'s artwork with structured navigation and an engaging visual browsing experience. Designed responsive layouts using CSS Grid and Flexbox for a consistent experience across screen sizes.',
    tech: ['React', 'HTML/CSS', 'Node.js'],
    href: 'https://evie0007.github.io/Claude-Monet-Bio-Webpage/',
    image: '/projects/claude-monet.jpg',
  },
]

const MARKETING_PROJECTS = [
  {
    tag:  'UX/UI Design · Jan 2026 – Present',
    name: 'ESA Compliance Navigator',
    desc: 'Designed 15+ high-fidelity web pages and 2 interactive prototypes for web and mobile. Independently created the mobile UX/UI from concept to prototype within a 2-week sprint for the project\'s main conference showcase, accelerating the development timeline by an estimated 2 weeks.',
    tech: ['Figma', 'UX Research', 'Prototyping', 'Mobile Design'],
    href: 'https://esa-project-phi.vercel.app/',
    image: '/projects/esa-compliance.svg',
  },
  {
    tag:  'Social Media · Branding · Oct 2025 – Present',
    name: 'RCC SJSU — Brand & Campaigns',
    desc: 'Digital Marketing & Graphic Design Ambassador for the Responsible Computing Club at SJSU. Developed campaign strategies, designed social media assets, and refreshed brand visuals and merchandise to maintain a consistent digital presence.',
    tech: ['Social Media', 'Graphic Design', 'Brand Identity', 'Campaign Strategy'],
    href: '#',
  },
  {
    tag:  'Event Marketing · Apr – Aug 2025',
    name: 'Vietnam Tech Summit 2025',
    desc: 'Created digital marketing assets and slide templates for a 500+ attendee tech conference. Assisted onsite operations over 2 days, ensuring smooth logistics and guest experience for speakers and participants.',
    tech: ['Digital Marketing', 'Design', 'Content Creation', 'Event Operations'],
    href: '#',
  },
]

const VISIBLE_COUNT = 3

function ProjectRow({ project, index }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-row${index % 2 === 1 ? ' project-row-reverse' : ''}`}
    >
      <div className="project-row-media">
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          /* Replace with a screenshot: <img src="/projects/your-shot.jpg" alt={project.name} /> */
          <span className="project-row-placeholder-label">Preview coming soon</span>
        )}
      </div>

      <div className="project-row-content">
        <p className="project-tag">{project.tag}</p>
        <h3 className="project-row-name">{project.name}</h3>
        <p className="project-row-desc">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>
        <span className="project-row-link">View project <span className="project-arrow">↗</span></span>
      </div>
    </a>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.06 })
  const [tab, setTab] = useState('dev')
  const [expanded, setExpanded] = useState(false)

  const projects = tab === 'dev' ? DEV_PROJECTS : MARKETING_PROJECTS
  const visibleProjects = expanded ? projects : projects.slice(0, VISIBLE_COUNT)
  const hasMore = projects.length > VISIBLE_COUNT

  function selectTab(next) {
    setTab(next)
    setExpanded(false)
  }

  return (
    <section
      ref={ref}
      className={`section section-alt section-wide section-reveal${inView ? ' reveal-visible' : ''}`}
      id="projects"
    >

      <div className="section-inner">
        <h2 className="section-heading">My Work</h2>
        <p className="section-body">A few things I've built and created.</p>

        <div className="work-tabs">
          <button
            className={`work-tab${tab === 'dev' ? ' active' : ''}`}
            onClick={() => selectTab('dev')}
          >
            Development
          </button>
          <button
            className={`work-tab${tab === 'marketing' ? ' active' : ''}`}
            onClick={() => selectTab('marketing')}
          >
            Digital Marketing
          </button>
        </div>

        <div className="projects-rows">
          {visibleProjects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
        </div>

        {hasMore && (
          <div className="see-more-wrap">
            <button className="see-more-btn" onClick={() => setExpanded(v => !v)}>
              {expanded ? 'Show less' : `See ${projects.length - VISIBLE_COUNT} more project${projects.length - VISIBLE_COUNT > 1 ? 's' : ''}`}
            </button>
          </div>
        )}
      </div>

    </section>
  )
}
