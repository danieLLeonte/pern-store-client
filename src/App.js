import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import axios from "axios";

import { Footer, Header } from "./components";
import { Home } from "./pages";

axios.defaults.baseURL =
  process.env.REACT_APP_SERVER_URL || "http://localhost:3001";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
