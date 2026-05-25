import { useState } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Tech Corp',
    role: 'Senior Software Engineer',
    period: 'Jan 2022 – Present',
    points: [
      'Led development of a customer-facing React dashboard used by 50k+ users.',
      'Reduced API response time by 40% through query optimization and caching.',
      'Mentored 3 junior developers and conducted code reviews.',
    ],
  },
  {
    company: 'StartupXYZ',
    role: 'Full-Stack Developer',
    period: 'Jun 2020 – Dec 2021',
    points: [
      'Built and maintained RESTful APIs using Node.js and Express.',
      'Developed reusable React component library adopted across 4 products.',
      'Integrated third-party payment and authentication services.',
    ],
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: 'Jan 2019 – May 2020',
    points: [
      'Delivered 10+ client websites with responsive, accessible designs.',
      'Improved Lighthouse performance scores from ~60 to 95+ on key projects.',
      'Collaborated with designers to implement pixel-perfect UIs.',
    ],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <section id="experience">
      <div className="section-wrapper">
        <h2 className="section-title">
          <span className="section-label">03.</span> Experience
        </h2>
        <div className={styles.layout}>
          <ul className={styles.tabs}>
            {jobs.map((j, i) => (
              <li key={j.company}>
                <button
                  className={`${styles.tab} ${active === i ? styles.activeTab : ''}`}
                  onClick={() => setActive(i)}
                >
                  {j.company}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.panel}>
            <h3 className={styles.role}>
              {job.role} <span className={styles.at}>@ {job.company}</span>
            </h3>
            <p className={styles.period}>{job.period}</p>
            <ul className={styles.points}>
              {job.points.map(p => <li key={p}><span>▹</span>{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
