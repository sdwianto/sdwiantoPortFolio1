import { Icon } from '@iconify/react/dist/iconify.js';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel';

import { testimoniData } from '@/constants/testimoni-data';

const Testimonials = () => {
  return (
    <Section
      id='testimonials'
      label='TESTIMONIALS'
      title='PEOPLE SAYS ABOUT ME'
      className='md:text-lg-medium text-md-medium flex-wrap gap-4 text-center md:gap-16 md:py-20'
      headerClassName='md:text-center gap-4 mt-10'
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 md:mt-2'
    >
      <Carousel className='mb-10'>
        <CarouselContent className='gap-x-0'>
          {Array.from({ length: Math.ceil(testimoniData.length / 4) }).map(
            (_, index) => {
              const first = testimoniData[index * 4];
              const second = testimoniData[index * 4 + 1];
              const third = testimoniData[index * 4 + 2];
              const fourth = testimoniData[index * 4 + 3];

              return (
                <CarouselItem key={index}>
                  <div className='grid h-full grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2'>
                    {first && <TestimonialCard {...first} />}
                    {second && <TestimonialCard {...second} />}
                    {third && <TestimonialCard {...third} />}
                    {fourth && <TestimonialCard {...fourth} />}
                  </div>
                </CarouselItem>
              );
            }
          )}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </Section>
  );
};

export default Testimonials;

type TestimonialCardsProps = {
  name: string;
  role: string;
  logoSrc: StaticImageData;
  rating: number;
  message: string;
};

const TestimonialCard: React.FC<TestimonialCardsProps> = ({
  name,
  role,
  logoSrc,
  rating,
  message,
}) => {
  return (
    <div className='md:gap-6border flex flex-col gap-4 rounded-2xl border border-neutral-800 p-6'>
      <div className='flex-between text-left'>
        <div className='flex-col text-left md:gap-1'>
          <h3 className='text-lg-semibold text-neutral-25 mt-4'>{name}</h3>
          <p className='text-md-regular mt-2 text-neutral-400'>{role}</p>
        </div>
        <Image src={logoSrc} alt={name} className='md:h-12 md:w-28.5' />
      </div>
      <div className='flex gap-0'>
        {new Array(rating).fill(null).map((_, index) => (
          <Icon
            key={index}
            icon='line-md:star-filled'
            className='text-2xl'
            style={{ color: '#f3993f' }}
          />
        ))}
      </div>
      <p className='text-sm-regular md:text-md-regular text-neutral-25 line-clamp-5 text-left'>
        {message}
      </p>
    </div>
  );
};
