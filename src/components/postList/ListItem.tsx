import { Post } from '@/types/Post';
import { format } from 'date-fns';
import Link from 'next/link';

interface ListItemProps {
  post: Post;
}

const ListItem = ({ post }: ListItemProps) => (
  <li className="flex justify-between py-4" key={post.id}>
    <div className="flex items-center">
      {format(post.date, 'dd/MM/yyyy')}{' '}
      <div className="mx-2 h-[20px] w-[2px] bg-violet-500" /> {post.title}
    </div>
    <div>
      <Link
        className="rounded border border-violet-500 p-2"
        href={`/post/${post.id}`}
      >
        Czytaj dalej
      </Link>
    </div>
  </li>
);

export default ListItem;
