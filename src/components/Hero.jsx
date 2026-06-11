import { useEffect, useState } from 'react'
import { FlowerGroupLeft, FlowerGroupRight } from './Flowers'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  // Fade flowers in shortly after mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 350)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="hero">
      <FlowerGroupLeft  visible={visible} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="hero-eyebrow">CS Student &amp; Developer</p>
        <h1 className="hero-title">
          Hi, I'm <em>Evie.</em>
        </h1>
        <p className="hero-sub">
          I build clean, modern, and user-friendly web experiences — turning
          ideas into things that actually work.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-dark">View My Work</a>
          <a href="#contact"  className="btn btn-outline">Get In Touch</a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M6 0v14M1 9l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <FlowerGroupRight visible={visible} />
    </section>
  )
}
