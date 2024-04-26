'use client';

import { useRoleContext } from '@/contexts/useRoleContext';
import { Role } from '@/types/Role';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

const toggleGroupItemClasses =
  'hover:bg-violet-500  border-1 transition duration-300 border-violet-500 color-violet-500 data-[state=on]:bg-violet-600 data-[state=on]:text-violet12 flex items-center p-2 justify-center bg-inherit text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-black focus:outline-none';

const RoleControl = () => {
  const { selectedRole, setSelectedRole } = useRoleContext();

  return (
    <ToggleGroup.Root
      className="shadow-violetA4 inline-flex space-x-px rounded"
      type="single"
      defaultValue={selectedRole}
      aria-label="view-settings"
      onValueChange={(value: Role) => {
        setSelectedRole(value);
      }}
    >
      <ToggleGroup.Item className={toggleGroupItemClasses} value="author">
        Autor
      </ToggleGroup.Item>
      <ToggleGroup.Item className={toggleGroupItemClasses} value="reader">
        Czytelnik
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default RoleControl;
