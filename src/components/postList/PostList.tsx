'use client';

import { useRoleContext } from '@/contexts/useRoleContext';
import { usePostStore } from '@/store/postStore';
import { format } from 'date-fns';
import Link from 'next/link';
import ListItem from './ListItem';
import CardItem from './CardItem';
import { ListMode } from '@/app/page';
import { Post } from '@/types/Post';

interface PostListProps {
  mode: ListMode;
  postsToDisplay: Post[];
}

const PostList = ({ mode, postsToDisplay }: PostListProps) => {
  const ulListClasses = 'divide-y';
  const ulCardClasses = 'grid grid-cols-3 gap-4';

  return (
    <>
      <ul className={mode === 'cards' ? ulCardClasses : ulListClasses}>
        {postsToDisplay?.map((post) => {
          if (mode === 'list') return <ListItem post={post} key={post.id} />;
          return <CardItem post={post} key={post.id} />;
        })}
      </ul>
    </>
  );
};

export default PostList;
