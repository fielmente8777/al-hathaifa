import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Screen/Home";

function App() {
  return (

    <div>
      <Navbar />
      <Home />
      {/* <Routes>
        <Route index element={<Home />} />
      </Routes> */}
    </div>

  );
}

export default App;
