'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Section from '@/components/layouts/section';

import { faqsData } from '@/constants/faq-data';

const Faq = () => {
  const [viewportKey, setViewportKey] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setViewportKey((prev) => prev + 1);
    };

    const handleScroll = () => {
      setViewportKey((prev) => prev + 1);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section
      id='faq'
      label='FAQ'
      title='FREQUENTLY ASKED QUESTIONS'
      className='md:text-lg-medium text-md-medium flex-wrap gap-4 pt-10 text-center md:mt-0 md:gap-16 md:py-20'
      headerClassName='md:text-center '
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 mt-2 '
    >
      <FaqCards viewportKey={viewportKey}>
        {faqsData.map((faq, index) => {
          const rowIndex = Math.floor(index / 2);
          return (
            <React.Fragment key={`${faq.title}-${viewportKey}`}>
              <FaqCard
                key={`${faq.title}-${viewportKey}`}
                image={faq.image}
                title={faq.title}
                description={faq.description}
                direction={index % 2 === 0 ? 'left' : 'right'}
                rowIndex={rowIndex}
              />
            </React.Fragment>
          );
        })}
      </FaqCards>
    </Section>
  );
};

export default Faq;

type CardsProps = {
  children: React.ReactNode;
  viewportKey?: number;
};

const FaqCards: React.FC<CardsProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);
  const rows: React.ReactNode[] = [];

  // Mode desktop: kelompokkan per 2
  for (let i = 0; i < childrenArray.length; i += 2) {
    rows.push(
      <React.Fragment key={i}>
        {/* Mode desktop */}
        <div className='hidden md:contents'>
          {/* Kolom kiri */}
          <div className='pr-5 md:border-r md:border-neutral-800'>
            {childrenArray[i]}
          </div>
          {/* Kolom kanan jika ada */}
          {childrenArray[i + 1] && (
            <div className='pl-5'>{childrenArray[i + 1]}</div>
          )}
        </div>
        {/* Garis antar baris di desktop */}
        {i + 2 < childrenArray.length && (
          <div className='col-span-full hidden h-px w-full bg-neutral-800 md:block' />
        )}
      </React.Fragment>
    );
  }

  // Mode mobile
  const mobileRows = childrenArray.map((child, index) => (
    <React.Fragment key={index}>
      <div className='md:hidden'>{child}</div>
      {index < childrenArray.length - 1 && (
        <div className='mt-4 h-px w-full bg-neutral-800 md:hidden' />
      )}
    </React.Fragment>
  ));

  return (
    <div className='mb-10 grid grid-cols-1 md:grid-cols-2 md:gap-10'>
      {mobileRows}
      {rows}
    </div>
  );
};

type CardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  direction?: 'left' | 'right';
  rowIndex?: number;
  viewportKey?: number;
};

const FaqCard: React.FC<CardProps> = ({
  image,
  title,
  description,
  direction = 'left',
  rowIndex = 0,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const xInitial = direction === 'left' ? -150 : 150;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInitial }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: xInitial }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: rowIndex ? rowIndex * 0.6 : 0,
      }}
      className='flex-wrap text-left'
    >
      <div className='flex-start gap-4'>
        <Image
          src={image}
          alt={title}
          className='aspect-square rounded-2xl object-cover md:rounded-4xl'
        />
        <h3 className='text-lg-bold text-neutral-25 mt-4'>{title}</h3>
      </div>
      <p className='md:text-md-regular text-sm-medium mt-2 text-neutral-400'>
        {description}
      </p>
    </motion.div>
  );
};
