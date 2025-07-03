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
          <Link href="/" className={styles.footerlogo}>
            {userinfo.logoText}
          </Link>
        </div>

        <ul>
          <li className={styles.listHeading}>Socials</li>
          {userinfo.socials?.map((social, index) => (
            <li key={index}>
              <Link href={social.link} target="_blank" rel="noopener noreferrer">
                {social.type}
              </Link>
            </li>
          ))}
          <li>
            <Link href={`mailto:${userinfo.contact?.email}`}>Mail</Link>
          </li>
        </ul>

        <ul>
          <li className={styles.listHeading}>Pages</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
