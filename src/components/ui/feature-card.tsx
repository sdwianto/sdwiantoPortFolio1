import React from 'react';

import { cn } from '@/lib/utils';

import SkewMotion from './skew-motion';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  animationDelay?: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  animationDelay,
}) => {
  return (
    <SkewMotion asChild delay={animationDelay}>
      <div
        className={cn(
          'rounded-md bg-gradient-to-b from-[#0093DD] to-transparent p-0.25',
          className
        )}
        style={{
          width: 'clamp(6.375rem, 15.89vw, 12rem)',
          borderRadius: 'clamp(0.25rem, 0.66vw, 0.5rem)',
        }}
      >
        <div
          className='rounded-md bg-neutral-900'
          style={{
            borderRadius: 'clamp(0.25rem, 0.66vw, 0.5rem)',
            padding: 'clamp(0.5rem, 1.25vw, 1rem)',
          }}
        >
          <div
            className='bg-primary-300 flex-center aspect-square rounded-full shadow-[0_0_17px_rgba(0,147,221,0.6)] [&>*]:h-auto [&>*]:w-full'
            style={{
              width: 'clamp(1.38rem, 3.31vw, 2.5rem)',
              padding: 'clamp(0.31rem, 0.83vw, 0.63rem)',
            }}
          >
            {icon}
          </div>
          <h3
            className='text-neutral-25 font-semibold'
            style={{
              fontSize: 'clamp(0.47rem, 1.16vw, 0.88rem)',
              lineHeight: 'clamp(0.94rem, 2.32vw, 1.75rem)',
              marginTop: 'clamp(0.25rem, 0.66vw, 0.5rem)',
            }}
          >
            {title}
          </h3>
          <p
            className='font-regular text-neutral-400'
            style={{
              fontSize: 'clamp(0.5rem, calc((14 / 1208) * 100vw), 0.875rem)',
              lineHeight:
                'clamp(0.9375rem, calc((28 / 1208) * 100vw), 1.75rem)',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </SkewMotion>
  );
};

export default FeatureCard;
