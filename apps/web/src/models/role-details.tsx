import moment from 'moment';
export interface IProject {
  title: string;
  company: string;
  role: string;
  techUsed: string;
  description: string;
  contributions: string;
}

export const roleDetails = [
  {
    index: 0,
    title: 'Lead Software Engineer',
    tagLine:
      'Lead Software Engineer with ' + getExperience() + ' years experience',
    skills: [
      'JavaScript',
      'Angular',
      'React',
      'NodeJS',
      'SCSS',
      'HTML',
      'PHP',
      'Python',
    ],
    intro:
      'Lead Software Engineer with experience in building the pixel-perfect, beautiful, and robust user interface for products which is used by millions of people around the world every day.',
  },
  {
    index: 1,
    title: 'Team Lead',
    tagLine: 'Team Lead with ' + getExperience() + ' years experience',
    skills: [
      'Agile',
      'Scrum',
      'NodeJS',
      'JavaScript',
      'Angular',
      'React',
      'PHP',
      'Python',
      'CI/CD',
      'UI/UX Design',
    ],
    intro:
      'Vast experience in managing a team with up to 15 team members. By believing in “Be the change you wish to see in the world.” – MKG, I always strive to lead as an example, this approach has helped me to build and nurture teams to perform with great efficiency',
  },
  {
    index: 2,
    title: 'Full-Stack Developer',
    tagLine:
      'Full-Stack Developer with ' + getExperience() + ' years experience',
    skills: [
      'NodeJS',
      'JavaScript',
      'Angular',
      'React',
      'Python',
      'PHP',
      'CI/CD',
      'REST/GRAPHQL',
      'SQL/No SQL',
      'UI/UX Design',
    ],
    intro:
      'Stitching kickass functionalities together and create world-class products is my passion. I love the logic and structure of coding, always look to write elegant and efficient code no matter which programming language it is.',
  },
  {
    index: 3,
    title: 'Technical Project Manager',
    tagLine:
      'Technical Project Manager with ' + getExperience() + ' years experience',
    skills: [
      'Agile',
      'Scrum',
      'NodeJS',
      'JavaScript',
      'Angular',
      'React',
      'Python',
      'UI/UX Design',
      'Resource Management',
      'Release Management',
    ],
    intro:
      'As a manager I am focus on building multi-functional efficient teams and increase customer satisfaction through the process. People who know me say I am "Jack of all trades". However, I feel I know only enough to find, analyze and comprehend things that I do not know.',
  },
  {
    index: 4,
    title: 'Tech Consultant',
    tagLine: 'Tech Consultant with ' + getExperience() + ' years experience',
    skills: [
      'Project Management',
      'Product Management',
      'UI/UX Design',
      'Node',
      'Python',
      'PHP',
      'React',
      'Angular',
      'JavaScript',
      'Agile',
      'DevOps',
    ],
    intro:
      'People who know me say I am "Jack of all trades". However, I feel I know only enough to find, analyze and comprehend things that I do not know. I enjoy taking complex problems and find simple but beautiful solutions for them. Proven experience in guiding tech products to perform to their best.',
  },
  {
    index: 5,
    title: 'Freelancer',
    tagLine:
      'Tech Consultant with ' + (3 + getExperience()) + ' years experience',
    skills: [
      'Project Management',
      'Product Management',
      'UI/UX Design',
      'Node',
      'Python',
      'PHP',
      'React',
      'Angular',
      'JavaScript',
      'Agile',
      'DevOps',
    ],
    freelance: true,
    intro:
      'People who know me say I am "Jack of all trades". However, I feel I know only enough to find, analyze and comprehend things that I do not know. I enjoy taking complex problems and find simple but beautiful solutions for them. Proven experience in guiding tech products to perform to their best.',
  },
];

