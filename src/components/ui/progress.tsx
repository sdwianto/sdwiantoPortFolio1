'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils';

type CustomProgressProps = {
  label?: string;
  value: number;
} & React.ComponentProps<typeof ProgressPrimitive.Root>;

function Progress({ className, value, label, ...props }: CustomProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      className={cn('relative md:h-16 h-8 w-full', className)}
      {...props}
    >
      {/* Track (garis 1px di tengah) */}
      <div className='absolute top-1/2 left-0 z-0 h-px w-full -translate-y-1/2 bg-neutral-800' />

      {/* Progress Indicator */}
      <ProgressPrimitive.Indicator
        data-slot='progress-indicator'
        className='bg-primary-300 absolute top-1/2 left-0 z-10 flex md:h-16 -translate-y-1/2 items-center md:rounded-3xl rounded-xl 
        md:bg-[repeating-linear-gradient(65deg,#5e6951_0px,#5e6951_1px,#396600_1px,#396600_16px)] bg-[repeating-linear-gradient(65deg,#5e6951_0px,#5e6951_1px,#396600_1px,#396600_12px)] transition-all h-10 md:px-6 md:py-2 px-6 py-1.5'
        style={{ width: `${value || 0}%` }}
      >
        {/* Label inside the indicator */}
        {label && (
          <span className='md:text-lg-semibold text-sm font-semibold text-neutral-25 absolute top-1/2  z-20 -translate-y-1/2 '>
            {label}
          </span>
        )}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
