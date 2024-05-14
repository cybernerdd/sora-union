import fs from 'fs';
import csv from 'csv-parser';

import { CREATED_AT, FILE_NAME_ASC, FILE_NAME_DESC } from '@/constants';
import { IFilePayload } from '@/interfaces';

export function parseCSVFile(filePath: string) {
  return new Promise((resolve, reject) => {
    const result: IFilePayload[] = [];

    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';', headers: false }))
      .on('data', (data) => {
        result.push({
          createdAt: Object.values(data)[0] as string,
          fileName: Object.values(data)[1] as string,
        });
      })
      .on('end', () => resolve(result));
  });
}

export function sortFind(data: IFilePayload[], sortBy?: string) {
  switch (sortBy) {
    case CREATED_AT:
      return data.sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt, undefined, {
          numeric: true,
        })
      );

    case FILE_NAME_ASC:
      return data.sort((a, b) =>
        a.fileName.localeCompare(b.fileName, undefined, { numeric: true })
      );

    case FILE_NAME_DESC:
      return data.sort((a, b) =>
        b.fileName.localeCompare(a.fileName, undefined, { numeric: true })
      );

    default:
      return data;
  }
}
