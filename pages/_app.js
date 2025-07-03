import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../ThemeConfig';
import { lightTheme, darkTheme } from '../Constants/theme';
import Layout from '../Layout';
import { ChakraProvider } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = typeof window !== 'undefined' && localStorage.getItem('theme');
    setTheme(savedTheme === 'dark' ? 'dark' : 'light');
  }, []);

  // Persist theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ChakraProvider>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Layout toggleTheme={toggleTheme} currentTheme={currentTheme}>
          <Component {...pageProps} currentTheme={currentTheme} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
