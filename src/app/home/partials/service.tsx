'use client';


import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import Section from '@/components/layouts/section';

import { servicesExpertise } from '@/constants/service-expertise';



const Services = () => {
  const [serviceCards] = useState(servicesExpertise);
  const [viewportKey, setViewportKey] = useState(0);

  useEffect(() => {
    const handleViewportChange = () => {
      setViewportKey((prev) => prev + 1);
    };

    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('pagehide', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('pagehide', handleViewportChange);
    };
  }, []);

  return (
    <Section
      label='SERVICE'
      title='MY SERVICE EXPERTISE'
      description='Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.'
      id='service'
      className='md:text-lg-medium text-md-medium flex-wrap gap-4 py-10 text-left md:gap-16 md:py-30'
      headerClassName='flex flex-col md:flex-row md:items-start md:justify-between gap-4'
      labelClassName='text-sm-medium md:text-md-medium'
      titleClassName='display-md-extrabold md:display-2xl-extrabold text-neutral-25 md:mt-2 md:w-120'
      desctriptionClassName='md:text-xl-medium text-md-medium md:text-right text-neutral-400 md:w-126 w-full md:py-6'
    >
      <ServiceCards key={viewportKey}>
        {serviceCards.map((service, index) => (
          <ServiceCard
            key={service.cardNumber}
            index={index}
            cardNumber={service.cardNumber}
            title={service.title}
            description={service.description}
          />
        ))}
      </ServiceCards>
    </Section>
  );
};

const ServiceCards: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className='flex flex-wrap gap-6'>{children}</div>;
};

type ServiceCardProps = {
  index: number;
  cardNumber: string;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  cardNumber,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      className='bg-base-black hover:shadow-primary-200 flex-1 basis-80 gap-4 shadow-md md:gap-6'
    >
      <p className='md:text-xl-semibold text-md-semibold text-neutral-400 mb-3'>
        {cardNumber}
      </p>
      <div className='w-full border-t border-neutral-800 md:mt-6'></div>
      <Icon
        icon='majesticons:monitor-line'
        width='32'
        height='32'
        className='text-primary-200 my-4 md:my-6'
      />
      <h3 className='md:text-base-white md:display-sm-semibold text-xl-semibold text-neutral-25'>
        {title}
      </h3>
      <p className='md:text-xl-regular text-md-regular mt-3 text-neutral-400 md:mt-6'>
        {description}
      </p>
    </motion.div>
  );
};

export default Services;
