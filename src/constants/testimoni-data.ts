import { StaticImageData } from 'next/image';

import logo1Src from '../../public/icons/logo-1.svg';
import logo2Src from '../../public/icons/logo-2.svg';
import logo3Src from '../../public/icons/logo-3.svg';
import logo4Src from '../../public/icons/logo-4.svg';

type Testimoni = {
  name: string;
  role: string;
  rating: number;
  logoSrc: StaticImageData;
  message: string;
};

export const testimoniData: Testimoni[] = [
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    logoSrc: logo1Src,
    rating: 5,
    message:
      '“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    logoSrc: logo2Src,
    rating: 5,
    message:
      '“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”',
  },
  {
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    logoSrc: logo3Src,
    rating: 5,
    message:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    logoSrc: logo4Src,
    rating: 5,
    message:
      '“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”',
  },
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    logoSrc: logo1Src,
    rating: 5,
    message:
      '“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    logoSrc: logo2Src,
    rating: 5,
    message:
      '“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”',
  },
  {
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    logoSrc: logo3Src,
    rating: 5,
    message:
      '“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    logoSrc: logo4Src,
    rating: 5,
    message:
      '“A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!”',
  },
];
