'use client';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import RoleControl from './RoleControl';

const Header = () => {
  return (
    <NavigationMenu.Root className="flex w-full justify-between border-b-2 border-violet-500 p-4">
      <NavigationMenu.List>
        <NavigationMenu.Item className="text-xl">
          GOODSPEED BLOG
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <RoleControl />
    </NavigationMenu.Root>
  );
};

export default Header;
