import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import { Careers } from "./Screen/Careers";
import Service from "./Screen/Service";

function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  );
}

export default App;
