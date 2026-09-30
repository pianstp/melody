import { useState } from 'react';
import styles from './Skills.module.css';

const categories = ['All', 'Core', 'Frameworks', 'Tools', 'Other'];

const skills = [
  // Core
  { name: 'JavaScript (ES6+)', emoji: '🟨', level: 'Proficient', pct: 88, cat: 'Core' },
  { name: 'HTML5',             emoji: '🧱', level: 'Proficient', pct: 92, cat: 'Core' },
  { name: 'CSS3',              emoji: '🎨', level: 'Proficient', pct: 88, cat: 'Core' },
  // Frameworks
  { name: 'React.js',          emoji: '⚛️',  level: 'Proficient', pct: 85, cat: 'Frameworks' },
  { name: 'SCSS',              emoji: '💅', level: 'Proficient', pct: 82, cat: 'Frameworks' },
  { name: 'Tailwind CSS',      emoji: '🌬️', level: 'Proficient', pct: 80, cat: 'Frameworks' },
  { name: 'CSS Modules',       emoji: '📦', level: 'Proficient', pct: 82, cat: 'Frameworks' },
  { name: 'Bootstrap',         emoji: '🅱️',  level: 'Familiar',  pct: 70, cat: 'Frameworks' },
  // State / APIs
  { name: 'Context API',       emoji: '🔄', level: 'Proficient', pct: 80, cat: 'Frameworks' },
  { name: 'Redux Toolkit',     emoji: '🗂️', level: 'Familiar',  pct: 55, cat: 'Frameworks' },
  { name: 'RESTful APIs',      emoji: '🔌', level: 'Proficient', pct: 82, cat: 'Core' },
  // Tools
  { name: 'Git & GitHub',      emoji: '🐙', level: 'Proficient', pct: 82, cat: 'Tools' },
  { name: 'Figma',             emoji: '🖌️', level: 'Proficient', pct: 75, cat: 'Tools' },
  { name: 'VS Code',           emoji: '💻', level: 'Proficient', pct: 90, cat: 'Tools' },
  // Other
  { name: 'Responsive Design', emoji: '📱', level: 'Proficient', pct: 88, cat: 'Other' },
  { name: 'Accessibility',     emoji: '♿', level: 'Familiar',  pct: 65, cat: 'Other' },
  { name: 'SEO Basics',        emoji: '🔍', level: 'Familiar',  pct: 60, cat: 'Other' },
  { name: 'Jest (basic)',       emoji: '🧪', level: 'Learning',  pct: 45, cat: 'Other' },
];

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.sectionLabel}>What I Know</div>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <p className={styles.sectionDesc}>
            A curated set of technologies I use to build fast, beautiful, and accessible web experiences.
          </p>
        </div>

        {/* Category tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-tab-${cat.toLowerCase()}`}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={styles.skillsGrid} role="tabpanel">
          {filtered.map((skill) => (
            <div key={skill.name} className={styles.skillCard} title={`${skill.name} – ${skill.level}`}>
              <span className={styles.skillEmoji} aria-hidden="true">{skill.emoji}</span>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillLevel}>{skill.level}</div>
              <div className={styles.skillBar} aria-label={`${skill.pct}% proficiency`}>
                <div className={styles.skillFill} style={{ width: `${skill.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
