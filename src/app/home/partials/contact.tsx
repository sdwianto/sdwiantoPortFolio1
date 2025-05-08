'use client';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters long'),

  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters long'),
});
const Contact = () => {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: data.name, email: data.email, message: data.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }
  return (
    <div
      className='custom-container relative flex flex-wrap items-center gap-10 px-4 py-40 md:gap-30.5 md:px-32 md:pt-20 md:pb-30'
      id='contact'
    >
      {/* boxes */}
      <div className='absolute top-0 left-0 z-20 md:top-0 md:left-0'>
        <Image
          src={'/icons/3boxes.svg'}
          alt='3 boxes'
          width='138'
          height='92'
          className='h-[69px] w-[103.5px] rotate-[180deg] md:h-[92px] md:w-[138px]'
        />
      </div>
      <div className='flex-[2.4] basis-80'>
        <div className='relative w-fit'>
          <Image
            src='/images/Young-Man1.png'
            alt='young-man1'
            width={419}
            height={556}
            className='grayscale'
          />
          <div className='bg-base-black absolute inset-0 z-10 opacity-60'></div>
          <div className='absolute inset-0 z-10 bg-gradient-to-t from-stone-950 to-transparent' />
          <div className='from-base-black absolute inset-x-0 bottom-0 z-10 h-[60%] bg-gradient-to-t to-transparent' />
        </div>
        <div className='absolute z-11 mt-[-140] ml-24 gap-4 md:mt-[-42] md:mb-26.5 md:ml-20.5 md:items-center md:justify-center'>
          <div className='flex flex-wrap'>
            <Image
              src={'/icons/Dribble.svg'}
              alt='drible'
              width='64'
              height='64'
              className='h-12 w-12 md:h-16 md:w-16'
            />
            <Image
              src={'/icons/Instagram.svg'}
              alt='instagram'
              width='64'
              height='64'
              className='h-12 w-12 md:h-16 md:w-16'
            />
            <Image
              src={'/icons/Linkedin.svg'}
              alt='linkedin'
              width='64'
              height='64'
              className='h-12 w-12 md:h-16 md:w-16'
            />
          </div>
          <div className='start-center items-center justify-center text-center'>
            <p className='md:text-xl-bold text-md-bold text-base-white md:gap-1'>
              Edwin Anderson
            </p>
            <div className='flex-center flex items-center gap-3'>
              <Icon
                icon='ion:ellipse'
                width='12'
                height='12'
                className='text-primary-200'
              />
              <p className='md:text-md-semibold text-sm-text-sm-semibold text-neutral-400'>
                Available for work
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex-[7.6] basis-80 flex-wrap gap-2 md:text-left'>
        <div>
          <p className='text-sm-medium md:text-md-medium'>CONTACT</p>
          <h1 className='display-md-extrabold md:display-2xl-extrabold text-neutral-25 md:mt-2'>
            LET’S GET IN TOUCH
          </h1>{' '}
        </div>
        <div className='mt-6'>
          <Form {...form}>
            <form
              className='max-w-160 space-y-6 md:mx-auto'
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-neutral-25 md:text-md-semibold text-sm-semibold'>
                      Name
                    </FormLabel>
                    <Input
                      className='bg-base-black h-12 rounded-xl border border-neutral-800 md:h-14'
                      disabled={loading}
                      placeholder=''
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-neutral-25 md:text-md-semibold text-sm-semibold'>
                      Email
                    </FormLabel>
                    <Input
                      className='bg-base-black h-12 rounded-xl border border-neutral-800 md:h-14'
                      disabled={loading}
                      placeholder=''
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-neutral-25 md:text-md-semibold text-sm-semibold'>
                      Message
                    </FormLabel>
                    <Textarea
                      className='bg-base-black h-30 rounded-xl border border-neutral-800 md:h-45'
                      disabled={loading}
                      placeholder=''
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={loading}
                className='bg-primary-200 md:text-md-bold text-sm-bold mt-6 w-full p-2 text-neutral-950 md:mt-10'
              >
                {loading ? (
                  <ClipLoader size={20} color='neutral-800' />
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Form>
          <FormStatusDialog
            open={showDialog}
            variant={variant}
            onOpenChange={setShowDialog}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
