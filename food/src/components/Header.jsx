import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../pic/cartIcon.svg";
import logo from "../pic/logo.svg";
/*logo,carticon */

const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline font-bold text-2xl lg:text-4xl"
          >
            <img
              src={logo}
              alt="logo"
              className="bg-white rounded-lg w-30 h-30 object-cover"
            />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="#about" className="text-xl">
            About
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" />
          </Link>{" "}
          {/* carticon*/}
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
