import styles from './Skills.module.css'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'Python / FastAPI', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'SQL / MongoDB', level: 80 },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'AWS', level: 72 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.bg}>
      <div className="section-wrapper">
        <h2 className="section-title">
          <span className="section-label">02.</span> Skills
        </h2>
        <div className={styles.grid}>
          {categories.map(({ title, skills }) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              {skills.map(({ name, level }) => (
                <div key={name} className={styles.skillRow}>
                  <div className={styles.skillMeta}>
                    <span>{name}</span>
                    <span className={styles.pct}>{level}%</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.fill} style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
