import styles from '../styles/Work.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { HStack, Tag, TagLabel, Tooltip, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const WorkProject = ({ currentTheme, project, id }) => {
  const toast = useToast();
  const [index, setIndex] = useState(0);

  const handleToast = (type) => {
    toast({
      description:
        type === 'github'
          ? 'Sorry, this project has a private repository!'
          : 'Sorry, this project has not been deployed yet!',
      status: 'info',
      isClosable: true,
    });
  };

  const cycleImage = (direction) => {
    const total = project.photo.length;
    setIndex((prev) => (direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => cycleImage('next'),
    onSwipedRight: () => cycleImage('prev'),
  });

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    fontSize: '20px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div className={styles.parentofparentcard} style={{ justifyContent: id % 2 === 0 ? 'flex-start' : 'flex-end' }}>
      <div className={styles.parentcard}>
        <div className={styles.cardtitle}>
          <h1 className={styles.projtitle}>{project.name}</h1>
          <HStack spacing={2}>
            {project.tech.map((tech) => (
              <Tag
                key={tech}
                size="sm"
                borderRadius="md"
                variant="subtle"
                colorScheme={currentTheme.name === 'light' ? 'cyan' : 'purple'}
              >
                <TagLabel>{tech}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </div>

        <div className={styles.imageandsocials}>
          <div
            className={styles.card}
            {...handlers}
            style={{ borderColor: currentTheme.footerColor, position: 'relative' }}
          >
            <Image
              src={project.photo[index]}
              alt={`${project.name} screenshot ${index + 1}`}
              height={300}
              width={500}
              priority={index === 0}
            />
            <button onClick={() => cycleImage('prev')} style={{ ...arrowStyle, left: '10px' }}>
              &lt;
            </button>
            <button onClick={() => cycleImage('next')} style={{ ...arrowStyle, right: '10px' }}>
              &gt;
            </button>
          </div>

          <div>
            {project.githubLink ? (
              <Tooltip label="Github link" placement="right">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                </Link>
              </Tooltip>
            ) : (
              <Tooltip label="Github link" placement="right">
                <div
                  className={styles.socialIcon}
                  onClick={() => handleToast('github')}
                  style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext, cursor: 'pointer' }}
                >
                  <FontAwesomeIcon icon={faGithubAlt} />
                </div>
              </Tooltip>
            )}

            {project.projectLink ? (
              <Tooltip label="Project link" placement="right">
                <Link
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext }}
                >
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </Link>
              </Tooltip>
            ) : (
              <Tooltip label="Project link" placement="right">
                <div
                  className={styles.socialIcon}
                  onClick={() => handleToast('project')}
                  style={{ color: currentTheme.subtext, borderColor: currentTheme.subtext, cursor: 'pointer' }}
                >
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </div>
              </Tooltip>
            )}
          </div>
        </div>

        <div className={styles.cardbottom}>
          <p className={styles.projdescription}>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
