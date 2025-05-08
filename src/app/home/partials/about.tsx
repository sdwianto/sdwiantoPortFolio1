'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Section from '@/components/layouts/section';
const AboutMe = () => {
  return (
    <div className='relative flex flex-col'>
      <Section
        id='about'
        label='ABOUT ME'
        title='CRAFTING SEAMLESS'
        description={
          <>
            <span className='text-primary-200 items-center text-center'>
              HIGH-PERFORMANCE WEB
            </span>{' '}
            EXPERIENCES.
          </>
        }
        className='md:text-lg-medium text-md-medium relative z-10 py-10 md:py-30'
        headerClassName='text-center flex flex-col items-center z-10'
        labelClassName='text-sm-medium md:text-md-medium'
        titleClassName='display-md-extrabold md:display-2xl-extrabold md:mt-4 z-10 text-[#FDFDFD]'
        desctriptionClassName='display-md-extrabold md:display-2xl-extrabold text-[#FDFDFD] md:w-200 mt-1'
      >
        {/* boxes */}
        <Image
          src={'/icons/3boxes.svg'}
          alt='drible'
          width='138'
          height='92'
          className='absolute bottom-4 left-0 z-20 h-[69px] w-[103.5px] rotate-[90deg] md:bottom-[24] md:left-[-20px] md:h-[92px] md:w-[138px]'
        />
        <p className='text-md-medium md:text-xl-medium mt-4 text-center text-neutral-400 md:mt-16'>
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep understanding of frontend
          technologies, I create smooth and visually appealing user experiences.
        </p>
        <div className='relative mt-10 flex w-full flex-col md:absolute md:inset-0 md:mt-0'>
          <motion.div
            whileHover={{ scale: 1.5 }} // Scale up on hover
            transition={{ duration: 0.3 }} // Animation duration
            className='hover:bg-primary-200 hover-md absolute ml-10 h-[127px] w-[170px] md:top-[37px] md:ml-[124px] md:h-[178px] md:w-[238px]'
          >
            <Image
              src='/images/about-me-1.png'
              alt='impact image'
              fill
              sizes='(max-width: 768px) 170px, 238px'
              className='object-contain'
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3 }}
            className='absolute top-[45px] right-[35px] h-[99px] w-[134px] md:top-[74px] md:right-[178px] md:h-[187px] md:w-[250px]'
          >
            <Image
              src='/images/about-me-2.png'
              alt='impact image'
              fill
              sizes='(max-width: 768px) 134px, 250px'
              className='z-[-1] object-contain'
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3 }}
            className='absolute top-[164px] right-[116.53px] h-[100px] w-[132.47px] md:top-[321px] md:right-[319px] md:h-[88px] md:w-[117px]'
          >
            <Image
              src='/images/about-me-3.png'
              alt='impact image'
              fill
              sizes='(max-width: 768px) 133px, 117px'
              className='z-1 object-contain'
            />
          </motion.div>
          <div className='pointer-events-none invisible h-[264px] md:h-[450px]' />
        </div>
      </Section>
    </div>
  );
};
export default AboutMe;
