'use client';

import { RoleProvider } from '@/contexts/useRoleContext';
import { ReactNode } from 'react';

interface ContextsProviderProps {
  children: ReactNode;
}

const ContextsProvider = ({ children }: ContextsProviderProps) => (
  <RoleProvider>{children}</RoleProvider>
);

export default ContextsProvider;
