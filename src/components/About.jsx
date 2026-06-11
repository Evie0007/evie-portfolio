import { useInView } from '../hooks/useInView'
import { FlowerGroupLeft, FlowerGroupRight } from './Flowers'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className="section section-alt" id="about" ref={ref}>
      <FlowerGroupLeft  visible={inView} />

      <div className="section-inner">
        <p className="section-tag">01 — About me</p>
        <h2 className="section-heading">A little about me</h2>

        <div className="about-grid">
          <div className="about-photo">
            {/* Replace with your photo: <img src="/your-photo.jpg" alt="Evie" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
            Your photo here
          </div>

          <div className="about-text">
            <p className="section-body">
              I'm a Computer Science student passionate about full-stack
              development, clean code, and building software that people
              actually enjoy using.
            </p>
            <p className="section-body">
              When I'm not coding, you can find me exploring new design trends,
              working on personal projects, or levelling up my skills. I love
              turning complex problems into simple, elegant solutions.
            </p>
            <span className="about-handnote">always learning, always building ✦</span>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-cell">
            <div className="stat-number">12+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-cell">
            <div className="stat-number">4</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stat-cell">
            <div className="stat-number">3rd</div>
            <div className="stat-label">Year</div>
          </div>
          <div className="stat-cell">
            <div className="stat-number">∞</div>
            <div className="stat-label">Curiosity</div>
          </div>
        </div>
      </div>

      <FlowerGroupRight visible={inView} />
    </section>
  )
}
