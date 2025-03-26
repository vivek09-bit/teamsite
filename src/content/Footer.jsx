import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white p-4 mx-6 my-4 rounded-full flex flex-col md:flex-row justify-between items-center shadow-lg">
      {/* Left Section: Logo & Name */}
      <div className="flex items-center space-x-3">
        {/* Round Icon */}
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
          <span className="text-black font-bold text-lg">VG</span>
        </div>
        <div className="text-2xl font-medium text-black">VIVEK</div>
        <div className="text-2xl font-bold text-black">GUPTA</div>
      </div>

      {/* Right Section: Credits */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6 text-center mt-3 md:mt-0">
  <p className="text-lg font-bold text-black flex items-center gap-2">
    ✍️ Designed By <b className="">Nikunj Thesiya</b>
  </p>
  <span className="hidden md:block text-black">|</span> {/* Divider on larger screens */}
  <p className="text-lg font-bold text-black flex items-center gap-2">
    🏗️ Built By <b className="text-black">Vivek Gupta</b>
  </p>
</div>

    </footer>
  );
};

export default Footer;
