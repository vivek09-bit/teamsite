import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    // Set initial position of .flair element
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    // Create quick setters for x and y position using GSAP
    let xSetter = gsap.quickSetter(".flair", "x", "px");
    let ySetter = gsap.quickSetter(".flair", "y", "px");

    // Add mousemove event listener to update .flair position
    const onMouseMove = (e) => {
      xSetter(e.x);
      ySetter(e.y);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
  
      <div className="flair bg-white shadow-xl absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-2xl transition-transform duration-300 ease-out opacity-80 mix-blend-screen group-hover:scale-110 pointer-events-none z-10">
        
        <div className="inner-flair bg-black shadow-xl w-6 h-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200 shadow-md group-hover:scale-200 group-hover:bg-blue-700"></div>
      
      </div>

  );
};

export default Hero;
