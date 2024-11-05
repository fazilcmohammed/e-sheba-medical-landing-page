import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex py-5 px-10 md:px-28 items-center justify-between bg-hero_bg relative">
      <img src={logo} alt="Logo" className="h-4 md:h-8" />

      {/* Menu Icon for Small Devices */}
      <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex flex-col lg:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-hero_bg md:bg-transparent text-center lg:text-left lg:space-x-8 transition-all duration-300`}
      >
        <li className="py-2 md:py-0 text-lg"><a href="#">Home</a></li>
        <li className="py-2 md:py-0 text-lg"><a href="#">About</a></li>
        <li className="py-2 md:py-0 text-lg"><a href="#">Application</a></li>
        <li className="py-2 md:py-0 text-lg"><a href="#">History</a></li>
      </ul>

      {/* Buttons (Visible Only on Medium and Larger Screens) */}
      <div className="hidden lg:flex gap-3 items-center">
        <button className="border-[1px] border-blue rounded-full py-1 px-5 text-blue text-lg font-semibold">Log in</button>
        <button className="border-[1px] bg-blue rounded-full py-1 px-5 text-white text-lg font-semibold">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
