import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';

const buttonVariants = cva(
  'h-10 gap-2 flex items-center px-4 justify-center  leading-[15px] font-medium rounded-full text-xs hover:scale-105 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/80 text-white',
        outline: 'bg-application hover:bg-application/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface IButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

export function Button({
  className,
  disabled,
  children,
  variant,
  isLoading,
  asChild = false,
  ...props
}: IButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(
        buttonVariants({
          className,
          variant,
        })
      )}
      disabled={!!disabled || !!isLoading}
      {...props}
    >
      {isLoading && <LoaderCircle className='mx-auto size-4 animate-spin' />}
      {!isLoading && children}
    </Comp>
  );
}
