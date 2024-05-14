import { IFilePayload } from '@/interfaces';

export default function Card({ item }: { item: IFilePayload }) {
  return (
    <div className='border shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg p-3 flex flex-col gap-2 shadow-white'>
      <p className='text-lg font-bold'>{item.createdAt}</p>
      <p className='text-[16px]'>{item.fileName}</p>
    </div>
  );
}
