import type { Project } from '@customTypes/project';
import { tags } from './tags';

export const projects: Project[] = [
  {
    title: 'Crypto Pulse',
    subtitle: 'Crypto Tracker',
    description:
      'Cryptocurrency tracking app with real-time market data, coin statistics, price charts, and detailed market information powered by the CoinGecko API.',
    link: 'https://cryptopulse.oussamaati.dev',
    github: 'https://github.com/OussamaAtifii/cryptopulse',
    image: 'projects/cryptopulse.webp',
    tags: [tags.ANGULAR, tags.TAILWIND, tags.DOCKER, tags.NGINX],
  },
  {
    title: 'Prodly',
    subtitle: 'Project Manager',
    description:
      'Project management tool with drag & drop functionality. Allows users to manage tasks, invite collaborators, and receive real-time updates via WebSocket events.',
    link: 'https://prodly.oussamaati.dev',
    github: 'https://github.com/OussamaAtifii/prodly',
    image: 'projects/prodly.webp',
    tags: [tags.ANGULAR, tags.NGRX, tags.TAILWIND, tags.NODEJS, tags.EXPRESS, tags.WEBSOCKET],
  },
  {
    title: 'Moviees',
    subtitle: 'Discover New Movies',
    description:
      'Platform to explore movies, search for specific titles, and access detailed information and summaries.',
    link: 'https://moviees.oussamaati.dev',
    github: 'https://github.com/OussamaAtifii/moviees',
    image: 'projects/moviees.webp',
    tags: [tags.ANGULAR, tags.TAILWIND],
  },
  {
    title: 'Memory Match',
    subtitle: 'Memory Game',
    description:
      'Memory game where you have to find all matching pairs of cards in the fewest attempts possible.',
    link: 'https://memory-match.oussamaati.dev',
    github: 'https://github.com/OussamaAtifii/memory-match',
    image: 'projects/memory-match.webp',
    tags: [tags.ANGULAR, tags.TYPESCRIPT],
  },
];
