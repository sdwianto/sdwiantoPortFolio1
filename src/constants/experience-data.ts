import { StaticImageData } from 'next/image';

import experience1Src from '../../public/icons/logo-1.svg';
import experience2Src from '../../public/icons/logo-2.svg';
import experience3Src from '../../public/icons/logo-3.svg';
import experience4Src from '../../public/icons/logo-4.svg';

type Experience = {
  id: string;
  date: string;
  imageSrc: StaticImageData;
  title: string;
  description: string;
};

export const experienceData: Experience[] = [
  {
    id: '1',
    date: '2020 - 2022',
    imageSrc: experience1Src,
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    id: '2',
    date: '2020 - 2022',
    imageSrc: experience2Src,
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    id: '3',
    date: '2020 - 2022',

    imageSrc: experience4Src,
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
  {
    id: '4',
    date: '2020 - 2022',
    imageSrc: experience3Src,
    title: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
  },
];
