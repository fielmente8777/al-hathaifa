import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Contact from "./Screen/Contact";
import Careers from "./Screen/Careers";
import Service from "./Screen/Service";
import TermsCondition from "./Screen/TermsCondition";
import PrivacyPolicy from "./Screen/PrivacyPolicy";
import Disclaimer from "./Screen/Disclaimer";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function App() {

  return (

    <div className="relative">


      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
      </Routes>







      <Link
        to={`https://wa.me/${encodeURIComponent("+96824600572")}`}
        target="_blank"
        className="whatsapp-button inline-block fixed bottom-[20px] right-[20px] w-[50px] h-[50px] bg-[#4DC251] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden"
      >
        <span className="sr-only">what's app</span><FaWhatsapp />;
      </Link>

      <Link to="tel:+968 2460 0572" className="whatsapp-button inline-block fixed bottom-[20px] left-[20px] w-[50px] h-[50px] bg-[#A52323] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden">
        <span className="sr-only">call</span><FaPhone style={{ transform: 'rotate(100deg)' }} />

      </Link>
    </div>

  );
}

export default App;
