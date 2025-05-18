'use client';

import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Section from '@/components/layouts/section';

import { experienceData } from '@/constants/experience-data';
import { cn } from '@/lib/utils';

const Experience = () => {
  return (
    <Section
      id='experience'
      label='EXPERIENCE'
      title='PROFESIONAL WORK'
      className='md:text-lg-medium text-md-medium mt-0 flex-wrap gap-4 text-center md:gap-16 md:py-20'
      headerClassName='md:text-center gap-4 mt-10'
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 md:mt-2'
    >
      <ExperienceCards />
    </Section>
  );
};

export default Experience;

const ExperienceCards: React.FC = () => {
  return (
    <div className='relative grid grid-cols-2 gap-x-10 gap-y-4 p-4 md:gap-y-0'>
      {experienceData.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          index={index}
          isLast={index === experienceData.length - 1}
        />
      ))}
      {/* boxes */}
      <div className='absolute right-[-16px] bottom-[-64px] z-20 md:right-[-148px] md:bottom-[-48px]'>
        <Image
          src={'/icons/3boxes.svg'}
          alt='drible'
          width='138'
          height='92'
          className='h-[59px] w-[93.5px] rotate-[270deg] md:h-[92px] md:w-[138px]'
        />
      </div>
    </div>
  );
};

type ExperienceItemProps = {
  experience: CardProps;
  index: number;
  isLast: boolean;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  index,
  isLast,
}) => {
  const isEven = index % 2 === 0;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      controls.start({ height: 'calc(100%)' });
    } else {
      controls.start({ height: 0 });
    }
  }, [inView, controls]);
  useEffect(() => {
    const handleResize = () => {
      if (!inView) {
        controls.start({ height: 0 });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [controls, inView]);
  return (
    <div
      ref={ref}
      className='group relative col-span-2 md:grid md:grid-cols-2 md:items-center'
    >
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={controls}
          transition={{ duration: 2, ease: 'easeOut' }}
          className={cn(
            'line-decoration absolute z-0 md:left-1/2 md:-translate-x-1/2',
            'left-0 w-full bg-neutral-800 md:block',
            'w-[1px] md:w-px'
          )}
          style={{
            top: '50%',
          }}
        />
      )}
      {/* Badge Desktop */}
      <div className='absolute left-1/2 z-10 hidden -translate-x-1/2 md:block'>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 2, delay: 0.2 }}
          className='bg-base-black text-primary-200 text-md-semibold flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800'
        >
          {index + 1}
        </motion.div>
      </div>
      {/* Desktop layout */}

      {isEven ? (
        <>
          <div className='hidden md:block'></div>
          <div className='hidden md:ml-16 md:block'>
            <ExperienceCard {...experience} inView={inView} />
          </div>
        </>
      ) : (
        <>
          <div className='hidden md:mr-16 md:block'>
            <ExperienceCard {...experience} inView={inView} />
          </div>
          <div className='hidden md:block'></div>
        </>
      )}
      {/* Mobile layout */}
      <div className='mb-8 flex flex-col gap-4 md:hidden'>
        <div className='relative flex items-center justify-start gap-4'>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 2, delay: 0.8 }}
            className='bg-base-black text-primary-200 text-md-semibold absolute top-1/2 left-0 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border border-neutral-800'
          >
            {index + 1}
          </motion.div>
          <div className='ml-9 flex flex-col'>
            <ExperienceCard {...experience} inView={inView} />
          </div>
        </div>
      </div>
    </div>
  );
};

type CardProps = {
  id: string;
  date: string;
  imageSrc: StaticImageData;
  title: string;
  description: string;
  inView?: boolean;
};

export const ExperienceCard: React.FC<CardProps> = ({
  date,
  imageSrc,
  id,
  title,
  description,
  inView,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : {}}
      transition={{ duration: 2, delay: 0.2 }}
      className='flex flex-col gap-4 rounded-3xl border border-neutral-800 p-4'
    >
      <div className='flex flex-wrap justify-between'>
        <div className='flex flex-col items-start gap-2'>
          <h3 className='md:text-lg-medium text-sm-regular mt-4 text-neutral-400'>
            {date}
          </h3>
          <h3 className='text-md-bold md:display-xs-bold text-neutral-25 mt-4'>
            {title}
          </h3>
        </div>
        <Image src={imageSrc} alt={id} className='md:h-12 md:w-28.5' />
      </div>
      <p className='text-md-regular mt-2 text-start text-neutral-400'>
        {description}
      </p>
    </motion.div>
  );
};
