import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

function NavBar() {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-5">
        {navigation.map((item, i) => (
          <li key={i} >
            <NavLink className="p-3" to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
