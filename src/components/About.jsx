import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.08 })

  return (
    <section
      ref={ref}
      className={`section section-alt section-reveal${inView ? ' reveal-visible' : ''}`}
      id="about"
    >
      <div className="section-inner">
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
              When I'm not coding, you can find me exploring new places for
              good food and boba, working on personal projects, or enjoying
              time with my loved ones. I'm always excited to learn something
              new and apply it to my work.
            </p>
            <span className="about-handnote">always learning, always building ✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
