'use client';

import { Box, Heading } from '@radix-ui/themes';
import PostList from '@/components/postList/PostList';
import Link from 'next/link';
import { PlusIcon } from '@radix-ui/react-icons';
import { useRoleContext } from '@/contexts/useRoleContext';
import { ROLE } from '@/types/Role';
import { useState } from 'react';
import DisplayListAs from '@/components/filters/DisplayListAs';
import { usePostStore } from '@/store/postStore';
import { emptyListAuthor, emptyListReader } from '@/types/Post';
import SelectTag from '@/components/filters/SelectTag';

export type ListMode = 'list' | 'cards';
export const LIST_MODE = {
  LIST: 'list',
  CARDS: 'cards',
} as const;

export default function PostListPage() {
  const { selectedRole } = useRoleContext();
  const [displayMode, setDisplayMode] = useState<ListMode>(LIST_MODE.LIST);
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const { postList } = usePostStore();

  const allPossibleTagsArray = postList.length
    ? postList
        .map((post) => post.tags.split(','))
        .flat()
        .filter((item) => item !== '')
    : [];

  const uniqueTags = Array.from(new Set(allPossibleTagsArray));

  const postsToDisplay = postList.filter((post) => {
    if (tagFilter !== null) {
      return post.tags.includes(tagFilter);
    }
    return post;
  });

  const emptyListMessage =
    selectedRole === ROLE.AUTHOR ? emptyListAuthor : emptyListReader;

  return (
    <Box>
      <Box className="mb-4 flex  items-center justify-between">
        <h2 className=" text-2xl">Lista postów</h2>
        <Box className="flex items-center space-x-4">
          {uniqueTags.length !== 0 && (
            <SelectTag setTagFilter={setTagFilter} tags={uniqueTags} />
          )}

          <DisplayListAs setDisplayMode={setDisplayMode} />
          {selectedRole === ROLE.AUTHOR && (
            <Link className="rounded bg-violet-500 p-2" href={`/post`}>
              <PlusIcon />
            </Link>
          )}
        </Box>
      </Box>
      {postList.length ? (
        <PostList mode={displayMode} postsToDisplay={postsToDisplay} />
      ) : (
        <Heading as="h3" align={'center'} m={'2'}>
          {emptyListMessage}
        </Heading>
      )}
    </Box>
  );
}
