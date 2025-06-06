'use client';

import { cn } from '@/lib/utils';
import { Eye, EyeClosed } from 'lucide-react';
import { ComponentProps, useState } from 'react';
import { Label } from './label';

interface IInputProps extends ComponentProps<'input'> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({
  className,
  label,
  error,
  type,
  icon,
  ...props
}: IInputProps) {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className='flex flex-col gap-1.5'>
      {label && <Label htmlFor={label}>{label}</Label>}

      <div className='relative'>
        {icon && (
          <span className='absolute left-4 top-1/2 text-black/20 -translate-y-1/2'>
            {icon}
          </span>
        )}

        <input
          type={showPassword ? 'text' : type}
          id={label}
          data-slot='input'
          className={cn(
            'flex h-10 w-full bg-transparent px-3 py-1 text-base transition-all outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-application rounded-full placeholder:text-placeholder',
            error && 'border-destructive border',
            icon && 'pl-12',
            icon && 'placeholder:text-black/20 placeholder:font-bold',
            className
          )}
          {...props}
        />

        {isPassword && (
          <button
            type='button'
            onClick={handleTogglePasswordVisibility}
            className='right-5 cursor-pointer text-primary top-1/2 -translate-y-1/2 absolute z-10'
          >
            {!showPassword && <Eye />}
            {showPassword && <EyeClosed />}
          </button>
        )}
      </div>

      {error && <span className='text-xs text-destructive mt-1'>{error}</span>}
    </div>
  );
}
