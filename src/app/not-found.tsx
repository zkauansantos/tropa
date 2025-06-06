import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-application'>
      <div
        className='bg-white shadow-xs rounded-lg border p-8 flex itemce 
    justify-center flex-col gap-4'
      >
        <h1 className='text-6xl font-bold text-primary text-center'>404</h1>

        <h3 className='text-tertiary'>Ops! Página não encontrada.</h3>

        <Link href='/' className='w-full'>
          <Button className='w-full'>Voltar para o início</Button>
        </Link>
      </div>
    </div>
  );
}
