import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Header } from "./components";
import { Home } from "./pages";

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
