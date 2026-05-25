import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* overlay */}
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="#hero" className={styles.logo}>RM.</a>

          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map((l, i) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                  <span className={styles.num}>0{i + 1}.</span> {l}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" className={styles.resumeBtn} download>Resume</a>
            </li>
          </ul>

          <div className={styles.right}>
            <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme">
              {dark ? '☀️' : '🌙'}
            </button>
            <button
              className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
