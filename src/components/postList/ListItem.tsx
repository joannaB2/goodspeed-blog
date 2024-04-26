import { useRoleContext } from '@/contexts/useRoleContext';
import { Post } from '@/types/Post';
import { ROLE } from '@/types/Role';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import Link from 'next/link';

interface ListItemProps {
  post: Post;
}

const ListItem = ({ post }: ListItemProps) => {
  const { selectedRole } = useRoleContext();

  return (
    <li className="flex justify-between py-4" key={post.id}>
      <div className="flex items-center">
        {format(post.date, 'dd/MM/yyyy')}{' '}
        <div className="mx-2 h-[20px] w-[2px] bg-violet-500" /> {post.title}
      </div>
      <div className="flex space-x-4">
        <Link
          className="rounded border border-violet-500 p-2"
          href={`/post/${post.id}`}
        >
          Czytaj dalej
        </Link>
        {selectedRole === ROLE.AUTHOR && (
          <Link
            className="flex content-center rounded border border-violet-500 p-2"
            href={`/post/${post.id}/edit`}
          >
            Edytuj
          </Link>
        )}
      </div>
    </li>
  );
};

export default ListItem;
