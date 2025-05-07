import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';

import { projectsData } from '@/constants/projects-data';

const Portfolio = () => {
  return (
    <Section
      id='portfolio'
      label='PORTFOLIO'
      title='SELECTED WORK'
      className='md:text-lg-medium text-md-medium flex-wrap gap-4 py-12.5 text-center md:gap-16 md:py-20'
      headerClassName='md:text-center  gap-4 mt-10'
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 md:mt-2'
    >
      <Cards>
        {projectsData.map((project) => (
          <Card
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.name}
            description={project.description}
          />
        ))}
        <div className='hidden items-center justify-center md:absolute md:mt-59 md:ml-130 md:flex'>
          <div className='bg-base-white flex items-center justify-center rounded-full md:h-25 md:w-25'>
            <p className='text-lg-bold text-neutral-950'>VISIT</p>
          </div>
        </div>
      </Cards>
    </Section>
  );
};

export default Portfolio;

type CardsProps = {
  children: React.ReactNode;
};

const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10'>
      {children}
    </div>
  );
};

type CardProps = {
  imageSrc: StaticImageData;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className='hover:shadow-primary-200 transform text-left transition-transform duration-300 ease-in-out hover:-translate-y-4 hover:shadow-xl'>
      <Image
        src={imageSrc}
        alt={title}
        className='mt-8 aspect-square rounded-2xl object-cover md:rounded-4xl'
      />
      <h3 className='md:display-xs-bold text-xl-bold text-neutral-25 mt-3'>
        {title}
      </h3>
      <p className='md:text-md-regular text-sm-regular mt-3 text-neutral-400'>
        {description}
      </p>
    </div>
  );
};
