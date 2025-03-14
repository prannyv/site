import { Project } from '@/types/types';

import miso1 from '@/public/img/mockups/miso-1.png';
import miso2 from '@/public/img/mockups/miso-2.png';
import miso3 from '@/public/img/mockups/miso-3.png';
import sightful1 from '@/public/img/mockups/sightful-1.png';
import sightful2 from '@/public/img/mockups/sightful-2.png';
import sightful3 from '@/public/img/mockups/sightful-3.png';
import ivey1 from '@/public/img/mockups/ivey-1.png';
import ivey2 from '@/public/img/mockups/ivey-2.png';
import ivey3 from '@/public/img/mockups/ivey-3.png';
import ivey4 from '@/public/img/mockups/ivey-4.png';
import ivey5 from '@/public/img/mockups/ivey-5.png';
import ivey6 from '@/public/img/mockups/ivey-6.png';
import pantry1 from '@/public/img/mockups/pantry-1.png';
import pantry2 from '@/public/img/mockups/pantry-2.png';
import pantry3 from '@/public/img/mockups/pantry-3.png';
import pantry4 from '@/public/img/mockups/pantry-4.png';
import pantry5 from '@/public/img/mockups/pantry-5.png';
import pantry6 from '@/public/img/mockups/pantry-6.png';
import poke1 from '@/public/img/mockups/mockup1.png';
import poke2 from '@/public/img/mockups/mockup2.png';
import poke3 from '@/public/img/mockups/mockup3.png';
import poke4 from '@/public/img/mockups/poke4.png';


