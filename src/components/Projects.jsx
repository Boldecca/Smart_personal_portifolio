import styles from './Projects.module.css'

const projects = [
  {
    icon: '🛒',
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce app with React, Node.js, and MongoDB. Features auth, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    code: '#', live: '#',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'Real-time data visualization dashboard built with React and D3.js, connected to a REST API.',
    tags: ['React', 'D3.js', 'REST API'],
    code: '#', live: '#',
  },
  {
    icon: '🤖',
    title: 'AI Chat Assistant',
    desc: 'Conversational AI assistant using Python, FastAPI, and OpenAI API with a clean React frontend.',
    tags: ['Python', 'FastAPI', 'OpenAI'],
    code: '#', live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map(({ icon, title, desc, tags, code, live }) => (
          <div key={title} className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className={styles.tags}>
              {tags.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className={styles.links}>
              <a href={code}>⌥ Code</a>
              <a href={live}>↗ Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
