import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HomeProject from './HomeProject';
import Skills from './Skills';
import { projects } from '../Constants/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { userinfo, ctaTexts, headings } from '../Constants/userinfo';
import Education from './Education';

const HomePage = ({ currentTheme }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
        <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
        <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>
          {userinfo.greeting.subtitle}
        </h2>
        <Link href="#work" passHref>
          <a
            className={styles.cta1}
            style={{
              backgroundColor: currentTheme.accent,
              color: currentTheme.contrastText,
              boxShadow: currentTheme.boxShadow,
            }}
          >
            {ctaTexts.landingCTA}
          </a>
        </Link>
      </section>

      {/* Work/Projects Section */}
      <section className={styles.homeWorkSection} id="work">
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.workHomePage}
        </h1>
        {projects.slice(0, 3).map((project, key) => (
          <div key={key} data-aos="fade-up">
            <HomeProject currentTheme={currentTheme} project={project} id={key} />
          </div>
        ))}
        <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
          <Link href="/work" passHref>
            <a
              className={styles.cta3}
              style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText }}
            >
              {ctaTexts.workCTA} <span>&gt;</span>
            </a>
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
        <Skills currentTheme={currentTheme} />
      </section>

      {/* Education Section (conditional) */}
      {userinfo.education?.visible && <Education currentTheme={currentTheme} />}

      {/* About Section */}
      <section id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
        <h1 className={styles.workheading} data-aos="fade-up">
          {headings.about}
        </h1>
        <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">
          {userinfo.about.content}
        </p>
        <div
          data-aos="fade-up"
          style={{
            textAlign: 'center',
            padding: '1rem 0',
            margin: '1rem 0',
            display: 'flex',
            justifyContent: 'center',
            color: currentTheme.subtext,
          }}
        >
          <Link href={userinfo.about.resume} passHref>
            <a
              className={styles.cta4}
              style={{
                background: 'transparent',
                border: `2px solid ${currentTheme.subtext}`,
                display: 'flex',
                alignItems: 'center',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
