import { NavLink } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const { toast } = useToast();

  const copyUrl = () => {
    const homeUrl = `${window.location.origin}`;
    navigator.clipboard
      .writeText(homeUrl)
      .then(() => {
        toast({
          title: '링크가 복사되었습니다',
          description: '친구들에게 Of this를 공유해보세요 :)',
          duration: 2000,
        });
      })
      .catch((err) => {
        console.log('Failed to copy', err);
        toast({
          title: '링크를 복사할 수 없습니다',
          description: '죄송합니다. 잠시 후 다시 시도해주세요.',
          duration: 2000,
          variant: 'destructive',
        });
      });
  };

  return (
    <header className='dark w-full bg-zinc-950'>
      <div className='flex justify-between items-center max-w-4xl mx-auto px-4 py-4 text-zinc-50'>
        <NavLink to='/'>
          <span className='italic font-semibold'>_of this</span>
        </NavLink>
        <Button onClick={copyUrl} variant='outline' size='sm'>
          <SquareArrowOutUpRight />
          <span>공유하기</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
