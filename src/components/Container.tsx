'use client';

import { Box } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  <Box className="container p-4">{children}</Box>;
};

export default Container;
