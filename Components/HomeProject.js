import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const HomeProject = ({ currentTheme, project, id }) => {
  const borderRadiusStyle = id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0';

  return (
    <article
      className={styles.projectmain}
      style={{ borderColor: currentTheme.accent, borderRadius: borderRadiusStyle }}
    >
      <div className={styles.projectContent}>
        <div
          className={styles.projectIcon}
          style={{
            color: currentTheme.accent,
            backgroundColor: currentTheme.footerColor,
            borderColor: currentTheme.accent,
          }}
        >
          <Link
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: currentTheme.accent,
              backgroundColor: currentTheme.footerColor,
              borderColor: currentTheme.accent,
            }}
          >
            <FontAwesomeIcon icon={faTelegramPlane} />
          </Link>
        </div>

        <h1 className={styles.projectTitle}>{project.name}</h1>
        <h2 className={styles.projectSubTitle} style={{ color: currentTheme.subtext }}>
          {project.description}
        </h2>

        <Link href="/work" className={styles.cta2} style={{ color: currentTheme.tertiary }}>
          View More
        </Link>
      </div>
    </article>
  );
};

export default HomeProject;
