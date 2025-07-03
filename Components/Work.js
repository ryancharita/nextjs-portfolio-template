import styles from '../styles/Work.module.css';
import WorkProject from './WorkProject';
import BlogCard from './BlogCard';
import Carousel, { CarouselItem } from './Carousel';
import Experiences from './Experiences';
import { projects } from '../Constants/projects';
import { custom_blogs, medium_blogs, dev_to } from '../Constants/blogs';
import { useState, useEffect } from 'react';
import { headings, userinfo } from '../Constants/userinfo';

const Work = ({ currentTheme }) => {
  const [blogList, setBlogList] = useState([]);

  // === BLOG SOURCE ===
  useEffect(() => {
    setBlogList(custom_blogs);
  }, []);

  // Medium example:
  // useEffect(() => {
  //   fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${medium_blogs.username}`)
  //     .then(res => res.json())
  //     .then(data => setBlogList(data.items))
  //     .catch(console.error)
  // }, [])

  // Dev.to example:
  // useEffect(() => {
  //   fetch(`https://dev.to/api/articles?username=${dev_to.username}`)
  //     .then(res => res.json())
  //     .then(data => setBlogList(data))
  //     .catch(console.error)
  // }, [])

  const renderBlogs = () => {
    if (!userinfo.blogs?.visible || !blogList?.length) return null;

    return (
      <div style={{ backgroundColor: currentTheme.secondary }}>
        <Carousel currentTheme={currentTheme}>
          {blogList.slice(0, 6).map((blog, key) => (
            <CarouselItem key={blog.link || blog.url || key} currentTheme={currentTheme}>
              <BlogCard blog={blog} currentTheme={currentTheme} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.workHeading}>{headings.workMainPage}</div>
      <div className={styles.workmain} style={{ color: currentTheme.subtext }}>
        {projects.map((project, key) => (
          <div key={project.id || key} data-aos="fade-up">
            <WorkProject currentTheme={currentTheme} project={project} id={key} />
          </div>
        ))}
      </div>
      aqweqwe
      {userinfo.experience?.visible && <Experiences currentTheme={currentTheme} />}
      {renderBlogs()}
    </div>
  );
};

export default Work;
