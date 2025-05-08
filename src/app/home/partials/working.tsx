'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Section from '../../../components/layouts/section';
import { Button } from '../../../components/ui/button';
import { anotherTalent, workingWithMe } from '../../../constants/working-data';

const Working = () => {
  const [isWorkingWithMeHovered, setIsWorkingWithMeHovered] = useState(false);
  const [isAnotherTalentHovered, setIsAnotherTalentHovered] = useState(false);

  return (
    <Section
      id='working'
      label='WORKING'
      title='WHY CHOOSE ME?'
      className='md:text-lg-medium text-md-medium mt-[-40] flex-wrap gap-4 text-center md:gap-16 md:py-20'
      headerClassName='md:text-center gap-4 mt-10'
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 md:mt-2'
    >
      <div className='flex flex-col gap-10 md:flex-row md:items-stretch md:gap-20'>
        <div className='flex flex-1 justify-center'>
          <WorkingCards>
            <h2 className='text-neutral-25 md:text-display-sm text-xl font-bold md:font-bold'>
              WORKING WITH ME
            </h2>
            <div
              className='flex justify-center'
              onMouseEnter={() => setIsWorkingWithMeHovered(true)}
              onMouseLeave={() => setIsWorkingWithMeHovered(false)}
            >
              <Image
                src='/icons/working-with-me.svg'
                alt='working-with-me'
                width={80}
                height={80}
              />
            </div>
            {workingWithMe.map((working: { title: string }) => (
              <WorkingCard
                key={working.title}
                image='/icons/Vector.svg'
                title={working.title}
                textColor='text-neutral-25'
                textStyle='md:text-xl-bold text-md-bold'
                shadow={isWorkingWithMeHovered}
                shadowColor='primary-200'
              />
            ))}
          </WorkingCards>
        </div>
        <div className='flex flex-1 justify-center'>
          <WorkingCards>
            <h2 className='text-neutral-25 md:text-display-sm text-xl font-bold md:font-bold'>
              ANOTHER TALENT
            </h2>
            <div
              className='flex justify-center'
              onMouseEnter={() => setIsAnotherTalentHovered(true)}
              onMouseLeave={() => setIsAnotherTalentHovered(false)}
            >
              <Image
                src='/icons/another-talent.svg'
                alt='another-talent'
                width={80}
                height={80}
              />
            </div>
            {anotherTalent.map((working: { title: string }) => (
              <WorkingCard
                key={working.title}
                image='/icons/Vector2.svg'
                title={working.title}
                textColor='text-neutral-400'
                textStyle='text-md-regular md:display-xs-reguler'
                shadow={isAnotherTalentHovered}
                shadowColor='red-500'
              />
            ))}
          </WorkingCards>
        </div>
      </div>
      <Button
        asChild
        className='md:px-21.875 text-sm-bold md:text-md-bold bg-primary-200 mx-auto mt-0 mb-30 w-full text-neutral-950 md:mt-12 md:mb-20 md:w-fit'
      >
        <Link href='#contact'>HIRE ME</Link>
      </Button>
    </Section>
  );
};

export default Working;

type CardsProps = {
  children: React.ReactNode;
};

const WorkingCards: React.FC<CardsProps> = ({ children }) => {
  return <div className='flex h-full w-full flex-col gap-6'>{children}</div>;
};

type CardProps = {
  image: string;
  title: string;
  iconColor?: string;
  textColor?: string;
  textStyle?: string;
  shadow?: boolean;
  shadowColor?: string;
};

const WorkingCard: React.FC<CardProps> = ({
  image,
  title,
  iconColor,
  textColor,
  textStyle,
  shadow = false,
  shadowColor = 'primary-200',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isVectorIcon = image === '/icons/Vector.svg';

  // kombinasi parent dan local hover
  const showShadow = shadow || isHovered;

  // mode shadow
  const shadowClass = showShadow
    ? shadowColor === 'primary-200'
      ? 'shadow-[0_0_10px_rgba(163,230,53,0.7)]'
      : shadowColor === 'red-500'
        ? 'shadow-[0_0_10px_rgba(239,68,68,0.7)]'
        : 'shadow-lg'
    : '';

  return (
    <div
      className={`group cursor-pointer rounded-lg transition-shadow duration-300 ${shadowClass} p-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-4`}>
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className={`aspect-square h-6 w-6 rounded-2xl object-cover md:h-8 md:w-8 md:rounded-4xl ${
            iconColor ?? ''
          } ${isVectorIcon ? 'animate-rotate-ccw' : ''} transition-shadow duration-300`}
        />
        <h3
          className={`${textStyle} text-left ${textColor} transition-shadow duration-300`}
        >
          {title}
        </h3>
      </div>
      <div className='mt-6 w-full border-t border-neutral-800 md:mt-8'></div>
    </div>
  );
};
