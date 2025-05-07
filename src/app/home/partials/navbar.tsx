'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import {
  SheetTrigger,
  Sheet,
  SheetClose,
  SheetContent,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-20 w-full border-b border-neutral-800'>
        <div className='flex items-center gap-2 p-4'>
          <div className='border-base-white w-6 border-t md:w-10'></div>
          <span className='text-primary-200 text-md-bold md:text-xl-bold'>
            Edwin Anderson
          </span>
        </div>

        <nav className='hidden lg:block'>
          <ul className='flex-start gap-8'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-primary-200 text-md-regular p-2'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>{' '}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Icon
              icon='heroicons-solid:menu-alt-3'
              width='24'
              height='24'
              className='text-base-white cursor-pointer lg:hidden'
            />
          </SheetTrigger>
          <SheetContent>
            <nav className='mt-24 pl-4'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:text-primary-200 text-md-regular py-4'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
