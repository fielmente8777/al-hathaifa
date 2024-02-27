import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Final-logo-1.png";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import icon from "../assets/svg/phone.svg";

export default function Navbar() {
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
      <div className="bg-gray-800 text-white w-full ">
        <div className="h-16 mx-auto  py-5 flex justify-between items-center px-5 lg:max-w-[1224px] md:max-w-[720px] max-w-full relative">
          <div className="lg:hidden block">
            <button className="" onClick={click}>
              <FaBars className="text-3xl" />
            </button>
          </div>
          <div className="lg:flex hidden space-x-6 items-center ">
            <img src={logo} alt="Al Hathboor Group" class="h-24 top-0 z-10" />
            <img
              src="https://file.rendit.io/n/E5WYXaxWoq1Atl7xFkdq.svg"
              alt="Facebook"
              className="w-6"
            />
            <img
              src="https://file.rendit.io/n/GZei1X17dnm9IES525QH.svg"
              alt="Instagram"
              className="w-6"
            />
            <img
              src="https://file.rendit.io/n/6gaT3XiTsangAeN3Q7EP.svg"
              alt="Flickr"
              className="w-6"
            />
            <img
              src="https://file.rendit.io/n/hNqrqEgtyCThGpYs8E1h.svg"
              alt="LinkedIn"
              className="w-6"
            />
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="hover:text-red-600 transition-colors duration-300"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:text-red-600 transition-colors duration-300"
            >
              ABOUT US
            </Link>
            <Link
              to="/service"
              className="hover:text-red-600 transition-colors duration-300"
            >
              SERVICES
            </Link>
            <Link
              to="/careers"
              className="hover:text-red-600 transition-colors duration-300"
            >
              CAREERS
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-600 transition-colors duration-300"
            >
              CONTACT US
            </Link>
          </nav>

          <div className="hidden lg:block">
            <button className="flex items-center px-6 py-3 bg-[#a52323] hover:bg-red-700 transition-colors">
              <img
                src="https://file.rendit.io/n/dJonEfmq3HTGjJmt0jc9.svg"
                alt="Call to action"
                className="w-6 h-6 mr-2"
              />
              <span className="text-white text-sm font-bold uppercase tracking-[0.16] leading-[24px]">
                Let's Talk
              </span>
            </button>
          </div>

          {/* phone view */}
          <div className="lg:hidden md:block absolute right-[40%] md:right-[45%] h-28 z-10">
            <img src={logo} alt="Al Hathboor Group" class="h-28 top-0 z-10" />
          </div>

          <div className="lg:hidden block">
            <Link to="" className="text-decoration-none ">
              <img src={icon} alt="icon" />
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden block px-4 py-3 bg-gray-800 h-[100vh] fixed top-0 w-full z-10 ">
          <div>
            <button className="border-0 bg-transparent" onClick={()=> close(false)}>
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
