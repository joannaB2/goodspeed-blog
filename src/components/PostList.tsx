'use client';

import { usePostStore } from '@/store/postStore';
import { Box, Heading } from '@radix-ui/themes';
import Link from 'next/link';

const PostList = () => {
  const { postList } = usePostStore();

  return (
    <>
      <Heading as="h2" className="mb-4">
        Lista postów
      </Heading>
      <Box className="flex"></Box>
      <ul className="divide-y">
        {postList?.map((post) => (
          <li className="py-4" key={post.id}>
            {post.title} <Link href={`/post/${post.id}`}>Czytaj dalej</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
