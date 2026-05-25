import styles from './About.module.css'

const info = [
  { label: 'Name', value: 'Rebecca Muteteri' },
  { label: 'Email', value: 'john.doe@email.com' },
  { label: 'Location', value: 'New York, USA' },
  { label: 'Availability', value: 'Open to Work' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p>I'm a passionate Software Engineer with <strong>5+ years of experience</strong> building modern web applications. I specialize in full-stack development with a focus on performance and clean code.</p>
          <p>I'm currently open to new opportunities where I can contribute, grow, and continue to develop my skills.</p>
          <a href="/resume.pdf" className={styles.btn} download>⬇ Download Resume</a>
        </div>
        <div className={styles.info}>
          {info.map(({ label, value }) => (
            <div key={label} className={styles.infoItem}>
              <span>{label}:</span> {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
