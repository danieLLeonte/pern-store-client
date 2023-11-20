import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get("/auth/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <nav className="flex gap-4 justify-between items-center">
        <Link to="/">Home🏠</Link>
        {user ? (
          <button onClick={handleLogout}>
            username: {user.username} - Sign Out
          </button>
        ) : (
          <Link to="/auth">Sign In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
