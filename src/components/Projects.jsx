import styles from './Projects.module.css'

const featured = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce application with product management, cart, authentication, and Stripe payments. Built with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    code: '#', live: '#', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Real-time data visualization platform with interactive charts, filters, and export features. Connected to a live REST API.',
    tags: ['React', 'D3.js', 'REST API', 'TypeScript'],
    code: '#', live: '#', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
]

const others = [
  { title: 'AI Chat Assistant', desc: 'Conversational AI using Python, FastAPI, and OpenAI API.', tags: ['Python', 'FastAPI', 'OpenAI'], code: '#', live: '#' },
  { title: 'Task Manager App', desc: 'Drag-and-drop task board with real-time sync using Firebase.', tags: ['React', 'Firebase'], code: '#', live: '#' },
  { title: 'Weather App', desc: 'Clean weather app with location detection and 7-day forecast.', tags: ['React', 'OpenWeather API'], code: '#', live: '#' },
  { title: 'Portfolio v1', desc: 'My first portfolio built with vanilla HTML, CSS, and JavaScript.', tags: ['HTML', 'CSS', 'JS'], code: '#', live: '#' },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.bg}>
      <div className="section-wrapper">
        <h2 className="section-title">
          <span className="section-label">04.</span> Projects
        </h2>

        {/* Featured */}
        <div className={styles.featured}>
          {featured.map(({ title, desc, tags, code, live, img }, i) => (
            <div key={title} className={`${styles.featCard} ${i % 2 !== 0 ? styles.reverse : ''}`}>
              <a href={live} className={styles.imgLink}>
                <img src={img} alt={title} />
                <div className={styles.imgOverlay} />
              </a>
              <div className={styles.featContent}>
                <p className={styles.featLabel}>Featured Project</p>
                <h3 className={styles.featTitle}>{title}</h3>
                <div className={styles.featDesc}><p>{desc}</p></div>
                <ul className={styles.featTags}>
                  {tags.map(t => <li key={t}>{t}</li>)}
                </ul>
                <div className={styles.featLinks}>
                  <a href={code} aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href={live} aria-label="Live">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <h3 className={styles.otherTitle}>Other Noteworthy Projects</h3>
        <div className={styles.othersGrid}>
          {others.map(({ title, desc, tags, code, live }) => (
            <div key={title} className={styles.otherCard}>
              <div className={styles.otherTop}>
                <span className={styles.folderIcon}>📁</span>
                <div className={styles.otherLinks}>
                  <a href={code}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a href={live}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>
              <h4 className={styles.otherCardTitle}>{title}</h4>
              <p className={styles.otherDesc}>{desc}</p>
              <ul className={styles.otherTags}>
                {tags.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
