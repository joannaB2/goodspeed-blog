'use client';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

const toggleGroupItemClasses =
  'hover:bg-violet-500 ease border-1 border-violet-500 color-violet-500 data-[state=on]:bg-violet-600 data-[state=on]:text-violet12 flex items-center p-2 justify-center bg-inherit text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-black focus:outline-none';

const Header = () => {
  return (
    <>
      <NavigationMenu.Root className="flex w-full justify-between border-b-2 border-violet-500 p-4">
        <NavigationMenu.List>
          <NavigationMenu.Item className="text-xl">
            GOODSPEED BLOG
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <ToggleGroup.Root
          className="shadow-violetA4 inline-flex space-x-px rounded"
          type="single"
          defaultValue="reader"
          aria-label="view-settings"
        >
          <ToggleGroup.Item className={toggleGroupItemClasses} value="author">
            Autor
          </ToggleGroup.Item>
          <ToggleGroup.Item className={toggleGroupItemClasses} value="reader">
            Czytelnik
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </NavigationMenu.Root>
    </>
  );
};

export default Header;
