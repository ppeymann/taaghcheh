import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
