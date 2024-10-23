import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full bg-zinc-950'>
      <div className='flex justify-between items-center max-w-4xl mx-auto px-4 py-4 text-zinc-50'>
        <NavLink to='/'>
          <span className='italic font-semibold'>_of this</span>
        </NavLink>
        {/* Share Button */}
      </div>
    </header>
  );
};

export default Header;
