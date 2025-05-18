import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-[-100] border-t border-neutral-800 md:mt-0'>
      <div className='custom-container flex h-16 items-center justify-center md:h-20'>
        {/* boxes */}
        <div className='absolute right-[0] bottom-[-14190] z-20 md:right-[214] md:bottom-[-9300]'>
          <Image
            src={'/icons/3boxes.svg'}
            alt='drible'
            width='138'
            height='92'
            className='h-[59px] w-[93.5px] md:h-[92px] md:w-[138px]'
          />
        </div>
        <p className='text-xs-regular md:text-md-regular text-neutral-400'>
          © 2025 Singgih Dwianto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
