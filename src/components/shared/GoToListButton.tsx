import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import SharedTooltip from './SharedTooltip';

const GoToListButton = () => {
  const router = useRouter();

  return (
    <SharedTooltip message="Wróć na listę postów">
      <IconButton onClick={() => router.push('/')}>
        <ArrowLeftIcon />
      </IconButton>
    </SharedTooltip>
  );
};

export default GoToListButton;
