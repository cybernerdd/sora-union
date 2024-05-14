import { Fragment, useMemo, useState } from 'react';

import {
  CREATED_AT,
  DropdownOptions,
  FILE_NAME_ASC,
  FILE_NAME_DESC,
} from '@/constants';
import { IDropdownProps, SortByOption } from '@/interfaces';

export default function Dropdown({ onChange, sortBy }: IDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleClick = (value: SortByOption) => {
    onChange(value);
    setOpen(false);
  };

  const dropDownLabel = useMemo(() => {
    if (sortBy === CREATED_AT) {
      return 'Created At';
    } else if (sortBy === FILE_NAME_ASC) {
      return 'Filename Ascending';
    } else if (sortBy === FILE_NAME_DESC) {
      return 'Filename Descending';
    } else {
      return 'Select Sort Order';
    }
  }, [sortBy]);

  return (
    <div className='flex items-center justify-center mb-10 border w-max rounded p-2'>
      <button onClick={() => setOpen((prev) => !prev)}>{dropDownLabel}</button>
      {open && (
        <div
          className={
            'absolute z-100 mt-2 w-max rounded-lg bg-white text-black'
          }>
          {DropdownOptions.map((option) => (
            <button
              key={option.value}
              className={`block px-4 py-2 text-sm w-full ${
                option.value === sortBy && 'bg-slate-500'
              }`}
              onClick={() => handleClick(option.value as SortByOption)}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
