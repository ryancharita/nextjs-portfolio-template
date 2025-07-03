import { Switch, useMediaQuery } from '@chakra-ui/react';
import styles from '../styles/NavbarFooter.module.css';
import Navlinks from './Navlinks';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { userinfo } from '../Constants/userinfo';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [drawerVisible] = useMediaQuery('(max-width: 950px)');
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={styles.navbar}
      style={{
        backgroundColor: currentTheme.secondary,
        boxShadow: currentTheme.boxShadow,
        position: sticky ? 'fixed' : 'static',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'baseline',
          marginBottom: drawerVisible ? '10px' : '0',
        }}
      >
        <Link href="/" passHref>
          <a>
            <h2 className={styles.logo}>{userinfo.logoText}</h2>
          </a>
        </Link>

        {!drawerVisible && (
          <div style={{ display: 'flex' }}>
            <Navlinks />
          </div>
        )}

        <Switch
          id="dark-mode"
          colorScheme="purple"
          size={drawerVisible ? 'md' : 'lg'}
          isChecked={currentTheme.name === 'dark'}
          onChange={toggleTheme}
        />
      </div>

      {drawerVisible && (
        <>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
            <Navlinks />
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
