'use client';

import { processCsv } from '@/actions/parseCsv';
import Card from '@/components/Card';
import Dropdown from '@/components/Dropdown';
import { CREATED_AT } from '@/constants';
import { IFilePayload, SortByOption } from '@/interfaces';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState<IFilePayload[]>([]);
  const [sortBy, setSortBy] = useState<SortByOption>(CREATED_AT);

  useEffect(() => {
    (async () => {
      const response = (await processCsv(sortBy)) as IFilePayload[];

      setData(response);
    })();
  }, [sortBy]);

  return (
    <main className='w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto pt-10 md:pt-16 lg:pt-24'>
      <div className='flex justify-center'>
        <Dropdown onChange={(value) => setSortBy(value)} sortBy={sortBy} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {data?.map((item, ind) => (
          <Card key={ind} item={item} />
        ))}
      </div>
    </main>
  );
}
