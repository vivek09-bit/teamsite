import React from "react";

const Header = ({ toggleMenu }) => {
  return (
    <header className="bg-yellow-500 text-white p-3 md:p-2 lg:p-3 sm:p-2 md:mx-10 my-2 rounded-full flex justify-between items-center shadow-lg">

      <div className="flex items-center space-x-2">
        {/* Logo Placeholder */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold text-lg lg:text-xl">
          TI {/* Replace with actual logo */}
        </div>
        <div className="text-2xl md:text-3xl font-bold">Team Ignite</div>
      </div>
      
      {/* Menu Button */}
      <div className="rounded-full bg-black px-2 py-2 md:px-2 md:py-2 inline-flex items-center">
        <button
          className="relative flex items-center text-white px-2 py-2 text-lg font-medium"
          onClick={toggleMenu}
        >
          <span className="hidden sm:block">Menu</span>
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center ml-2">
            <div className="space-y-1 m-1">
              <div className="w-3 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};

export const Sidebar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu} />}

      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 md:w-80 lg:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black font-bold text-xl"
          onClick={toggleMenu}
        >
          ✕
        </button>

        <nav className="mt-16 px-6">
          <ul className="space-y-4 text-lg font-medium">
            <li><a href="#hero" className="block p-3 hover:bg-yellow-400 rounded-lg">Home</a></li>
            {/* <li><a href="#about" className="block p-3 hover:bg-yellow-400 rounded-lg">About</a></li> */}
            <li><a href="#why-choose-us" className="block p-3 hover:bg-yellow-400 rounded-lg">Why Us</a></li>
            {/* <li><a href="#services" className="block p-3 hover:bg-yellow-400 rounded-lg">Services</a></li> */}
            <li><a href="#skills" className="block p-3 hover:bg-yellow-400 rounded-lg">Skills</a></li>
            <li><a href="#projects" className="block p-3 hover:bg-yellow-400 rounded-lg">Projects</a></li>
            {/* <li><a href="#experience" className="block p-3 hover:bg-yellow-400 rounded-lg">Experience</a></li> */}
            <li><a href="#team" className="block p-3 hover:bg-yellow-400 rounded-lg">Meet The Team</a></li>
            <li><a href="#contact" className="block p-3 hover:bg-yellow-400 rounded-lg">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
