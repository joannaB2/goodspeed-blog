'use client';

import { usePostStore } from '@/store/postStore';
import { Heading } from '@radix-ui/themes';

const PostList = () => {
  const { postList } = usePostStore();

  return (
    <>
      <Heading>Lista postów</Heading>
      <ul>{postList?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
};

export default PostList;
