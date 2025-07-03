// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/payruler1.png';
import PROJECT2_1 from '../styles/projects/fleet.png';
import PROJECT3_1 from '../styles/projects/fresh1.png';
import PROJECT3_2 from '../styles/projects/fresh2.png';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: 'Payruler', //project name
    description: `The most comprehensive
HRMS and payroll system
in the Philippines`, //project description
    githubLink: '', //github repo link
    projectLink: '', //deployed project link
    tech: ['PHP', 'Node', 'HTMl', 'CSS'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [PROJECT1_1], //list of names of images from above imports.
  },
  {
    name: 'Fleet Management System',
    description:
      'A web-based system designed to manage and monitor taxi fleet operations across Cebu City. The platform provides end-to-end tracking and management of vehicles, drivers, rentals, fuel usage, and operational records — helping streamline daily logistics for fleet operators.',
    githubLink: '/',
    projectLink: '/',
    tech: ['Node.js', 'Express.js', 'PostgresSQL', 'GraphQl', 'React.js', 'Ant Design', 'Tailwind CSS'],
    photo: [PROJECT2_1],
  },
  {
    name: 'Fresh Clinics',
    description:
      'Fresh Clinics is on a mission to empower cosmetic nurses and clinic owners to change their lives. We do this by supporting their cosmetic clinics to start, grow, and flourish.',
    githubLink: '/',
    projectLink: 'https://app.freshclinics.com.au/',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Vue.js', 'Tailwind CSS', 'Big Query', 'Swift'],
    photo: [PROJECT3_1, PROJECT3_2],
  },
];
