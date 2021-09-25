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
    title: 'Lead UI Developer',
    tagLine: 'Lead UI Developer with ' + getExperience() + ' experience',
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
      'Frontend developer with experience in building the pixel-perfect, beautiful, and robust user interface for products which is used by millions of people around the world every day.',
  },
  {
    index: 1,
    title: 'Team Lead',
    tagLine: 'Team Lead with ' + getExperience() + ' experience',
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
    tagLine: 'Full-Stack Developer with ' + getExperience() + ' experience',
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
      'Technical Project Manager with ' + getExperience() + ' experience',
    skills: [
      'Agile',
      'Scrum',
      'Lean',
      'PMI ACP',
      'Resource Management',
      'Risk Management',
      'Delivery Management',
    ],
    intro:
      'Professional focused on working with multi-functional teams and increase customer satisfaction through the process. Proven experience in shipping world-class products on time.',
  },
  {
    index: 4,
    title: 'Tech Consultant',
    tagLine: 'Tech Consultant with ' + getExperience() + ' experience',
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
];

export const workExperience = [
  {
    title: 'Lead UI Developer',
    company: 'Reckonsys Tech Labs Pvt Ltd',
    period: ' Mar 2017 - Present',
    contributions: [
      'Oversee team responsible for design, development & deployment of SaaS platforms.',
      'Design UI architecture to develop optimized frontend code.',
      'Collaborate with client to design UX and develop intriguing  UI interfaces.',
      'Motivate, encourage the team to deliver lean and robust applications on time.',
      'Deliver applications to clients under a given time frame and help them to gain more familiarity with the system.',
    ],
    projects: 'TransportSimple, Vndly, Kredily, IT People',
    projectDetails: [
      {
        title: 'Lenovo LanSchool',
        company: 'Lenovo Software',
        role: 'Individual Contributor',
        techUsed: 'Angular 12, Nx, Nightwatch, NodeJS, Jenkins',
        description:
          'LanSchool is a Classroom Management & Guidance Web Platform. Some of the features are Communication and Screen Sharing, Limit web, Blank screen, Thumbnail monitoring, Messaging, Etc',
        contributions:
          'I am involved in building microservices and reusable components, libraries for the platform using TDD. Also, work with UX designers to optimize user interactions. In addition to them, I work on various POCs for the platform and constantly mentoring juniors.',
      },
      {
        title: 'Lenovo Vantage',
        company: 'Lenovo Software',
        role: 'Lead UI Developer',
        techUsed: 'Angular 11, NodeJS, UWP, Shell',
        description:
          'Lenovo Vantage is a UWP application that helps users to manage their device settings, improve performance, and enhance their PC - no matter how you use it.',
        contributions:
          'I was in charge of creating some of the beautiful and snappy user interfaces, also build the NodeJS library which interacted with the machine (Shell) to retrieve and update settings. Create / Integrate services that interacted with various service providers which are used in computers. Suggest and create POCs, also manage a team of 5 developers.',
      },
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'HyHop Mobility Technologies Pvt Ltd',
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
    company: 'Ness Technologies Pvt Ltd',
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
    company: 'Rossitek Software Solutions Pvt Ltd',
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

export function getExperience() {
  const startDate = '2014-01-06';
  const diff = Math.floor(new Date().getTime() - new Date(startDate).getTime());
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);
  const monthsInAddition = Math.round((days - years * 365.25) / 30.41);
  return years + '.' + monthsInAddition + ' years';
}
