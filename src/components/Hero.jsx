import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1>Rebecca Muteteri</h1>
        <h2>Software Engineer</h2>
        <p className={styles.desc}>I build clean, scalable, and user-focused web applications.</p>
        <div className={styles.btns}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnOutline}>Hire Me</a>
        </div>
      </div>
      <div className={styles.avatar}>
        <img
          src="https://ui-avatars.com/api/?name=Rebecca+Muteteri&size=200&background=1a3a5c&color=c9a84c&bold=true&rounded=true"
          alt="Rebecca Muteteri"
        />
      </div>
    </section>
  )
}
