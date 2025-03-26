import React, {useEffect} from 'react'

import gsap from "gsap";

export default function CursorAnimation() {
    useEffect(() => {
        if (typeof window !== "undefined") {
          // Set initial position of .flair element
          gsap.set(".flair", { xPercent: -50, yPercent: -50 });
    
          // Create quick setters for x and y position using GSAP
          let xSetter = gsap.quickSetter(".flair", "x", "px");
          let ySetter = gsap.quickSetter(".flair", "y", "px");
    
          // Mouse move event handler
          const onMouseMove = (e) => {
            xSetter(e.clientX);
            ySetter(e.clientY);
          };
    
          window.addEventListener("mousemove", onMouseMove);
    
          // Cleanup event listener on unmount
          return () => {
            window.removeEventListener("mousemove", onMouseMove);
          };
        }
      }, []);
    
    return (
    <div className="fixed inset-0 pointer-events-none">
        <div className="group">
          <div className="flair bg-yellow-500 shadow-xl fixed top-0 left-0 w-12 h-12 rounded-full shadow-2xl transition-transform duration-300 ease-out opacity-80 mix-blend-screen group-hover:scale-110 pointer-events-none z-50">
            <div className="inner-flair bg-white shadow-xl w-6 h-6 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-200 shadow-md group-hover:scale-200 group-hover:bg-blue-700"></div>
          </div>
        </div>
      </div>
  )
}
