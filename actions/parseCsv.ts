'use server';

import path from 'path';

import { parseCSVFile, sortFind } from '@/utils';

import { IFilePayload } from '@/interfaces';

export async function processCsv(sortBy?: string) {
  try {
    const filePath = path.join(process.cwd(), 'data.csv');

    const result: IFilePayload[] = (await parseCSVFile(
      filePath
    )) as IFilePayload[];

    const sortedItems = sortFind(result, sortBy) as IFilePayload[];
    return sortedItems;
  } catch (error) {
    console.log(error);
  }
}
