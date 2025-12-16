import type { Experience } from '@customTypes/experience';

export const experience: Experience[] = [
  {
    title: 'Frontend Developer',
    company: 'NTT DATA',
    companyLink: 'https://www.nttdata.com/global/en/',
    date: 'September 2025 - Present',
    description: [
      'Developed complex business features and application logic, ensuring alignment with product requirements.',
      'Used RxJS and reactive programming to manage asynchronous data flows, state handling, and component communication.',
      'Integrated with REST APIs via Swagger / OpenAPI within a microservices-based architecture.',
      'Implemented authentication and role-based access control to secure routes, views, and application functionality.',
      'Applied clean code practices and strict TypeScript.',
      'Worked closely with backend teams in an agile environment, contributing to API design discussions.',
    ],
  },

  {
    title: 'FullStack Developer',
    company: 'Magical Analytics',
    companyLink: 'https://magical.es/',
    date: 'June 2024 - September 2025',
    description: [
      'Developed and maintained backend services using Laravel and MySQL to automate and manage data, improving clients internal process speed and reducing manual errors.',
      'Implemented REST APIs and developed custom dashboards for real-time data presentation, incorporating modular and adaptable structures.',
      'Built automated workflows in HubSpot using Node.js, integrating custom logic and managing processes within the CRM ecosystem.',
      'Designed and developed dynamic websites with WordPress, Elementor, and WooCommerce.',
      'Created custom WordPress plugins, tailoring specific functionalities to clients’ needs.',
    ],
  },
];
