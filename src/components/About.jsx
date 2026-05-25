import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <h2 className="section-title">
          <span className="section-label">01.</span> About Me
        </h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Hello! I'm Rebecca, a software engineer passionate about building things that live on the internet.
              I enjoy creating elegant solutions to complex problems and care deeply about writing clean, maintainable code.
            </p>
            <p>
              I have <strong>5+ years of experience</strong> working across the full stack — from designing intuitive
              user interfaces to architecting scalable backend systems. I'm currently open to new opportunities.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className={styles.techList}>
              {['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'TypeScript', 'AWS'].map(t => (
                <li key={t}><span>▹</span> {t}</li>
              ))}
            </ul>
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.imgBox}>
              <img
                src="https://ui-avatars.com/api/?name=Rebecca+Muteteri&size=300&background=1a2235&color=64ffda&bold=true"
                alt="Rebecca Muteteri"
              />
              <div className={styles.imgBorder} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
