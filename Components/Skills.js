import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { userinfo, ctaTexts, headings } from '../Constants/userinfo';

const Skills = ({ currentTheme }) => {
  return (
    <>
      <h1 className={styles.workheading} data-aos="fade-up">
        {headings.capabilities}
      </h1>

      <div className={styles.skills} style={{ color: currentTheme.subtext }}>
        {userinfo.capabilities?.map((value, key1) => (
          <div key={key1}>
            <ul className={styles.skillList} data-aos="fade-up">
              <h1 className={styles.skillHeading} style={{ color: currentTheme.text }}>
                {value.category}
              </h1>
              {value.skills?.map((skill, key2) => (
                <h2 key={key2}>{skill}</h2>
              ))}
            </ul>
            {key1 < userinfo.capabilities.length - 1 && (
              <div className={styles.line} style={{ backgroundColor: currentTheme.subtext }} data-aos="fade-up" />
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <Link
          href="/contact"
          className={styles.cta3}
          style={{
            background: 'transparent',
            border: `2px solid ${currentTheme.accent}`,
          }}
        >
          {ctaTexts.capabCTA} <span>&gt;</span>
        </Link>
      </div>
    </>
  );
};

export default Skills;
