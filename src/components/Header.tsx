import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/"> counter</Link>
        <Link to="/user">User</Link>
        <Link to="/user-context">UserContext</Link>
      </nav>
    </>
  );
};

export default Header;
