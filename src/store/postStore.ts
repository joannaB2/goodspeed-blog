import { Post } from '@/types/Post';
import { create } from 'zustand';

interface PostState {
  postList: Post[] | [],
  addPost: (post: Post) => void;
  editPost: (post: Post) => void;
}

export const usePostStore = create<PostState>((set) => ({
    postList: [],
    addPost: (post: Post) => set((state) => ({ postList: [...state.postList, post] })),
    editPost: (post: Post) => {
        set((state) => ({
          postList: state.postList.map((postFromState) =>
          postFromState.id === post.id
              ? (post as Post)
              : postFromState
          ),
        }));
      },
}));