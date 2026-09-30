import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'TrueMinds · Remote',
    period: '2024 – 2025 · 3 months',
    bullets: [
      'Collaborated in a cross-functional Agile team of PMs, backend engineers, UI/UX designers and frontend developers.',
      'Translated high-fidelity Figma designs into clean, pixel-perfect, responsive React components.',
      'Integrated RESTful APIs, handling async data flow, loading and error states.',
      'Practised Git branching strategies, pull request workflows and collaborative code reviews.',
    ],
    tags: ['React.js', 'Figma', 'REST APIs', 'Git', 'Agile'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'KPIE Technologies · Lagos, Nigeria',
    period: 'Feb 2025 · 1 month',
    bullets: [
      'Contributed to a 2% increase in team development speed through efficient iteration and component reuse.',
      'Built a full-stack movie app in React.js using the Boonbac API with search and dynamic routing.',
      'Developed the Oxbridge College multi-page web app with semantic HTML5, CSS3 and JavaScript.',
    ],
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Boonbac API'],
  },
  {
    role: 'Frontend Developer – Hackathon',
    company: 'Locafy Team Hackathon · Lagos, Nigeria',
    period: 'Oct 2025',
    bullets: [
      'Built a responsive location-based UI with React.js, Tailwind CSS and CSS Modules under time constraints.',
      'Implemented UI/UX improvements collaboratively using Git/GitHub branching and pull requests.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'CSS Modules', 'GitHub'],
  },
];

const certifications = [
  'Frontend Development Certificate, Incubator Nigeria',
  'Artificial Intelligence Training, ALX Africa',
  'UI/UX & React Intensive Bootcamp, River Bank Training, 2024',
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Career</div>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className={styles.entry}>
              <div className={styles.dot} aria-hidden="true">
                <div className={styles.dotInner} />
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <div className={styles.company}>{exp.company}</div>
                <ul className={styles.bullets} aria-label={`Responsibilities at ${exp.company}`}>
                  {exp.bullets.map((b) => (
                    <li key={b} className={styles.bullet}>{b}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certs */}
        <div className={styles.extraGrid}>
          <div className={styles.extraCard}>
            <div className={styles.extraCardTitle}>Education</div>
            <div className={styles.eduEntry}>
              <div className={styles.eduDeg}>B.Sc. Telecommunications Science</div>
              <div className={styles.eduSch}>University of Ilorin, Kwara State · Jan 2024 – Present</div>
            </div>
          </div>

          <div className={styles.extraCard}>
            <div className={styles.extraCardTitle}>Certifications &amp; Training</div>
            <ul className={styles.certList}>
              {certifications.map((c) => (
                <li key={c} className={styles.certItem}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
