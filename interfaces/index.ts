import { CREATED_AT, FILE_NAME_ASC, FILE_NAME_DESC } from '@/constants';

export interface IFilePayload {
  createdAt: string;
  fileName: string;
}

export type SortByOption =
  | typeof CREATED_AT
  | typeof FILE_NAME_ASC
  | typeof FILE_NAME_DESC;

export interface IDropdownProps {
  onChange: (value: SortByOption) => void;
  sortBy: SortByOption;
}
