import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      className='custom-container relative mx-auto flex flex-wrap items-start overflow-hidden pt-20 pb-10 md:pt-55.25 md:pb-0'
      id='hero'
    >
      {/* hero content */}

      <div className='z-20 flex-[5.9] basis-80 gap-10 md:gap-4'>
        <div className='mt-10 flex items-center gap-2 md:gap-4'>
          <div className='border-neutral-25 w-5.25 border-t md:w-28.5'></div>
          <p className='text-neutral-25 text-md-medium md:text-xl-medium'>
            Hi, I am Singgih Dwianto Frontend Developer
          </p>
        </div>
        <div className='gap-4'>
          <h1 className='text-display display-lg-extrabold md:display-3xl-extrabold mt-4 h-auto text-[#FDFDFD] md:w-202'>
            BUILDING FAST &{' '}
            <span className='text-primary-200'>INTERACTIVE</span> WEB
            EXPERIENCES.
          </h1>
          <p className='md:text-xl-medium text-lg-medium mt-4 text-neutral-400 md:w-149.25'>
            Bridging creativity and functionality to deliver stunning,
            user-friendly web applications
          </p>
        </div>
        <Button
          asChild
          className='md:px-29.375 text-sm-extrabold md:text-md-bold bg-primary-200 my-10 mt-10 w-full whitespace-nowrap text-neutral-950 md:mt-15 md:mb-40.75 md:w-fit'
        >
          <Link href='#contact'>HIRE ME</Link>
        </Button>
      </div>
      {/* boxes */}
      <Image
        src={'/icons/3boxes.svg'}
        alt='drible'
        width='138'
        height='92'
        className='left-6.125 absolute bottom-47.5 z-20 h-[69px] w-[103.5px] md:bottom-0 md:left-0 md:h-[92px] md:w-[138px]'
      />
      {/* garis pertama */}
      <div
        className='pointer-events-none absolute top-0 z-15 h-[563px] w-px bg-neutral-800 md:h-full'
        style={{
          left: 'clamp(197px, 26.04vw, 375px)',
        }}
      />

      {/* Garis kedua */}
      <div
        className='pointer-events-none absolute top-20 z-15 h-[482px] w-px bg-neutral-800 md:h-full'
        style={{
          left: 'clamp(296px, 49.1vw, 707px)',
        }}
      />
      {/* profile image */}
      <div
        className='relative mx-auto w-full max-w-[41.25rem] overflow-hidden md:absolute md:top-0 md:right-0'
        style={{
          height: 'clamp(29.13rem, 58.57vw, 55.06rem)',
        }}
      >
        <div className='from-primary-200 to-base-black absolute top-0 right-0 z-0 h-full w-1/2 bg-gradient-to-b' />

        <Image
          src='/images/Young-Man.png'
          alt='hero'
          fill
          className='z-10 mx-auto translate-x-[-10px] translate-y-[9px] rotate-[-1.45deg] object-contain'
          priority
        />

        <div className='absolute top-0 left-0 z-10 h-full w-full backdrop-grayscale'>
          <div className='bg-base-black h-full w-full opacity-40' />
        </div>

        <div className='from-primary-200 to-base-black pointer-events-none absolute top-0 right-0 z-11 h-full w-1/2 bg-gradient-to-b mix-blend-color' />
        {/* shading */}
        <div className='from-base-black absolute inset-0 z-15 bg-gradient-to-t to-transparent' />
        <div className='from-base-black absolute inset-x-0 bottom-0 z-15 h-[60%] bg-gradient-to-t to-transparent' />
        {/* rating */}
        <div className='hover:border-primary-200 absolute inset-x-4 top-81 z-30 mb-10 gap-2 rounded-3xl border border-neutral-800 p-5 transition duration-300 md:inset-x-auto md:top-153 md:right-0 md:mr-40 md:mb-[36px] md:w-fit'>
          <p className='md:display-xl-bold display-xs-bold text-neutral-25'>
            5.0
          </p>
          <div className='flex gap-0'>
            {new Array(5).fill(null).map((_, index) => (
              <Icon
                key={index}
                icon='line-md:star-filled'
                className='text-2xl'
                style={{ color: '#f3993f' }}
              />
            ))}
          </div>
          <p className='md:text-xl-semibold text-neutral-25'>
            Many Client Trust with me
          </p>
        </div>
      </div>
      {/* end of profile image */}

      <div className='bg-base-background absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t to-transparent' />
    </section>
  );
};

export default Hero;
