import pokedexImg from '../assets/projects/pokedex.png';
import gradebookCombinedView from '../assets/projects/teacher-gradebook-combined-view.png';
import gradebookStudentView from '../assets/projects/teacher-gradebook-student-view.png';
import gradebookAssignmentView from '../assets/projects/teacher-gradebook-assignment-view.png';
import gradebookAssessmentView from '../assets/projects/teacher-student-assessment-view.png';
import parentGradebookView from '../assets/projects/parent-gradebook-view.png';
import parentAssessmentView from '../assets/projects/parent-assessment-view.png';
import studentGradebookView from '../assets/projects/student-gradebook-view.png';
import studentAssessmentView from '../assets/projects/student-assessment-view.png';
import contentBuilderView from '../assets/projects/content-builder.png';
import gamifiedMapImg from '../assets/projects/gamified-map.png';
import portfolioImg from '../assets/projects/portfolio.png';
import gamifiedMapFile from '../assets/projects/dashboard-map-file.tmj?url';

export type ProjectSection = {
  heading: string;
  body?: string;
  items?: string[];
  images?: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  mapFile?: string;
  fullDescription?: string;
  sections?: ProjectSection[];
  techStack?: string[];
  github?: string;
  liveDemo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'gradebook',
    title: 'K-12 Gradebook System',
    description: 'Multi-role UX design for teachers, parents and students',
    image: gradebookStudentView,
    fullDescription: 'A production gradebook system built to replace Canvas LMS for StrongMind\'s K-12 platform. This is not a prototype or a concept. It is live, used by real teachers, students, and parents today, and actively growing as new features are added.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'StrongMind needed a Canvas parity system so teachers could transition away from Canvas without losing functionality they depended on. The requirements from product were intentionally vague at the start. The flow, the information architecture, and every design decision was mine to figure out.',
      },
      {
        heading: 'The UX Philosophy',
        body: 'Teachers were the hardest problem. They need the most from a gradebook and they are already stretched thin. My goal was to give them multiple ways to access the same data depending on what they needed in that moment. Every view exists because a real teacher workflow demanded it. The parent and student views use the same underlying data but simplified and scoped to what each role actually needs.',
      },
      {
        heading: 'Teacher Views',
        body: 'Four entry points because teachers think about grading in four different ways. The combined grid view shows every student and every assignment at once with color-coded scores. The student view deep dives on one student when a parent calls. The assignment view lets a teacher grade the whole class on one assignment at once. The grading view handles open-ended questions one student at a time.',
        images: [gradebookCombinedView, gradebookStudentView, gradebookAssignmentView, gradebookAssessmentView],
      },
      {
        heading: 'Parent & Student Views',
        body: 'Read-only versions of the same data scoped to what each role is allowed to see. Parents see their child only. Students see their own work with a clear indicator when a teacher still needs to grade something so they are not left wondering why their grade looks incomplete.',
        images: [parentGradebookView, parentAssessmentView, studentGradebookView, studentAssessmentView],
      },
      {
        heading: 'Content Builder',
        body: 'Teachers do not just grade. They also shape what students see. The course content editor gives teachers control over their own classroom without touching code or contacting support. From a hierarchical view of units and lessons, teachers can add new content, hide items that are not relevant to their class, and reorder everything by dragging and dropping. Each content item is labeled by type (conversation, instruction, warm up, checkpoint) so teachers can see the structure of a lesson at a glance. A sequence control toggle lets teachers decide whether students must complete content in order or can move freely through the material. This single toggle changes the entire learning experience for a class without any backend involvement. The editor sits in the same platform as the gradebook so teachers move between managing grades and managing content without switching tools.',
        images: [contentBuilderView],
      },
      {
        heading: 'My Role',
        body: 'I was the sole designer. I designed the entire system in Figma across multiple iterations as requirements evolved and new features were added. While I did not write the majority of the production code, I owned the frontend quality: reviewing implementation against the Figma, catching inconsistencies, and fixing issues when the build did not match the design.',
      },
      {
        heading: 'What Is Still Being Built',
        body: 'This is an ongoing project. As teachers migrate from Canvas, new feature parity items get added. The frontend is also being migrated from Ruby on Rails to a React frontend with Rails backend, a rebuild I will be contributing to.',
      },
    ],
    techStack: ['Ruby on Rails', 'Figma', 'HTML', 'CSS', 'Tailwind', 'ERB'],
  },
  {
    id: 'gamified-map',
    title: 'Gamified Learning Map',
    description: 'Interactive Pokémon-style course navigation for kids',
    image: gamifiedMapImg,
    video: gamifiedMapVideo,
    mapFile: gamifiedMapFile,
    fullDescription: 'A pixel-art tile map built during a StrongMind internal hackathon, designed to reimagine how K–12 students (grades 6–12) navigate their learning platform. Instead of clicking through menus, students explore a Game Boy-style town where every building is a destination.',
    sections: [
      {
        heading: 'The Concept',
        body: 'Each location in the town maps to a real part of the platform. The schoolhouse leads to courses. The mailbox opens messages. The town square water fountain connects to the student community. The notice board shows notifications. And on the hill sits a wizard\'s house where students can talk to an AI that asks them questions and automatically creates help desk tickets if they\'re stuck.',
      },
      {
        heading: 'My Contributions',
        items: [
          'Built the entire pixel tile map from scratch in Tiled Map Editor, laying every tile square by square and designing the town layout',
          'Gathered and curated free-to-use pixel art assets that fit the Game Boy aesthetic',
          'Placed and configured all NPC characters and wandering animals that bring the town to life',
          'Added collision bump zones on every building and obstacle so characters navigate realistically without clipping through walls',
        ],
      },
      {
        heading: 'The Team',
        body: 'Four engineers total. One set up Phaser and character movement, one integrated the map into the browser and wired up all the location navigation, one built the AI wizard, and I owned the map itself end to end.',
      },
      {
        heading: 'Why It Was Never Released',
        body: 'StrongMind is an education company, not a gaming studio. A map like this needs constant expansion (new buildings, new characters, new secrets) to stay engaging for students. Without a dedicated team to keep building on it, it would get stale fast. It was the right call to keep it as a proof of concept rather than ship something we couldn\'t sustain. But as a hackathon project it absolutely delivered on its goal: showing that learning navigation doesn\'t have to be boring.',
      },
    ],
    techStack: ['Phaser', 'Tiled Map Editor', 'JavaScript', 'Ruby on Rails', 'JSON'],
  },
  {
    id: 'pokedex',
    title: 'Pokédex App',
    description: 'React app with search and filter using the PokéAPI',
    image: pokedexImg,
    fullDescription: 'A modern web application for exploring the world of Pokémon. Built during my bootcamp as a deep dive into working with external APIs, infinite scroll patterns, and real-time search filtering.',
    sections: [
      {
        heading: 'The Challenge',
        body: 'The PokéAPI returns hundreds of Pokémon with nested data structures. The goal was to make that data feel fast, browsable, and visually engaging without overwhelming the user.',
      },
      {
        heading: 'What I Built',
        items: [
          'Infinite scroll that loads Pokémon in batches as you scroll. No pagination buttons needed.',
          'Real-time search that filters instantly as you type without hitting the API again',
          'Color-coded type badges (fire = red, water = blue, etc.) so users can visually scan types at a glance',
          'Individual detail cards with stats, types, abilities, and evolutions',
          'Responsive layout that works on mobile and desktop',
        ],
      },
      {
        heading: 'What I Learned',
        body: 'Working with a REST API that required chaining multiple requests to get complete Pokémon data. Handling async chains cleanly and keeping the UI responsive while fetching was the key challenge of this project.',
      },
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'PokéAPI'],
    github: 'https://github.com/ashwillcode/simple-pokedex',
    liveDemo: 'https://ashwillcode.github.io/simple-pokedex/',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    description: 'Designed and built from scratch in React and Tailwind',
    image: portfolioImg,
    fullDescription: 'This site is both a portfolio and a learning project. I work primarily in Ruby on Rails at my day job so React rarely comes up in production. I built this to close that gap intentionally, and chose TypeScript on top of it to make it harder and add another tool to my belt.',
    sections: [
      {
        heading: 'The Design',
        body: 'Design is not an afterthought for me. It is where I start. The color palette, the hand-drawn illustration, the section dividers, the subtle scroll animations: all of it is deliberate. I wanted my voice to come through without tipping into over-designed. Soft pastels, whimsical details, and enough personality to be memorable without being unprofessional. The illustration in the about section is my own art.',
      },
      {
        heading: 'The Technical Challenges',
        body: 'Getting animations to feel smooth on scroll across devices has been the hardest part: timing, performance, and making sure nothing jitters on mobile. Responsive design on a layout this opinionated requires constant iteration. Both are still being refined.',
      },
      {
        heading: 'Honest Reflection',
        body: 'I vibe coded a lot of this with AI assistance. That is just the reality of where the industry is heading. The emotional challenge is that leaning on AI tools makes it harder to internalize syntax and explain code at a technical level without having written every line yourself. I am working through that tension, building real understanding alongside the speed that AI enables.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/ashwillcode/Portfolio',
  },
];
