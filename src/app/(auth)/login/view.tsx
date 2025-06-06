import heroLogin from '@/assets/hero-login.png';
import { Logo } from '@/assets/icons/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useLoginModel } from './model';

type LoginViewProps = ReturnType<typeof useLoginModel>;

export function LoginView({
  onSubmit,
  register,
  errors,
  isLoading,
}: LoginViewProps) {
  return (
    <div className='flex h-screen items-center justify-center bg-login'>
      <div className='mx-2 md:mx-0 bg-white flex shadow-[0px_100px_200px_0px_#00000040] rounded-[20px] p-2.5 w-full max-w-[756px] items-center h-full max-h-[498px] justify-between'>
        <form
          noValidate
          onSubmit={onSubmit}
          className='flex flex-col gap-9 p-5 w-full'
        >
          <Logo />

          <h1 className='text-[26px] font-bold leading-[15px] text-primary'>
            Bem-vindo de volta
            <small className='block text-xs font-normal text-secondary/50'>
              Entre com sua conta para acessar o painel.
            </small>
          </h1>

          <div className='flex flex-col gap-5'>
            <Input
              type='email'
              label='E-mail'
              autoComplete='email'
              placeholder='seunome@seuservidor.com'
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              label='Senha'
              type='password'
              placeholder='Digite aqui'
              autoComplete='new-password'
              {...register('password')}
              error={errors.password?.message}
            />
            <Button isLoading={isLoading} type='submit'>
              Entrar
            </Button>
          </div>
        </form>

        <Image
          src={heroLogin}
          alt='Hero Login'
          className='max-h-[478px] max-w-[397px] hidden md:block'
        />
      </div>
    </div>
  );
}
