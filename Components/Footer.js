import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo';
import Link from 'next/link';

const Footer = ({ currentTheme }) => {
  return (
    <footer
      className={styles.footermain}
      style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}
    >
      <div className={styles.footertable}>
        <div>
          <Link href="/" passHref>
            <a>
              <h2 className={styles.footerlogo}>{userinfo.logoText}</h2>
            </a>
          </Link>
        </div>

        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials?.map((social, index) => (
            <li key={index}>
              <Link href={social.link} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {social.type}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Link href={`mailto:${userinfo.contact?.email}`} passHref>
              <a>Mail</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li className={styles.listHeading}>Pages</li>
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#about" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/work" passHref>
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      <hr
        style={{
          height: '1px',
          backgroundColor: currentTheme.subtext,
          border: 'none',
          opacity: 0.5,
        }}
      />

      <h2 className={styles.footercontent}>Template by Asavari Ambavane</h2>
    </footer>
  );
};

export default Footer;
