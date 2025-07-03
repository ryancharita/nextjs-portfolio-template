import React from 'react';
import styles from '../styles/Home.module.css';
import { userinfo, headings, ctaTexts } from '../Constants/userinfo';
import Link from 'next/link';

const Education = ({ currentTheme }) => {
  const educationList = userinfo.education?.educationList || [];

  return (
    <section className={styles.educationWrapper}>
      <h2 className={styles.workheading} data-aos="fade-up">
        {headings.education}
      </h2>

      <div className={styles.timeline}>
        <ul>
          {educationList.map(({ title, organization, description, time }, idx) => (
            <li data-aos="fade-up" key={idx}>
              <article className={styles.content}>
                <h3 style={{ color: currentTheme.accent }}>{title}</h3>
                <p style={{ color: currentTheme.text }}>{organization}</p>
                <p style={{ color: currentTheme.subtext }}>{description}</p>
              </article>
              <div
                className={styles.time}
                style={{
                  border: `2px solid ${currentTheme.accent}`,
                  color: currentTheme.accent,
                }}
              >
                <h4>{time}</h4>
              </div>
            </li>
          ))}
          <div style={{ clear: 'both' }} />
        </ul>
      </div>

      <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
        <Link
          href="/#about"
          className={styles.cta3}
          style={{
            background: currentTheme.accent,
            color: currentTheme.contrastText,
          }}
        >
          {ctaTexts.educationCTA} <span>&gt;</span>
        </Link>
      </div>
    </section>
  );
};

export default Education;
