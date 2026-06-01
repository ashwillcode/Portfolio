import { SiInstagram, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export const NAV_ITEMS = [
  { label: "Hello, I'm ash",                    id: 'hello'        },
  { label: 'this is how I got here',            id: 'journey'      },
  { label: 'and the way I work',                id: 'work'         },
  { label: "plus the things I've made",         id: 'projects'     },
  { label: 'here is what the collaborators say', id: 'testimonials' },
  { label: 'say hello?',                        id: 'contact'      },
];

export const SOCIALS = [
  { icon: SiInstagram, href: 'https://www.instagram.com/asholediaries/', label: 'Instagram' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/ashwillcode',  label: 'LinkedIn'  },
  { icon: SiGithub,    href: 'https://github.com/amwill44',              label: 'GitHub'    },
];
