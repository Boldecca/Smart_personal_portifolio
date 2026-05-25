import styles from './Skills.module.css'

const skills = [
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '⚡', name: 'JavaScript' },
  { icon: '⚛️', name: 'React' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🗄️', name: 'SQL' },
  { icon: '🔧', name: 'Git' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🐳', name: 'Docker' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {skills.map(({ icon, name }) => (
          <div key={name} className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
