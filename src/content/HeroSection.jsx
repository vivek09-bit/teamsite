import { useEffect, useState } from "react";
import React from "react";

const HeroSection = () => {
  const services = [
    { label: "Start Up Building", color: "text-blue-600 hover:bg-blue-300 hover:text-white" },
    { label: "Digital Marketing", color: "text-red-500 hover:bg-red-500 hover:text-white" },
    { label: "Personal AI Bot Development", color: "text-pink-500 hover:bg-pink-500 hover:text-white" },
    { label: "AI & Data Solutions", color: "text-green-600 hover:bg-green-500 hover:text-white" },
    { label: "UI/UX Design", color: "text-orange-600 hover:bg-orange-500 hover:text-white" },
    { label: "N8N Development", color: "text-black hover:bg-black hover:text-white" },
    { label: "SEO & Branding", color: "text-gray-600 hover:bg-gray-400 hover:text-white" },
    { label: "Business Consulting", color: "text-purple-500 hover:bg-purple-500 hover:text-white" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    // Update number of visible items based on screen size
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(5); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsToShow(4); // Tablet
      } else {
        setItemsToShow(4); // Mobile
      }
    };

    updateItemsToShow(); // Set initial value
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <>
      <section id="hero" className="text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            Welcome to <span className="text-blue-400">Team Ignite</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl mb-8">
            Empowering Businesses with Cutting-Edge Technology & Digital Solutions
          </p>
          
          {/* SLIDER */}
          <div className="overflow-hidden w-full mx-auto relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex % services.length) * (100 / itemsToShow)}%)`,
                width: `${(services.length / itemsToShow) * 100}%`,
              }}
            >
              {services.concat(services.slice(0, itemsToShow)).map((service, index) => (
                <div key={index} className={`w-${100 / itemsToShow}% flex-shrink-0 px-2`}>
                  <span className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white block mx-auto ${service.color} text-lg sm:text-xl md:text-2xl shadow-lg transform transition-all duration-500 hover:scale-110`}>
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
