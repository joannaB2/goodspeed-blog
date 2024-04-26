'use client';

import PostForm from '@/components/PostForm';
import GoToListButton from '@/components/shared/GoToListButton';
import { useRoleContext } from '@/contexts/useRoleContext';
import { usePostStore } from '@/store/postStore';
import { ROLE } from '@/types/Role';
import { Box, Heading } from '@radix-ui/themes';
import { redirect, useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function EditPostPage() {
  const params = useParams<{ id: string }>();
  const { postList } = usePostStore();
  const { selectedRole } = useRoleContext();

  const defaultValues = postList.find((post) => post.id === params.id);

  useEffect(() => {
    if (selectedRole !== ROLE.AUTHOR) {
      redirect('/');
    }
  }, [selectedRole]);
  return (
    <Box>
      <Heading as="h2" align={'left'} mb={'4'}>
        <GoToListButton />
        <span className="ml-6">Edytuj post</span>
      </Heading>
      <PostForm defaultValues={defaultValues} />
    </Box>
  );
}
