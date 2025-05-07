import React from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  label: string;
  title: string;
  description?: React.ReactNode;
  id?: string;
  className?: string;
  headerClassName?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  titleClassName?: string;
  desctriptionClassName?: string;
  childrenClassName?: string;
};

const Section: React.FC<SectionProps> = ({
  children,
  label,
  title,
  description,
  className,
  headerClassName,
  childrenClassName,
  id,
  wrapperClassName,
  labelClassName,
  titleClassName,
  desctriptionClassName,
}) => {
  return (
    <section id={id} className={cn('custom-container', className)}>
      <div className={cn('text-primary-200', headerClassName)}>
        <div className={cn(wrapperClassName)}>
          <p className={cn(labelClassName)}>{label}</p>
          <h3 className={cn(titleClassName)}>{title}</h3>
        </div>
        <p className={cn(desctriptionClassName)}>{description}</p>
      </div>
      <div className={cn('mt-6 md:mt-16', childrenClassName)}>{children}</div>
    </section>
  );
};

export default Section;
