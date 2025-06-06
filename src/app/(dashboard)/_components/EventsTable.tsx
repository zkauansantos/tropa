import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { EllipsisVertical, Plus, Search } from 'lucide-react';

const data = [
  {
    eventName: 'Clube do Laço Coração Pantaneiro',
    teamCount: 10,
    isActive: true,
    betweenDates: '01/01/2023 - 31/12/2023',
  },
  {
    eventName: 'Clube do Laço Coração Pantaneiro',
    teamCount: 10,
    isActive: true,
    betweenDates: '01/01/2023 - 31/12/2023',
  },
];

export function EventsTable() {
  return (
    <div className='mt-3'>
      <h2 className='text-primary/90 text-xl font-bold mb-[30px]'>
        Todos Eventos
      </h2>

      <div className='py-8 px-5 flex flex-col bg-white border rounded-[10px]'>
        <div className='self-end flex flex-wrap mb-3 items-center gap-2.5'>
          <Input
            icon={<Search className='size-4' />}
            placeholder='Buscar eventos'
          />

          <Button>
            <Plus />
            Inserir Novo
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[300px]'>Nome do Evento</TableHead>
              <TableHead className='w-[150px]'>Quantidade de Equipes</TableHead>
              <TableHead className='w-[150px]'>Ativo</TableHead>
              <TableHead className='w-[200px]'>Período</TableHead>
              <TableHead className='w-[100px]'></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={`${item.eventName}-${index}`}>
                <TableCell>{item.eventName}</TableCell>
                <TableCell>{item.teamCount}</TableCell>
                <TableCell>{item.isActive ? 'Sim' : 'Não'}</TableCell>
                <TableCell>{item.betweenDates}</TableCell>
                <TableCell className='flex justify-end'>
                  <EllipsisVertical className='text-primary' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='flex items-center flex-wrap gap-2.5 self-end mt-7'>
          <Button variant='outline'>Anterior</Button>
          <Button className='hidden md:block'>1</Button>
          <Button className='hidden md:block' variant='outline'>
            2
          </Button>
          <Button className='hidden md:block' variant='outline'>
            3
          </Button>
          <Button>Próxima</Button>
        </div>
      </div>
    </div>
  );
}
