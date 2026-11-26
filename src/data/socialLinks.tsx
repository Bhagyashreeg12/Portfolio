import type { ReactNode } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    handle: 'in/bhagyashreeg4',
    url: 'https://www.linkedin.com/in/bhagyashreeg4/',
    icon: <FaLinkedin />,
    color: '#0a66c2',
  },
  {
    name: 'GitHub',
    handle: '@Bhagyashreeg12',
    url: 'https://github.com/Bhagyashreeg12',
    icon: <FaGithub />,
    color: '#ffffff',
  },
  {
    name: 'Email',
    handle: 'bhagyashreeghosh004@gmail.com',
    url: 'mailto:bhagyashreeghosh004@gmail.com',
    icon: <FaEnvelope />,
    color: '#22c55e',
  },
];
