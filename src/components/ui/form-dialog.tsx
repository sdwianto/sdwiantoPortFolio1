import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';

  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader className='relative' />
        <Image
          src={
            variant === 'success'
              ? '/icons/message-sent.svg'
              : '/icons/message-sent-failed.svg'
          }
          alt={variant === 'success' ? 'success' : 'failed'}
          width={147}
          height={133}
          sizes='(max-width: 768px) 120px, 147px'
          className='absolute top-0 right-1/2 h-[110px] w-[120px] translate-x-1/2 -translate-y-1/2 md:h-[133px] md:w-[147px]'
        />
        <DialogBody>
          <div className='flex flex-col gap-2'>
            <DialogTitle>
              {variant === 'success'
                ? 'Message Sent Successfully!'
                : 'Message not sent!'}{' '}
            </DialogTitle>
            <DialogDescription>
              {variant === 'success'
                ? "Thank you for reaching out. I'll get back to you as soon as possible."
                : 'Something went wrong on our end. Please try again in a moment.'}
            </DialogDescription>{' '}
          </div>
          <DialogClose asChild>
            <Button className='max-25.625 bg-primary-200 md:text-md mx-auto mt-6 mb-6 text-sm font-bold whitespace-nowrap text-neutral-950'>
              {loading ? 'Sending...' : 'Back to Home'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
