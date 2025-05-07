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
      className={cn('relative h-16 w-full overflow-visible', className)}
      {...props}
    >
      {/* Track (garis 1px di tengah) */}
      <div className='absolute top-1/2 left-0 z-0 h-px w-full -translate-y-1/2 bg-neutral-800' />

      {/* Progress Indicator */}
      <ProgressPrimitive.Indicator
        data-slot='progress-indicator'
        className='bg-primary-300 absolute top-1/2 left-0 z-10 flex h-16 -translate-y-1/2 items-center rounded-2xl bg-[repeating-linear-gradient(55deg,#717680_0px,#717680_1px,#396600_1px,#396600_20px)] px-4 transition-all'
        style={{ width: `${value || 0}%` }}
      >
        {/* Label inside the indicator */}
        {label && (
          <span className='md:text-lg-semibold text-sm-semibold text-neutral-25 absolute top-1/2 left-4 z-20 -translate-y-1/2'>
            {label}
          </span>
        )}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
