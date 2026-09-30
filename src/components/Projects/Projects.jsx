import styles from './Projects.module.css';

const projects = [
  {
    icon: '🍗',
    banner: 'linear-gradient(135deg, #f9a85d, #e05d2f)',
    title: 'Chicken Foods',
    desc: 'Responsive food ordering demo for a client with a clean menu layout, product showcase, and smooth ordering flow.',
    techs: ['React.js', 'Tailwind CSS'],
    github: 'https://github.com/pianstp',
    live: 'https://onyebuchipromise.netlify.app',
  },
  {
    icon: '💰',
    banner: 'linear-gradient(135deg, #6fbf6f, #2d7d3a)',
    title: 'Expense Tracker App',
    desc: 'Vanilla JS expense manager with add/edit/delete operations, categorization, real-time balance, and localStorage persistence.',
    techs: ['JavaScript', 'DOM', 'localStorage'],
    github: 'https://github.com/pianstp',
    live: 'https://onyebuchipromise.netlify.app',
  },
  {
    icon: '🌤️',
    banner: 'linear-gradient(135deg, #fcd97b, #d4973a)',
    title: 'React Weather App',
    desc: 'Search any city for real-time weather data — temperature, humidity, wind speed and conditions — powered by the OpenWeather API.',
    techs: ['React.js', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/pianstp',
    live: 'https://onyebuchipromise.netlify.app',
  },
  {
    icon: '📚',
    banner: 'linear-gradient(135deg, #c07de8, #8e44ad)',
    title: 'Promise Sync',
    desc: 'JAMB exam prep platform with practice questions, topic filters, and a fully responsive interface for Nigerian students.',
    techs: ['React.js', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/pianstp',
    live: 'https://onyebuchipromise.netlify.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>My Work</div>
          <h2 className={styles.sectionTitle}>Key Projects</h2>
          <p className={styles.sectionDesc}>
            A selection of projects that showcase my ability to ship clean, functional, and visually polished web apps.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((proj) => (
            <article key={proj.title} className={styles.card}>
              {/* Colorful banner */}
              <div className={styles.banner} style={{ background: proj.banner }} aria-hidden="true">
                <span className={styles.bannerIcon}>{proj.icon}</span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.desc}</p>

                <div className={styles.techs}>
                  {proj.techs.map((t) => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    aria-label={`GitHub repository for ${proj.title}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                    aria-label={`Live demo for ${proj.title}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
