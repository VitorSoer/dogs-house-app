import React from "react";
import { NavBar } from "./styles/navbar.styles";
import { FaHome, FaPaw, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavBar>
      <h2>Dog's House</h2>
      <div>
        <Link className="link" to="/dogs-house-app">
          <FaHome />
        </Link>
        <Link className="link" to="/dogs-house-app/adote">
          <FaPaw />
        </Link>
        <Link className="link" to="/dogs-house-app/apadrinhe">
          <FaMoneyCheckAlt />
        </Link>
      </div>
    </NavBar>
  );
}

export default Navbar;
