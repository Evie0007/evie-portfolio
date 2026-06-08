import { useState, useRef, useCallback } from 'react'
import InfoPanel from './components/Navbar'
import Layers from './components/Hero'
import DocAbout from './components/About'
import DocProjects from './components/Projects'
import DocContact from './components/Contact'

const PAGES = ['about', 'projects', 'contact']
const PAGE_LABELS = { about: '1 / 3', projects: '2 / 3', contact: '3 / 3' }
const NAV_LABELS  = { about: 'About me', projects: 'My Projects', contact: 'Contact' }
const OUT_DURATION = 440
const IN_DURATION  = 520

export default function App() {
  const [current, setCurrent] = useState('about')
  const currentRef = useRef('about')
  const busyRef    = useRef(false)
  const docs       = useRef({})

  const goTo = useCallback((target) => {
    const curr = currentRef.current
    if (target === curr || busyRef.current) return
    busyRef.current = true

    const forward = PAGES.indexOf(target) > PAGES.indexOf(curr)
    const outAnim  = forward ? 'anim-peel-away' : 'anim-slide-up'
    const inAnim   = forward ? 'anim-rise-in'   : 'anim-drop-in'

    const outEl = docs.current[curr]
    const inEl  = docs.current[target]

    outEl.style.zIndex = 15
    outEl.classList.add(outAnim)

    setTimeout(() => {
      outEl.classList.remove(outAnim)
      outEl.style.display = 'none'
      outEl.style.zIndex  = ''

      inEl.style.display = 'flex'
      inEl.style.zIndex  = 10
      inEl.offsetHeight  // force reflow before animation
      inEl.classList.add(inAnim)

      currentRef.current = target
      setCurrent(target)

      setTimeout(() => {
        inEl.classList.remove(inAnim)
        busyRef.current = false
      }, IN_DURATION)
    }, OUT_DURATION)
  }, [])

  return (
    <div className="scene">
      <InfoPanel current={current} goTo={goTo} navLabels={NAV_LABELS} />

      <div className="stack-zone">
        <Layers />

        <DocAbout    ref={el => { docs.current.about    = el }} />
        <DocProjects ref={el => { docs.current.projects = el }} />
        <DocContact  ref={el => { docs.current.contact  = el }} />

        <div className="stack-counter">{PAGE_LABELS[current]}</div>
      </div>

      <div className="mobile-nav">
        {PAGES.map((page, i) => (
          <button
            key={page}
            className={`nav-btn${current === page ? ' active' : ''}`}
            onClick={() => goTo(page)}
          >
            <span className="nav-btn-num">0{i + 1}</span>
            {NAV_LABELS[page]}
          </button>
        ))}
      </div>
    </div>
  )
}
