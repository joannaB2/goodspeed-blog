import { Post } from '@/types/Post';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PostStore {
  postList: Post[] | [];
  addPost: (post: Post) => void;
  // editPost: (post: Post) => void;
}

export const usePostStore = create<PostStore>()(
  persist(
    (set, get) => ({
      postList: [],
      addPost: (post: Post) => {
        const { postList } = get();
        const updatedList = [...postList, post];
        set({ postList: updatedList });
      },
    }),
    { name: 'post-list' },
  ),
);
