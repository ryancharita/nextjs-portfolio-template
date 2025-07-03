import React from 'react';
import { Box, Avatar } from '@chakra-ui/react';
import styles from '../styles/Work.module.css';
import { userinfo, headings } from '../Constants/userinfo';

const Experiences = ({ currentTheme }) => {
  const experienceList = userinfo.experience?.experienceList || [];

  return (
    <section className={styles.experienceWrapper}>
      <h1 className={styles.workHeading} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        {headings.experience}
      </h1>

      <div className={styles.experienceCardWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        {experienceList.map(({ company, companylogo, position, description, time }, idx) => (
          <article className={styles.experienceCard} key={idx} data-aos="fade-up">
            <Box borderWidth="1px" borderRadius="md" overflow="hidden">
              <div style={{ background: currentTheme.secondary, height: '150px' }}></div>
              <div className={styles.experienceCardContent}>
                <h1>{company}</h1>
                <div className={styles.avatar}>
                  <Avatar size="xl" name={company} src={companylogo} />
                </div>
                <div style={{ position: 'relative', top: '20px' }}>
                  <h2>{position}</h2>
                  <h3>{description}</h3>
                </div>
                <h4 style={{ color: currentTheme.subtext }}>{time}</h4>
              </div>
            </Box>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
