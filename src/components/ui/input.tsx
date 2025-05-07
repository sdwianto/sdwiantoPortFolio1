import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular h-11 w-full rounded-md bg-neutral-900 px-3 py-2 outline-none placeholder:text-neutral-500 md:h-12 md:rounded-xl md:px-4 md:py-2.25',
        'focus:ring-[1px] focus:ring-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Input };
