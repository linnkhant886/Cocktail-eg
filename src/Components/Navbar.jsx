import React from "react";
import logo from "../Pages/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-around p-4 shadow-lg">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <ul className=" flex font-semibold gap-4  cursor-pointer">
        <Link to="/">
          <li className=" text-2xl">Home</li>
        </Link>

        <Link  to="/about">
          <li className=" text-2xl">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
