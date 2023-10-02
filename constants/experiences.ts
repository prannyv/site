import { Experience } from '@/types/types';

import tdLogo from '@/public/img/logos/td.png';
import uoftLogo from '@/public/img/logos/uoft.png';
import stealthLogo from '@/public/img/logos/stealth.png';
import uwdscLogo from '@/public/img/logos/uwdsc.png';

export const EXPERIENCES: Experience[] = [
  {
    id: 'td',
    title: 'Systems & Software Developer Intern',
    company: 'Government of Ontario',
    location: 'Toronto, ON',
    date: 'May 2023 - Aug 2023',
    logo: tdLogo,
    description: [
      {
        lg: "Modernized coroner databases in SQL and Microsoft Access by streamlining data retrieval and reducing unncessary computation, resulting in a 22% decrease in lookup and report build time.",
        sm: 'Implementing financial analytics software using React.js and Redux in aiding Portfolio Managers',
      },
      {
        lg: 'Developed new website in HTML, CSS, and JavaScript for forensic pathologists to log 1300+ intake cases during my term.',
        sm: 'Building data pipelines and automating client reports using Django, Python, Pandas, and SQL',
      },
      {
        lg: 'Implemented a Tensorflow based machine learning model in Python to identify bias in case narratives, sociodemographic data, scene descriptions, and coroners\' notes with 86% accuracy.',
        sm: 'Building data pipelines and automating client reports using Django, Python, Pandas, and SQL',
      },
      {
        lg: '<span class="font-medium">Technologies Used: </span> &nbsp;Python, SQL, Tensorflow, HTML, CSS, JavaScript',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Django, Python, Pandas, SQL, Redux, Celery, JavaScript, JIRA',
      },
    ],
  },
  {
    id: 'stealth',
    title: 'Full Stack Software Developer',
    company: 'Alibi',
    location: 'Mississauga, ON',
    date: 'Apr 2023 - Aug 2023',
    logo: stealthLogo,
    description: [
      {
        lg: 'Developed front-end components for cross platform mobile application using React Native that accrued 600+ bookings through 8 venues around the GTA',
        sm: 'Reimaging doctor and patient interactions through an innovative data-driven application',
      },
      {
        lg: 'Designed wireframes for user flow in Figma and implemented profile, settings, and booking pages using React Native and Tailwind CSS',
        sm: 'Preparing investor pitches and raising seed funding to expand our product',
      },
      {
        lg: 'Configured one time password verification and account management of 410+ users using Firebase authentication',
        sm: 'Building data pipelines and automating client reports using Django, Python, Pandas, and SQL',
      },
      {
        lg: '<span class="font-medium">Technologies Used: </span> &nbsp;React Native, Tailwind CSS, Firebase Auth, Figma, Cloud Storage, Tailwind CSS, Python, Stripe, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Firebase, Tailwind CSS, Python, Stripe, Figma',
      },
    ],
  },
  {
    id: 'pantry',
    title: 'VP of Projects',
    company: 'Western Computer Science Undergraduate Society',
    location: 'London, ON',
    date: 'Dec 2022 - Present',
    logo: uwdscLogo,
    description: [
      {
        lg: "Leading 3 teams of 4 developers and designers to create various projects for the club: a natural learning computer vision model to track foot traffic, a 2d platformer created with the Unity Engine, and a mock food ordering service.",
        sm: 'Leading a team in revamping the club website, resulting in 10K+ impressions',
      },
      {
        lg: 'Networking with other organizations to make websites for their clubs including Ivey Business School, something, and something',
        sm: 'Networking with organizations in delivering a hackathon and events to 400+ students',
      },
      {
        lg: '<span class="font-medium">Technologies Used:</span> &nbsp;React.js, Node.js, Tensorflow, C++, Unity, Tailwind CSS, Typescript, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> React.js, Next.js, Node.js, Firebase Auth, Realtime Database, Tailwind CSS, Figma',
      },
    ],
  },
  {
    id: 'uoft',
    title: 'VP of Internals',
    company: 'Western Developer Society',
    location: 'London, ON',
    date: 'Aug 2023 - Present',
    logo: uoftLogo,
    description: [
      {
        lg: 'Working with 14 mentors and 80 students to create a mentorship program to allow younger students the opportunity to learn how to break into the tech industry.',
        sm: 'Developed a full stack application integrating AI models into a study with 500+ participants',
      },
      {
        lg: "Planned 6 events throughout the year to improve cohesiveness among the tech community within the club and at Western University as a whole.",
        sm: 'Part of a university-partnered collaboration with OpenAI',
      },
      {
        lg: '<span class="font-medium">Technologies Used: </span> &nbsp;React.js, Node.js, Javascript, Figma',
        sm: '<span class="font-medium">Technologies Used:</span> OpenAI API, React.js, Next.js, Firebase, Tailwind CSS, Figma',
      },
    ],
  },
];
