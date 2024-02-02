import React from "react";
import { NavLink } from "react-router-dom";
import Nav_Links from "./navLink";

// import { BiSolidPhoneCall } from "react-icons/bi";
// import { FaFacebookF } from "react-icons/fa";
// import { FiLinkedin } from "react-icons/fi";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaTripadvisor } from "react-icons/fa";
// import logo from "../../asserts/download.jpeg";
// import Image from "../Image";

// const socialIcon = [
//   {icon:<AiFillInstagram />,title:"Instagram"}
// ]

function NavBar() {
  const navigation = Nav_Links();
  return (
    <>
      <nav className="flex h-[4rem] px-3 max-w-[1320px] m-auto justify-center items-center bg-white">
        {/* <div className="nav_bar_upper flex items-center justify-between">
          <div className="flex gap-1">
            <span className="sr-only">call</span>
            <BiSolidPhoneCall />
            <Link to="tel:91999912456">+91 999912456</Link>
          </div>
          <div>
            <Image url={logo} className="" alt="alt" width={""} height={""} />
          </div>
          <div>
            <ul className="flex items-center justify-around">
              <li></li>
            </ul>
          </div>
        </div>  */}
        <ul className="flex items-center justify-center gap-5 w-[100%]">
          {navigation.map((item, i) => (
            <li key={i}>
              <NavLink
                className="font-semibold text-black center text-[1rem] p-1 capitalize hover:py-2 hover:rounded-lg hover:bg-[#85b434] hover:text-white"
                to={item.src}
              >
                {item.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
