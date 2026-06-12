import { useInView } from '../hooks/useInView'
import { FlowerGroupLeft, FlowerGroupRight } from './Flowers'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className="section section-alt" id="about" ref={ref}>
      <FlowerGroupLeft  visible={inView} />

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
              When I'm not coding, you can find me exploring new places for good food and boba,
              working on personal projects, or enjoying my time with my loved ones.
              I'm always excited to learn something new and apply it to my work.
            </p>
            <span className="about-handnote">always learning, always building ✦</span>
          </div>
        </div>

    
      </div>

      <FlowerGroupRight visible={inView} />
    </section>
  )
}
