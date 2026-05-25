import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed & Built by <span>Rebecca Muteteri</span></p>
      <p className={styles.sub}>© 2024 · All rights reserved</p>
    </footer>
  )
}
