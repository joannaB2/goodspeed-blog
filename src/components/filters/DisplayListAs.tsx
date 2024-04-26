'use client';

import { LIST_MODE, ListMode } from '@/app/page';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { SetStateAction } from 'react';

interface DisplayListAsProps {
  setDisplayMode: React.Dispatch<SetStateAction<ListMode>>;
}

const toggleGroupItemClasses =
  'hover:border-violet-500  data-[state=on]:border transition duration-300 border-violet-300 color-violet-400 data-[state=on]:border-violet-500  data-[state=on]:text-violet-500 flex items-center p-2 justify-center bg-inherit text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-black focus:outline-none';

const DisplayListAs = ({ setDisplayMode }: DisplayListAsProps) => {
  return (
    <ToggleGroup.Root
      className="shadow-violetA4 inline-flex space-x-px rounded"
      type="single"
      defaultValue={'list'}
      aria-label="view-settings"
      onValueChange={(value: ListMode) => {
        setDisplayMode(value);
      }}
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value={LIST_MODE.LIST}
      >
        Lista
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value={LIST_MODE.CARDS}
      >
        Karty
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default DisplayListAs;
