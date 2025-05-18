'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useRef, useEffect } from 'react';

import Section from '@/components/layouts/section';

import { faqsData } from '@/constants/faq-data';

const Faq = () => {
  const pathName = usePathname();
  const [animationKey, setAnimationKey] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathName]);

  return (
    <Section
      id='faq'
      label='FAQ'
      title='FREQUENTLY ASKED QUESTIONS'
      className='md:text-lg-medium text-md-medium flex-wrap gap-4 pt-10 text-center md:mt-0 md:gap-16 md:py-20'
      headerClassName='md:text-center'
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 mt-2'
    >
      <FaqCards key={animationKey} />
    </Section>
  );
};

export default Faq;

type CardsProps = object;

const FaqCards: React.FC<CardsProps> = () => {
  const childrenArray = faqsData.map((faq, index) => (
    <FaqCard
      key={faq.title} // gunakan key statis untuk performa dan animasi smooth
      index={index}
      image={faq.image}
      title={faq.title}
      description={faq.description}
      direction={index % 2 === 0 ? 'left' : 'right'}
    />
  ));

  const rows: React.ReactNode[] = [];
  for (let i = 0; i < childrenArray.length; i += 2) {
    rows.push(
      <React.Fragment key={i}>
        <div className='hidden md:contents'>
          <div className='pr-5 md:border-r md:border-neutral-100'>
            {childrenArray[i]}
          </div>
          {childrenArray[i + 1] && (
            <div className='pl-5'>{childrenArray[i + 1]}</div>
          )}
        </div>
        {i + 2 < childrenArray.length && (
          <div className='col-span-full hidden h-px w-full bg-neutral-100 md:block' />
        )}
      </React.Fragment>
    );
  }

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
  index: number;
};

const FaqCard: React.FC<CardProps> = ({
  image,
  title,
  description,
  direction = 'left',
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  const xInitial = direction === 'left' ? -15 : 15;

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: index * 0.15, ease: 'easeOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        x: xInitial,
        transition: { duration: 0.4, ease: 'easeIn' },
      });
    }
  }, [isInView, controls, index, xInitial]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInitial }}
      animate={controls}
      style={{ willChange: 'opacity, transform' }}
      className='flex-wrap text-left'
    >
      <div className='flex-start gap-4'>
        <Image
          src={image}
          alt={title}
          className='aspect-square h-6 w-6 rounded-2xl object-cover md:h-8 md:w-8 md:rounded-4xl'
        />
        <h3 className='text-lg-bold md:display-xs-bold text-neutral-25 mt-4'>
          {title}
        </h3>
      </div>
      <p className='md:text-md-regular text-sm-medium mt-2 text-neutral-400'>
        {description}
      </p>
    </motion.div>
  );
};
