import React, { useState } from "react";

import Logo from "./logo.png";
import { Link } from "react-router-dom";
import cx from "classnames";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navbarNav = cx(
    "xl:flex flex text-center flex-col xl:flex-row xl:flex-mid justify-end w-full order-1 xl:order-0 xl:items-center",
    click ? "block" : "hidden"
  );

  return (
    <nav className="relative col-span-full flex flex-col xl:flex-row flex-wrap py-5 xl:py-0 items-center px-5 bg-tertiary text-white">
      {/* <!-- LEFT NAVIGATION --> */}
      <ul className="hidden xl:flex flex flex-col lg xl:flex-row w-full xl:w-auto mt-10 xl:mt-0">
        <li className="mb-5 xl:mb-0 xl:mr-8">
          <Link
            to="/addproject"
            className="px-8 py-2 bg-secondary hover:bg-primary-200 transition-all duration-500 font-bold"
          >
            Add Project
          </Link>
        </li>
        <li>
          <button className="hover:font-bold">Suggestion</button>
        </li>
      </ul>
      {/* <!-- BRAND --> */}
      <div className="flex justify-between w-full xl:w-auto xl:ml-auto xl:transform xl:translate-x-1/2">
        <figure className="">
          <img src={Logo} alt="Logo" />
        </figure>
        <button
          type="button"
          className="block xl:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
          id="main-menu"
          aria-label="Main menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* <!-- RIGHT NAVIGATION --> */}
      <ul className={navbarNav} id="navigation">
        <li className="mb-3 xl:mb-0 xl:mr-8">
          <Link to="/" className="hover:font-bold">
            Browse
          </Link>
        </li>
        <li className="mb-3 xl:mb-0 xl:mr-8">
          <Link to="/addparticipant" className="hover:font-bold">
            Guide
          </Link>
        </li>
        <li className="mb-3 xl:mb-0 xl:mr-8">
          <button className="hover:font-bold">About</button>
        </li>
        <li className="mb-3 xl:mb-0 xl:mr-8">
          <button className="hover:font-bold">Contact</button>
        </li>
        <li className="">
          <button className="px-8 py-2 bg-primary-100 text-black hover:bg-green-200 transition-all duration-500 font-bold w-100 block">
            Log in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
