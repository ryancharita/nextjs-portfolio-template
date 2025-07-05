//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const userinfo = {
  logoText: 'Ryan Joshua Charita', //This text is visible on your navbar and footer like your logo.
  contact: {
    email: 'ryanjoshuacharita@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: '9762196628', //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: '+63', //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    { type: 'github', link: 'https://github.com/ryancharita', icon: faGithubAlt },
    { type: 'linkedin', link: 'https://www.linkedin.com/in/rj-charita-6b4806342/', icon: faLinkedinIn },
    // { type: 'medium', link: '', icon: faMediumM },
  ],
  greeting: {
    //this text goes on your landing page
    title: 'Hey there, I am Ryan.',
    subtitle: `I’m a full stack developer with over 6 years of experience building scalable, maintainable web applications. My expertise spans both frontend and backend technologies, including React, Next.js, Vue.js, Node.js, MongoDB, and PostgreSQL.
I focus on writing clean, efficient code and developing systems that are reliable and user-friendly. Whether building new features or improving existing architecture, I bring a detail-oriented, problem-solving mindset to every project I work on.`,
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: 'Frontend', // eg.frontend, backend, devops etc
      skills: ['React', 'Next.js,', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'], //eg. react, html, python etc.
    },
    {
      category: 'Backend',
      skills: [
        'Node.js (Express, NestJS)',
        ' RESTful APIs',
        'WebSockets',
        ' MongoDB',
        'PostgreSQL',
        'Supabase',
        'Prisma',
        'Drizzle ORM',
      ],
    },
    {
      category: 'Dev Tools & Deployment',
      skills: ['Docker', 'Git', 'Vercel'],
    },
    {
      category: 'Dev Tools & Deployment',
      skills: ['Jest', 'React Testing Library', 'ESLint', 'Prettier'],
    },
    // {
    //   category: 'Development Workflow',
    //   skills: ['Agile/Scrum', 'CI/CD basics', 'GitHub/GitLab', 'Code Reviews', 'Feature Branching'],
    // },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content: `I’m a full stack developer with over 6 years of experience building modern web applications that are performant, scalable, and user-friendly. I enjoy working across the entire stack — from crafting responsive user interfaces with React, Next.js, and Vue.js, to designing robust APIs and databases using Node.js, PostgreSQL, and MongoDB.

I’ve worked on a wide range of projects, from startup MVPs to production-ready platforms, always with a focus on clean code, maintainability, and delivering real value. I’m also experienced with tools like Docker, Git, and Vercel, which help streamline development and deployment workflows.

Whether collaborating with teams or working independently, I bring strong attention to detail, a proactive mindset, and a passion for solving problems through code.`,
    resume: 'https://drive.google.com/file/d/1juN9vKy3MKcqrvlA5iiVAi37Y7-q0E6f/view?usp=sharing', //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: 'April - Oct 2019', //timespan
        title: 'Bachelor of Science in Computer Science', //eg. BTech in Compuster Engineering
        organization: 'Northwest Samar State University', //eg. VJTI, Mumbai
        // description: 'Lorem ipsum dolor sit amet consectetur', //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      // {
      //   time: 'May - Oct 2020',
      //   title: 'Degree name',
      //   organization: 'School Name',
      //   description: 'Lorem ipsum dolor sit amet consectetur',
      // },
      // {
      //   time: 'May - Oct 2020',
      //   title: 'Degree name',
      //   organization: 'School Name',
      //   description: 'Lorem ipsum dolor sit amet consectetur',
      // },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: 'Digital Transformation',
        companylogo: '/dx.png',
        position: 'Junior Front-end Developer',
        time: 'August 2019 - May 2021',
        description: `As part of my onboarding and early-career development, I was outsourced to a partner company to gain real-world experience and immerse myself in modern development practices and team culture. During this period, I focused on building and improving frontend components for web applications using industry-standard tools.`,
      },
      {
        company: 'Payruler', //company name eg.Microsoft
        companylogo: '/payruler.png', //companylogo
        position: 'Junior Software Engineer', //post you held eg.Senior SDE
        time: 'August 2019 - May 2021', //timespan
        description: `As part of the core development team, I contributed to the initial build of the company’s Version 2 platform — a complete overhaul focused on performance, scalability, and improved user experience. I worked closely with senior engineers on both frontend and backend tasks, implementing new features, fixing bugs, and refactoring legacy code.`,
      },
      {
        company: 'Digital Transformation',
        companylogo: '/dx.png',
        position: 'Mid-level Front-end Developer Lead',
        time: 'May 2021 - May 2023',
        description: `As a Mid-Level Front-End Developer Lead, I was entrusted with leading the development team at our newly established office. My responsibilities included mentoring junior developers, facilitating onboarding processes, and establishing technical workflows. I also represented the team on an international project, where I collaborated with cross-functional teams to deliver high-quality frontend solutions.`,
      },
      {
        company: 'Digital Transformation',
        companylogo: '/dx.png',
        position: 'Senior Front-End Developer',
        time: 'May 2023 - October 2024',
        description: `I played a dual role of technical contributor and team lead. I was responsible for training and mentoring new hires and interns, overseeing their progress, and ensuring adherence to best practices in frontend development. I also acted as a key liaison between the development team and upper management, ensuring that technical concerns, blockers, and feedback were clearly communicated and addressed.

In addition to my leadership duties, I was outsourced to an international project, where I worked with global teams to deliver scalable, user-centric frontend solutions.`,
      },
      {
        company: 'Fresh Clinics',
        companylogo: 'fc.png',
        position: 'Mid-level Software Engineer',
        time: 'May 2021 - Jul 2025',
        description: `As a Mid-Level Software Engineer, I was responsible for building and maintaining the company’s web application and mobile API. I worked closely with cross-functional teams to deliver scalable backend services and responsive front-end features that supported both web and mobile platforms.`,
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: false,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: 'Work',
  workMainPage: 'Projects',
  capabilities: 'Capabilities',
  about: 'About Me',
  education: 'Education',
  experience: 'Experiences',
  blogs: 'I write!',
  contact: 'Contact Me',
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: 'My work',
  workCTA: 'View All',
  capabCTA: 'Get in Touch',
  educationCTA: 'About Me',
  resumeCTA: 'Resume',
  submitBTN: 'Submit',
};
