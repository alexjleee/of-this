import { NavLink } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Header = () => {
  const copyUrl = () => {
    const homeUrl = `${window.location.origin}`;
    navigator.clipboard
      .writeText(homeUrl)
      .then(() => {
        console.log('Copied');
      })
      .catch((err) => {
        console.log('Failed to copy', err);
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
