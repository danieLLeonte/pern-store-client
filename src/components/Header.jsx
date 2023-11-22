import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header>
      <nav className="flex gap-4 justify-between items-center">
        <Link to="/">Home🏠</Link>
        {user ? (
          <Link to="/profile">Your Profile</Link>
        ) : (
          <Link to="/auth">Sign In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
