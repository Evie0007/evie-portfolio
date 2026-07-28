import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const DEV_PROJECTS = [
  {
    tag:  'SjHacks 2026 Winner · Full-Stack',
    name: 'Playtest Pilot',
    desc: 'React dashboard for a Unity game playtesting tool with playtest setup, issue tracking, test results, and hardware settings. Integrated with backend services and telemetry data to surface bug severity and performance summaries. Built with a 4-person team in under 24 hours.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
    href: '#', // add your GitHub link here
  },
  {
    tag:  'Full-Stack · Java · Team Lead',
    name: "Student's Knowledge Base",
    desc: 'MVC-based faculty information portal with robust CRUD functionality, automated data validation, and SQLite integration for reliable student academic record management. Led a 4-person team through the full SDLC — delivered full marks.',
    tech: ['Java', 'JavaFX', 'SQLite', 'OOP'],
    href: '#',
  },
  {
    tag:  'Game Dev · Java',
    name: 'Flappy Cat Game',
    desc: 'Flappy Bird-style game built with OOP principles, managing player, obstacles, scoring, and collision detection as independent objects. Iterated on gameplay logic and tested edge cases to improve responsiveness and stability.',
    tech: ['Java', 'OOP'],
    href: '#', // add your GitHub link here
  },
  {
    tag:  'Frontend · React',
    name: 'Claude Monet Website',
    desc: 'Multi-page website showcasing Claude Monet\'s artwork with structured navigation and an engaging visual browsing experience. Designed responsive layouts using CSS Grid and Flexbox for a consistent experience across screen sizes.',
    tech: ['React', 'HTML/CSS', 'Node.js'],
    href: '#',
  },
]

const MARKETING_PROJECTS = [
  {
    tag:  'UX/UI Design · Jan 2026 – Present',
    name: 'ESA Compliance Navigator',
    desc: 'Designed 15+ high-fidelity web pages and 2 interactive prototypes for web and mobile. Independently created the mobile UX/UI from concept to prototype within a 2-week sprint for the project\'s main conference showcase, accelerating the development timeline by an estimated 2 weeks.',
    tech: ['Figma', 'UX Research', 'Prototyping', 'Mobile Design'],
    href: '#', // add your demo link here
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
