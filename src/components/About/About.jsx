import styles from './About.module.css';

const values = [
  {
    icon: '🎨',
    title: 'Pixel-Perfect UI',
    desc: 'I translate Figma designs to code with meticulous attention to detail.',
  },
  {
    icon: '⚡',
    title: 'Performance First',
    desc: 'I care about Core Web Vitals and fast, optimized experiences.',
  },
  {
    icon: '♿',
    title: 'Accessibility',
    desc: 'I build inclusive interfaces following ARIA and semantic HTML best practices.',
  },
  {
    icon: '🤝',
    title: 'Team Player',
    desc: 'Agile workflows, code reviews, and Git branching are second nature to me.',
  },
];

export default function About() {
  return (
    <section id="about" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left – text */}
          <div>
            <div className={styles.sectionLabel}>About Me</div>
            <h2 className={styles.sectionTitle}>
              Building the web,<br />one component at a time
            </h2>
            <div className={styles.aboutText}>
              <p>
                I'm <span className={styles.aboutHighlight}>Onyebuchi Chukwuemerie Promise</span>, a Frontend Developer 
                based in Lagos, Nigeria, with 1.5+ years of experience building responsive, 
                scalable single-page applications with React.js and modern JavaScript (ES6+).
              </p>
              <p>
                I'm passionate about translating high-fidelity Figma designs into clean, 
                accessible UIs — and integrating RESTful APIs seamlessly in cross-functional 
                Agile teams. I write components that are reusable, readable, and performant.
              </p>
              <p>
                Currently pursuing a{' '}
                <span className={styles.aboutHighlight}>B.Sc. in Telecommunications Science</span>{' '}
                at the University of Ilorin, I bring a technical foundation that informs 
                how I think about web performance and system design.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Lagos, Nigeria</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>onyebuchipromise44@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone</span>
                <span className={styles.infoValue}>+234 904 940 7852</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Education</span>
                <span className={styles.infoValue}>B.Sc. Telecom Science, UNILORIN</span>
              </div>
            </div>
          </div>

          {/* Right – value cards */}
          <div>
            <div className={styles.valuesGrid}>
              {values.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <div className={styles.valueTitle}>{v.title}</div>
                  <div className={styles.valueDesc}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
