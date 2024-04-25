import PostForm from '@/components/PostForm';
import { Box } from '@radix-ui/themes';

export default function AddNewPostPage() {
  return (
    <Box>
      <h2>Dodaj nowy post</h2>
      <PostForm />
    </Box>
  );
}
