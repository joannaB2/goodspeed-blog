'use client';

import PostForm from '@/components/PostForm';
import GoToListButton from '@/components/shared/GoToListButton';
import { useRoleContext } from '@/contexts/useRoleContext';
import { ROLE } from '@/types/Role';
import { Box, Heading } from '@radix-ui/themes';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AddNewPostPage() {
  const { selectedRole } = useRoleContext();
  useEffect(() => {
    if (selectedRole !== ROLE.AUTHOR) {
      redirect('/');
    }
  }, [selectedRole]);
  return (
    <Box>
      <Heading as="h2" align={'left'} mb={'4'}>
        <GoToListButton />
        <span className="ml-6">Dodaj nowego posta</span>
      </Heading>
      <PostForm />
    </Box>
  );
}
