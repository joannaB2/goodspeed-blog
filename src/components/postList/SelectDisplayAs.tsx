import React, { SetStateAction, useState } from 'react';
import * as RadixSelect from '@radix-ui/react-select';

import { ChevronUpIcon } from '@radix-ui/react-icons';

interface SelectDisplayAs {
  setTagFilter: React.Dispatch<SetStateAction<string | null>>;
  tags: string[];
}

const SelectDisplayAs = ({ setTagFilter, tags }: SelectDisplayAs) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    const filterValue = value === 'all' ? '' : value;
    setValue(filterValue);

    setTagFilter(filterValue);
  };

  return (
    <RadixSelect.Root
      value={value}
      onValueChange={onChange}
      open={open}
      onOpenChange={setOpen}
      defaultValue="list"
    >
      <RadixSelect.Trigger
        aria-label="tags"
        className="text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex h-[35px] w-[150px] items-center justify-between gap-[5px] rounded border px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      >
        <RadixSelect.Value  placeholder="Wyszukaj po tagach">
          {value}
        </RadixSelect.Value>
        <RadixSelect.Icon className="select-icon">
          <ChevronUpIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Content
        className="w-[150px] overflow-hidden rounded-md  border bg-neutral-800  p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        role="dialog"
        aria-label="Languages"
        position="popper"
        sideOffset={4}
      >
        <RadixSelect.Item value={'all'}>
          Brak
        </RadixSelect.Item>
        {tags.map((tag: string) => (
          <RadixSelect.Item value={tag}>
            {tag}
          </RadixSelect.Item>
        ))}
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

export default SelectDisplayAs;