export const workExperience = [
  {
    title: 'Lead Software Engineer',
    company: 'Practo Technologies Private Limited',
    period: ' Jun 2022 - Aug 2022',
    roles: [
      {
        title: 'Lead Software Engineer',
        company: 'Practo Technologies Private Limited',
        period: ' Jun 2022 - Aug 2022',
      },
    ],
    contributions: [
      'Contributions to overall product roadmap, increase engagement with by optimizing User Experience.',
      'Design process for various development activites and educate it to team.',
      'Produce high quality code and mentor team members to achive better coding standards.',
      'Help team members in personal goals and Managers to meet their targets.',
    ],
    projects: 'Practo Care Surgeries, Ray',
    projectDetails: [
      {
        title: 'Practo.com',
        company: 'Practo',
        role: 'Lead Software Engineer',
        techUsed: 'React, TypeScript, Node, GraphQL',
        description:
          'Practo is an aggregator to connect with India’s top doctors via video consultation, get digital prescriptions, order medicines, book doctor appointments & lab tests. It serves 300 Million users every year and help 100k Doctors around 20+ Countries to offer services directly from phone',
        contributions:
          'I lead a bunch of UI experts to manage, mentor, motivate them.',
      },
    ],
  },
  {
    title: 'Technical Project Manager',
    company: 'Reckonsys Tech Labs Private Limited',
    period: ' Mar 2022 - Present',
    roles: [
      {
        title: 'Technical Project Manager',
        company: 'Reckonsys Tech Labs Private Limited',
        period: ' Mar 2022 - Jun 2022',
      },
      {
        title: 'Lead UI Developer',
        company: 'Reckonsys Tech Labs Private Limited',
        period: ' Mar 2017 - Mar 2022',
      },
    ],
    contributions: [
      'Oversee team responsible for design, development & deployment of SaaS platforms.',
      'Design UI architecture to develop optimized frontend code.',
      'Collaborate with client to design UX and develop intriguing  UI interfaces.',
      'Motivate, encourage the team to deliver lean and robust applications on time.',
      'Deliver applications to clients under a given time frame and help them to gain more familiarity with the system.',
    ],
    projects:
      'Trust Your Supplier, Lenovo LanSchool, Lenovo Vantage, TransportSimple, Vndly, Kredily, IT People',
    // projectDetails: [
    //   {
    //     title: 'Trust Your Supplier',
    //     company: 'Chainyard',
    //     role: 'Team Lead',
    //     techUsed: 'React, TypeScript, MongoDb, Node',
    //     description:
    //       'Trust Your Supplier is the window to the information you need for centralized planning & supplier oversight',
    //     contributions:
    //       'i am helping the team in creating some of the beautiful and snappy user interfaces, also build the Services, librarys used across multiple platforms offered. Create / Integrate services that interacted with various service providers. Suggest and create POCs, also manage a team of 5 developers.',
    //   },
    //   {
    //     title: 'Lenovo LanSchool',
    //     company: 'Lenovo Software',
    //     role: 'Individual Contributor',
    //     techUsed: 'Angular 12, Nx, Nightwatch, NodeJS, Jenkins',
    //     description:
    //       'LanSchool is a Classroom Management & Guidance Web Platform. Some of the features are Communication and Screen Sharing, Limit web, Blank screen, Thumbnail monitoring, Messaging, Etc',
    //     contributions:
    //       'I was involved in building microservices and reusable components, libraries for the platform using TDD. Also, work with UX designers to optimize user interactions. In addition to them, I work on various POCs for the platform and constantly mentoring juniors.',
    //   },
    // ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'HyHop Mobility Technologies Private Limited',
    period: 'Aug 2016 - Feb 2017',
    contributions: [
      'Manage design, development & deployment of HyHop Cabs App, Websites.',
      'Lead a multi-discipline & multi-cultural team of 10 members.',
      'Design system architecture, develop backend APIs and web systems to support transactions from various clients.',
      'Write code for multiple Android apps, websites used by customers, operations.',
      'Integrate secure payment gateway and other 3rd party APIs.',
    ],
    projects:
      'HyHop User App, HyHop Diver App, HyHop Operations Website, HyHop Public Website, Wedelicious',
  },
  {
    title: 'Software Engineer',
    company: 'Ness Technologies Private Limited',
    period: 'Jan 2015 – Jul 2016',
    contributions: [
      'Create & implement methods to increase the efficiency and productivity of the consumer marketing email delivery team.',
      'Collaborate with offshore designers and develop the best UI architecture for various well-known content delivery websites.',
      'Design and develop one-off transactional pages across e-commerce portals and perform A/B testing results.',
      'Follow the newest trends and technologies across the world and provide solutions to problems in existing system.',
    ],
    projects:
      'Readers Digest website/CMS, Taste of Home website/CMS, Family Handyman website/CMS, Newsletter, Saleforce',
  },
  {
    title: 'PHP Developer',
    company: 'Rossitek Software Solutions Private Limited',
    period: 'Jan 2014 - Dec 2014',
    contributions: [
      'Interact with clients across the world to understand requirements and develop web and app systems.',
      'Create responsive websites for various clients.',
      'Discuss and develop REST APIs for Android, IOS apps to consume.',
    ],
    projects:
      'FDSee, Sivance, Soon Seng Huat, Ficep Approved, APESB, Book Kingdom, Mavego',
  },
  {
    hidden: [0, 1, 2],
    title: 'Tech Consultant',
    company: 'Freelance',
    period: 'Oct 2012 - Aug 2015',
    contributions: [
      'Brand development, design & code websites for numerous clients all over the world.',
      'Create responsive websites for various clients.',
      'Discuss and develop REST APIs for Android, IOS apps to consume.',
    ],
    projects: 'Fantasy Us, Yepshow, Being in christ, MK Fairmont',
  },
];

export const eductation = [
  {
    title: "Master's in Computer Application",
    university: 'Visvesvaraya Technological University',
    college: 'Malnad College of Engineering, Hassan',
    period: 'Sep 2011 – Apr 2014',
    percentage: '76%',
  },
  {
    title: "Bachelor's in Computer Application",
    university: 'Karnatak University',
    college: 'Global College of BBA & BCA, Hubli',
    period: 'Aug 2008 – May 2011',
    percentage: '64%',
  },
];

export const achivements = [
  'Have visited all 4 corners of the country on a motorcycle.',
  'Teach under-privileged kids computer basics every year.',
  'Financially Aid education of 2 kids every year.',
  'Represent District, School, College in various sports, competition and won prices.',
  'Appreciation certificates while working as a software developer.',
];

export const availablity = [
  'Monday, Friday, Saturday, Sunday - 12AM to 11PM, 23 Hours',
  'Tuesday, Wednesday, Thursday - 12AM to 2PM, 14 Hours',
];

export function getExperience() {
  const startDate = moment();
  startDate.year(2014);
  startDate.month(0);
  startDate.date(6);
  const today = moment();
  const years = today.diff(startDate, 'year');
  const months = today.diff(startDate, 'month');
  const extraMonths = months % 12;
  return extraMonths > 0 ? years + (months % 12) / 10 : years;
}
