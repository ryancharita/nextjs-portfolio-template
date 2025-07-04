import styles from '../styles/NavbarFooter.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navlinks = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {links.map(({ label, href }) => {
        const isActive =
          currentPath === href ||
          (label === 'Home' && currentPath.startsWith('/#')) ||
          (href.includes('#') && currentPath.startsWith(href));

        return (
          <div className={styles.navlinks} key={label}>
            <Link
              href={href}
              style={{
                opacity: isActive ? '100%' : '80%',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Navlinks;
