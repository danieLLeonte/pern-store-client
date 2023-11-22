import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  console.log(user);

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
    <>
      <h2>Your Profile</h2>
      <p>{user.username}</p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
      <Link to="/add-product">
        <button type="button" className="border p-2">
          Add Product
        </button>
      </Link>
    </>
  );
};

export default Profile;
