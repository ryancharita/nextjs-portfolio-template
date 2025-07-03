import styles from '../styles/Work.module.css';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { headings } from '../Constants/userinfo';

export const CarouselItem = ({ children, width, currentTheme }) => (
  <div className={styles.carouselItem} style={{ width, backgroundColor: currentTheme.secondary }}>
    {children}
  </div>
);

const Carousel = ({ children, currentTheme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const [isSmall] = useMediaQuery('(max-width: 1200px)');
  const [isVerySmall] = useMediaQuery('(max-width: 800px)');

  const dividingFactor = isVerySmall ? 1 : isSmall ? 2 : 3;
  const totalChildren = React.Children.count(children);
  const arrayLength = Math.ceil(totalChildren / dividingFactor);
  const indicators = Array.from({ length: arrayLength }, (_, i) => i);

  const updateIndex = (newIndex) => {
    const index = (newIndex + arrayLength) % arrayLength;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [dividingFactor]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, paused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const itemWidth = `${100 / dividingFactor}%`;

  return (
    <div
      {...handlers}
      className={styles.carousel}
      id="blogs"
      style={{ backgroundColor: currentTheme.secondary }}
      data-aos="fade-up"
    >
      <div className={styles.blogHeading}>{headings.blogs}</div>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {React.Children.map(children, (child) => React.cloneElement(child, { width: itemWidth }))}
      </div>
      <div className={styles.indicators}>
        <button onClick={() => updateIndex(activeIndex - 1)}>&lt;</button>
        {indicators.map((index) => (
          <button key={index} className={index === activeIndex ? styles.active : ''} onClick={() => updateIndex(index)}>
            &bull;
          </button>
        ))}
        <button onClick={() => updateIndex(activeIndex + 1)}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
