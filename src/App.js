import { useEffect, useState } from "react";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import axios from "axios";

import { Footer, Header } from "./components";
import { Home, AddProduct, AuthPortal, Profile } from "./pages";

axios.defaults.baseURL =
  process.env.REACT_APP_SERVER_URL || "http://localhost:3001";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const response = await axios.get("/auth/check");
        setUser(response.data);
      } catch (error) {
        console.log("Error checking authentication state:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []);

  if (loading) return <div>Loading...</div>;

  const ProtectedRoute = ({ isAllowed, redirectPath = "/auth", children }) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
  };

  return (
    <Router>
      <Header user={user} />
      <main className="container mx-auto p-4">
        <Routes>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
            <Route path="/add-product" element={<AddProduct />} />
          </Route>

          <Route
            path="/auth"
            element={
              <ProtectedRoute isAllowed={!user} redirectPath="/">
                <AuthPortal setUser={setUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
