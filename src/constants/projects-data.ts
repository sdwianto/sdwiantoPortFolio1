import { StaticImageData } from 'next/image';

import project1Src from '../../public/images/project-1.png';
import project2Src from '../../public/images/project-2.png';
import project3Src from '../../public/images/project-3.png';
import project4Src from '../../public/images/project-4.png';
import project5Src from '../../public/images/project-5.png';
import project6Src from '../../public/images/project-6.png';

type Project = {
  id: string;
  imageSrc: StaticImageData;
  name: string;
  description: string;
};

export const projectsData: Project[] = [
  {
    id: '1',
    imageSrc: project1Src,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: '2',
    imageSrc: project2Src,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: '3',
    imageSrc: project3Src,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: '4',
    imageSrc: project4Src,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: '5',
    imageSrc: project5Src,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
  {
    id: '6',
    imageSrc: project6Src,
    name: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
];
