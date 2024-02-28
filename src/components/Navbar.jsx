import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/svg/Final-logo 1.svg";
// import { FaTimes } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import icon from "../assets/svg/phone.svg";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [open, close] = useState(false);

  const click = () => {
    close(!open);
  };

  const navLink = [
    { name: "home", link: "/" },
    { name: "about us", link: "/about" },
    { name: "SERVICES", link: "/service" },
    { name: "CAREERS", link: "/careers" },
    { name: "CONTACT us", link: "/contact" },
  ];
  return (
    <>
      <div className="bg-[#202020] text-white w-full ">
        <div className="h-16 mx-auto  py-5 flex justify-between items-center max-md:px-5 lg:max-w-[1224px] md:max-w-[720px] max-w-full relative">
          <div className="lg:hidden block">
            <button className="" onClick={click}>
              <FaBars className="text-3xl" />
            </button>
          </div>
          <div className="lg:flex hidden space-x-6 items-center ">
            <img src={Logo} alt="Al Hathboor Group" class="h-24 top-0 z-10" />

            <Link
              to="/" target="_blank"
              className="w-[35px] h-[35px] flex items-center justify-center duration-300 rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
            >
              <FaFacebookF className="text-lg font-medium" />
            </Link>
            <Link
              to="/" target="_blank"
              className="w-[35px] h-[35px] flex items-center justify-center duration-300 rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
            >
              <CiInstagram className="text-lg font-medium" />
            </Link>
            {/* <Link
              to="/"
              className="hover:text-red-600 transition-colors duration-300"
            >
              <img
                src="https://file.rendit.io/n/6gaT3XiTsangAeN3Q7EP.svg"
                alt="Flickr"
                className="w-6"
              />
            </Link> */}
            <Link
              to="/" target="_blank"
              className="w-[35px] h-[35px] flex items-center justify-center duration-300 rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
            >
              <FaLinkedinIn className="text-lg font-medium" />
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className={`hover:text-red-600 transition-colors duration-300 ${
                location.pathname === "/" ? "text-red-600" : ""
              }`}
            >
              <p> HOME</p>
            </Link>
            <Link
              to="/about"
              className={`hover:text-red-600 transition-colors duration-300 ${
                location.pathname === "/about" ? "text-red-600" : ""
              }`}
            >
              <p> ABOUT US</p>
            </Link>
            <Link
              to="/service"
              className={`hover:text-red-600 transition-colors duration-300 ${
                location.pathname === "/service" ? "text-red-600" : ""
              }`}
            >
              <p> SERVICES</p>
            </Link>
            <Link
              to="/careers"
              className={`hover:text-red-600 transition-colors duration-300 ${
                location.pathname === "/careers" ? "text-red-600" : ""
              }`}
            >
              <p> CAREERS</p>
            </Link>
            <Link
              to="/contact"
              className={`hover:text-red-600 transition-colors duration-300 ${
                location.pathname === "/contact" ? "text-red-600" : ""
              }`}
            >
              <p> CONTACT US</p>
            </Link>
          </nav>

          <div className="hidden lg:block">
            <a
              href="tel:+968 2460 0572"
              className="flex items-center px-6 py-3 bg-[#a52323] hover:bg-red-700 transition-colors"
            >
              <img
                src="https://file.rendit.io/n/dJonEfmq3HTGjJmt0jc9.svg"
                alt="Call to action"
                className="w-6 h-6 mr-2"
              />
              <p className="text-white text-sm   uppercase tracking-[0.16] leading-[24px]">
                Let's Talk
              </p>
            </a>
          </div>

          {/* phone view */}
          <div className="lg:hidden md:block  h-28 z-10">
            <Link to="/">
              <img src={Logo} alt="Al Hathboor Group" class="h-28 top-0 z-10" />
            </Link>
          </div>

          <div className="lg:hidden block">
            <a href="tel:+968 2460 0572" className="text-decoration-none ">
              <img src={icon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden block px-4 py-3 bg-[#202020] h-[100vh] fixed top-0 w-full z-10 ">
          <div>
            <button
              className="border-0 bg-transparent"
              onClick={() => close(false)}
            >
              <FaTimes className="text-3xl text-white " />
            </button>
          </div>
          <nav>
            <ul className="flex flex-col gap-5 py-5">
              {navLink.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="uppercase text-white active:text-red-600 text-base font-medium"
                    onClick={() => close(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
