import { Role } from '@/types/Role';
import { createContext, useContext, useEffect, useState } from 'react';

interface RoleProps {
  selectedRole: string;
  setSelectedRole: React.Dispatch<React.SetStateAction<Role>>;
}

const RoleContext = createContext<RoleProps>({
  selectedRole: '',
  setSelectedRole: () => {},
});

export const useRoleContext = () => {
  const roleContext = useContext(RoleContext);
  if (roleContext === undefined) {
    throw new Error('useRoleContext must be inside RoleProvider');
  }
  return roleContext;
};

interface RoleProviderProps {
  children: React.ReactNode;
}

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState<Role>('reader');

  return (
    <RoleContext.Provider
      value={{
        selectedRole,
        setSelectedRole,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
