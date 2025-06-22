import type { Skill } from '@customTypes/skill';
import CodeIcon from '@icons/CodeIcon.astro';
import PaletteIcon from '@icons/PaletteIcon.astro';
import ServerIcon from '@icons/ServerIcon.astro';
import SettingsIcon from '@icons/SettingsIcon.astro';
import ToolsIcon from '@icons/ToolsIcon.astro';

export const skills: Skill[] = [
  {
    name: 'Frontend',
    stack: ['Angular', 'React', 'Tailwind', 'HTML', 'CSS'],
    icon: PaletteIcon,
  },
  {
    name: 'Backend',
    stack: ['Spring Boot', 'Node.js', 'Laravel', 'NestJS'],
    icon: ServerIcon,
  },
  {
    name: 'Languages',
    stack: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'SQL'],
    icon: CodeIcon,
  },
  {
    name: 'DevOps',
    stack: ['Docker', 'Linux', 'AWS', 'Vercel'],
    icon: SettingsIcon,
  },
  {
    name: 'Tools',
    stack: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Postman', 'Figma'],
    icon: ToolsIcon,
  },
];
