export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="hero-title">
          Hi, I'm <em>Evie.</em>
        </h1>
        <p className="hero-sub">
          I'm a CS major student at San Jose State University.
          Beside coding, I enjoy designing and exploring new technologies.
        </p>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M6 0v14M1 9l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
