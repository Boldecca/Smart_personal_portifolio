import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.sub}>I'm currently open to new opportunities. My inbox is always open!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <input type="text" placeholder="Subject" required />
        <textarea rows={5} placeholder="Your Message" required />
        <button type="submit" className={`${styles.btn} ${sent ? styles.sent : ''}`}>
          {sent ? '✓ Message Sent!' : 'Send Message ✉'}
        </button>
      </form>
      <div className={styles.social}>
        <a href="#" aria-label="GitHub">🐙 GitHub</a>
        <a href="#" aria-label="LinkedIn">💼 LinkedIn</a>
        <a href="#" aria-label="Twitter">🐦 Twitter</a>
      </div>
    </section>
  )
}
