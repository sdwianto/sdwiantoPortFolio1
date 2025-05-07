'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { Marquee } from '@/components/ui/marquee';
import { Progress } from '@/components/ui/progress';
type ProgressItem = {
  id: number;
  label: string;
  target: number;
};
const progressData: ProgressItem[] = [
  { id: 1, label: 'React JS', target: 50 },
  { id: 2, label: 'HTML', target: 80 },
  { id: 3, label: 'Tailwind CSS', target: 90 },
  { id: 4, label: 'Node JS', target: 100 },
  { id: 5, label: 'Docker', target: 70 },
  { id: 6, label: 'JavaScript', target: 90 },
];
const Skill = () => {
  const [progressValues, setProgressValues] = React.useState(
    progressData.map(() => 0)
  );
  const [isInView, setIsInView] = React.useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInView) {
      setProgressValues(progressData.map(() => 0));
      interval = setInterval(() => {
        setProgressValues((prev) =>
          prev.map((value, i) => {
            const target = progressData[i].target;
            if (value < target) return value + 1;
            return value;
          })
        );
      }, 30);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView]);
  return (
    <div
      ref={skillRef}
      className='custom-container flex flex-wrap items-center gap-10 px-4 py-40 md:gap-14.5 md:px-32 md:py-20'
      id='skill'
    >
      {/* Left Section */}

      <div className='flex-[4.2] basis-80'>
        {/* Text */}
        <div className='gap-2 text-left'>
          <p className='md:text-lg-medium text-md-medium text-primary-200'>
            SKILLS
          </p>
          <h2 className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold mb-4 md:mb-14.5'>
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
        </div>
        {/* Tech Icons */}
        <div className='space-y-2'>
          {/* Top Row - Left */}
          <Marquee className='w-[calc(48px*4+2.5rem)] overflow-hidden py-2 md:w-[calc(64px*5+1.5rem)]'>
            {[
              'Tech-Icon-1',
              'Tech-Icon-2',
              'Tech-Icon-3',
              'Tech-Icon-4',
              'Tech-Icon-8',
              'Tech-Icon-7',
              'Tech-Icon-6',
              'Tech-Icon-5',
            ].map((icon, idx) => (
              <Image
                key={idx}
                src={`/icons/${icon}.svg`}
                alt={icon}
                width={64}
                height={64}
                className='h-12 w-12 select-none md:h-16 md:w-16'
              />
            ))}
          </Marquee>
          {/* Bottom Row - Right */}
          <Marquee
            className='w-[calc(48px*4+2.5rem)] overflow-hidden py-2 md:w-[calc(64px*5+1.5rem)]'
            reverse
          >
            {[
              'Tech-Icon-5',
              'Tech-Icon-6',
              'Tech-Icon-7',
              'Tech-Icon-8',
              'Tech-Icon-4',
              'Tech-Icon-3',
              'Tech-Icon-2',
              'Tech-Icon-1',
            ].map((icon, idx) => (
              <Image
                key={idx}
                src={`/icons/${icon}.svg`}
                alt={icon}
                width={64}
                height={64}
                className='h-12 w-12 select-none md:h-16 md:w-16'
              />
            ))}
          </Marquee>{' '}
        </div>
      </div>
      {/* Right Section: Progress Bars */}
      <div className='flex-[5.8] basis-80 space-y-6'>
        {progressData.map((item, i) => (
          <div key={item.id} className='w-full'>
            <div className='flex-between text-base-white md:text-xl-semibold text-sm-semibold flex justify-center gap-6'>
              <Progress value={progressValues[i]} label={item.label} />{' '}
              <div>{progressValues[i]}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skill;
