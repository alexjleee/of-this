import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/'>
        <span>Of this</span>
      </NavLink>
    </header>
  );
};

export default Header;
