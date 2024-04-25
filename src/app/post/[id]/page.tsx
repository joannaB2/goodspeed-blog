'use client';

import { usePostStore } from '@/store/postStore';
import { Post } from '@/types/Post';
import { Box } from '@radix-ui/themes';
import { useParams, useRouter } from 'next/navigation';
import { format } from 'date-fns';
import GoToListButton from '@/components/shared/GoToListButton';

const PostView = () => {
  const params = useParams<{ id: string }>();
  const { postList } = usePostStore();
  const post = postList.find((post: Post) => post.id === params.id);

  if (!post) return null;

  return (
    <>
      <GoToListButton />
      <Box className="mt-4 rounded border border-solid border-slate-800 p-4">
        <article className="space-y-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex text-2xl font-bold">{post.title}</h2>
            <span>{post.date !== null && format(post.date, 'MM/dd/yyyy')}</span>
          </div>
          <section>{post.tags.split(',').map((tag) => ` #${tag}`)}</section>
          <section className="font-semibold">{post.lead}</section>
          <section>{post.content}</section>
        </article>
      </Box>
    </>
  );
};

export default PostView;
