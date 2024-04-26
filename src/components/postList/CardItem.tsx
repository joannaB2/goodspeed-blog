import { Post } from '@/types/Post';
import { format } from 'date-fns';
import Link from 'next/link';
import Tags from './Tags';

interface CardItemProps {
  post: Post;
}

const CardItem = ({ post }: CardItemProps) => (
  <li className="flex flex-col justify-between rounded border border-violet-500 p-2 py-4">
    <div className="mb-1 flex justify-between">
      <Tags tags={post.tags} />
      {format(post.date, 'dd/MM/yyyy')}
    </div>
    <div className="flex items-center">{post.title}</div>
    <Link
      className="mt-4 block rounded bg-violet-500 p-2 text-center"
      href={`/post/${post.id}`}
    >
      Czytaj dalej
    </Link>
  </li>
);

export default CardItem;