export const PROJECTS: Project[] = [
  {
    id: 'miso',
    title: 'Miso',
    description: 
      'Miso is a language model that is trained on 23000 tweets, messages, and captions to identify whether chat messages are gender discriminatory or toxic. ',
      
    summary: [
      'Miso is a large language model that is trained on 23000 tweets, messages, and captions to identify whether chat messages are gender discriminatory or toxic.',
      'Won Best Hack to Promote Women in STEM at UoftHacks X',
      'The API developed with Python utilizes Cohere\'s Natural Language Processing to create an AI model. A variety of research datasets have been consolidated to train the model on the Cohere platform.',
      'The backend utilizes a REST API deployed with FastAPI and Uvicorn and can be fetched by chat bots on Discord, Teams, Slack, or any other web based chat service',
      'Our Discord Bot demo is created in Node.js using the Discord.js library and the Web Demo utilizes ReactJS and Typescript to display the LLM in a web format.',
      'To create an intentional and intuitive combination of UI & UX, product mockups were crafted using Figma.',
      'Explore the web app, or check out the GitHub repository and Figma designs through the links below.',
    ],
    projectType: 'Web App & API',
    techStack: [
      'React.js',
      'Node.js',
      'Python',
      'Cohere',
      'FastAPI',
      'Uvicorn',
      'Typescript',
      'Figma',
    ],
    developedFor: 'UofTHacks X',
    roles: ['Developer', 'Designer'],
    links: [
      {
        label: 'Explore Miso',
        url: 'https://miso-frontend-only.netlify.app',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/stanleyylin/Miso',
      },
      {
        label: 'Figma Designs',
        url: 'https://www.figma.com/',
        //REPLACE FIGMA
      },
    ],
    mockups: [miso1, miso2, miso3],
  },
  {
    id: 'sightful',
    title: 'Sightful',
    description:
      'A Chrome extension designed to simplify the Youtube experience by flagging all innapropriate or triggering content.',
    summary: [
      'A Chrome extension designed to simplify the Youtube experience by flagging all innapropriate or triggering content.',
      'This extension provides a user friendly experience through its sleek front end developed with React.js and Typescript. Additionally, backend processes including fetching the current tab\'s link, converting the video to text, and generating timestamps for all words spoken are done using the Google Cloud CLI and their Machine Learning Speech to Text API.',
      'After setting up desired flags, users are able to browse Youtube safely with our rating system that appears next to reccomended Youtube videos. While custom flags can be created, users can opt to simply flag inappropriate content that we are continuously updating and moderating.',
      'To create an intentional and intuitive combination of UI & UX, product mockups were crafted using Figma.',
      'Explore the web app, or check out the GitHub repository and Figma designs through the links below.',
    ],
    developedFor: 'Hack the 6ix',
    projectType: 'Web App & Extension',
    techStack: [
      'React.js',
      'Typescript',
      'Node.js',
      'Express.js',
      'Google Cloud CLI',
      'Google Speech-to-Text API',
      'Figma',
    ],
    roles: ['Developer', 'Designer'],
    links: [
      {
        label: 'Explore the App',
        url: 'https://',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/prannyv/sightful',
      },
      {
        label: 'Figma Designs',
        url: 'https://www.figma.com/file/n7DMyWSWLjG22aFPk4TJ2A/sightful?type=design&node-id=0%3A1&mode=design&t=6OsCu8AXxQh0QezR-1',
        //UPDATE FIGMA & mockups
      },
    ],
    mockups: [sightful1, sightful2, sightful3],
  },
  {
    id: 'ivey',
    title: 'Ivey Sustainability',
    description:
      "A webpage created for the sustainability branch of Ivey to display events and board members.",
    summary: [
      'A webpage created for the sustainability branch of Ivey to display events and board members.',
      'Created as a part of the projects team at Western Developers Society, we look for clients across campus who need websites and do our best to fullfil their needs.',
      "Our team used Figma and Trello to design the original mockup and manage tasks, and we used Github to maintain adequate version control throughout the project.",
      "The actual webpage is created in React.js with Tailwind and Typescript used to simplify styling and functionality.",
      //Consider adding NUMBER OF PAGE VIEWS ?! when it gets added
      'The website will soon be added to the official Ivey site and be linked below.',
    ],
    developedFor: 'Ivey Business School',
    projectType: 'Mobile App',
    techStack: [
      'React.js',
      'Tailwind',
      'Typescript',
      'Figma',
    ],
    roles: ['Lead Developer', 'Designer'],
    links: [
      {
        label: 'Explore The Site',
        url: 'https://',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/chandlerkx/ivey-sus',
      },
      {
        label: 'Figma Designs',
        url: 'https://www.figma.com/file/DHzI4BfPD16dqoY40Z28yz/Ivey-MSc-Sustainability?type=design&node-id=0%3A1&mode=design&t=toSQmBDMZLp4ljgN-1',
      },
    ],
    mockups: [ivey1, ivey2, ivey3, ivey4, ivey5, ivey6],
  },
  {
    id: 'pantry',
    title: 'Pantry Pal',
    description:
      "Recipe assistant that generates recipes given input and saves all required ingredients in your virtual pantry.",
    techStack: [
      'React.js',
      'Node.js',
      'OpenAI API',
      'Flask',
      'MongoDB',
      'Figma',
    ],
    developedFor: 'Ignition Hacks',
    projectType: 'Web App',
    summary: [
      "Recipe assistant that generates recipes given input and saves all required ingredients in your virtual pantry.",
      'Recipes and ingredients are generated from input by connecting the OpenAI API to our React frontend using Python and Flask and saved in the app\'s grocery list.',
      'The user can find the nearest grocery store that has all their items in stock and for the cheapest price using the Google Maps API and our custom item database',
      "Items left over from recipes are saved in your virtual pantry, stored in our MongoDB database.",
      "The website's tech stack includes React.js, Next.js, and Tailwind CSS for its frontend, as well as Firebase for its backend. Additionally, Figma was used to create an intuitive and user-friendly UI.",
    ],
    roles: ['Lead Developer', 'UI/UX Designer'],
    links: [
      {
        label: 'Explore the Site',
        url: 'https://',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/prannyv/pump',
      },
    ],
    mockups: [pantry1, pantry2, pantry3, pantry4, pantry5, pantry6],
  },
  {
    id: 'poke',
    title: 'Qiwi',
    description:
      "A blockchain based reward system for users to earn points and redeem rewards based on their sustainable purchases.",
    summary: [
      'A blockchain based reward system for users to earn points and redeem rewards based on their sustainable purchases.',
      'Awarded the ”Best Sustainability Hack” by Fidelity Investments and “Best Use of Metis“ at Hawkhacks 2024.',
      "Uses Solidity to make and publish smart contracts on the Metis testnet.",
      "Implemented blockchain systems using web3.js and Next.js to create a user friendly interface for users to view their points and redeem rewards.",
      "Added functionality to transfer points between users and special incentives for users to redeem rewards.",
      'Check out the Github to take a closer look at the project including the demo.',
    ],
    developedFor: 'HawkHacks 2024',
    projectType: 'Java App',
    techStack: [
      'Next.js',
      'Node.js',
      'Tailwind',
      'Typescript',
      'Solidity',
      'Web3.js',
      'Figma',
    ],
    roles: ['Developer'],
    links: [
      {
        label: 'Github',
        url: 'https://github.com/JackyLiu13/Qiwi',
      },
    ],
    mockups: [poke1,poke2,poke3,poke4],
  },
];
