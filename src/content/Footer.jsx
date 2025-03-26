import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white p-4 md:p-6 mx-4 md:mx-10 my-4 rounded-2xl flex flex-col md:flex-row justify-between items-center shadow-lg">
      {/* Left Section: Logo & Name */}
      <div className="flex items-center space-x-3">
        {/* Logo Icon */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
          <span className="text-black font-bold text-lg">TI</span>
        </div>
        {/* Name */}
        <div className="flex flex-col md:flex-row md:space-x-2 text-center md:text-left">
          <span className="text-2xl font-medium text-black">TEAM</span>
          <span className="text-2xl font-bold text-black">IGNITE</span>
        </div>
      </div>

      {/* Right Section: Credits */}
      <div className="flex flex-col md:flex-row items-center text-center mt-4 md:mt-0 gap-2 md:gap-4">
        <p className="text-lg font-semibold text-black flex items-center gap-2">
          ✍️ Designed By <span className="font-bold">Vishal Bhandari</span>
        </p>
        <span className="hidden md:block text-black">|</span> {/* Divider only on larger screens */}
        <p className="text-lg font-semibold text-black flex items-center gap-2">
          🏗️ Built By <span className="font-bold">Vivek Gupta</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;