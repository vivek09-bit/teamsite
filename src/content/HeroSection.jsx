import { useEffect, useState } from "react";
import React from "react";


const HeroSection = () => {
  const services = [
    { label: "Start Up Building", color: "text-blue-600 hover:bg-blue-300 hover:text-white" },
    { label: "Digital Marketing", color: "text-red-500 hover:bg-red-500 hover:text-white" },
    { label: "Personal AI Bot Development", color: "text-pink-500 hover:bg-pink-500 hover:text-white" },
    { label: "AI & Data Solutions", color: "text-green-600 hover:bg-green-500 hover:text-white" },
    { label: "UI/UX Design", color: "text-orange-600 hover:bg-orange-500 hover:text-white" },
    { label: "N8N Devlopment", color: "text-black hover:bg-black hover:text-white" },
    { label: "SEO & Branding", color: "text-gray-600 hover:bg-gray-400 hover:text-white" },
    { label: "Business Consulting", color: "text-purple-500 hover:bg-purple-500 hover:text-white" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <>
    <section id="#hero" className="text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          Welcome to <span className="text-blue-400">Team Ignite</span>
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl mb-8">
          Empowering Businesses with Cutting-Edge Technology & Digital Solutions
        </p>
        <div className="overflow-hidden w-full mx-auto relative">
          <div
            className="flex transition-transform duration-700 ease-in-out transform scale-95 hover:scale-100"
            style={{
              transform: `translateX(-${(currentIndex % services.length) * (100 / (window.innerWidth >= 1024 ? 3 : 1))}%)`,
            }}
          >
            {[...services, ...services.slice(0, 3)].map((service, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 px-2 text-center">
                <span className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white block mx-auto ${service.color} text-lg sm:text-xl md:text-2xl shadow-lg transform transition-all duration-500 hover:scale-110`}>{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-black py-12 px-6 md:px-16 lg:px-32">
    <div className="max-w-6xl mx-auto text-center">
      {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
        About <span className="text-blue-600">Team Ignite</span>
      </h2> */}
      <p className="text-lg text-gray-700 mb-8">
        {/* Empowering Businesses with Cutting-Edge Technology & Digital Solutions */}
      </p>
    </div>

    <div className="max-w-5xl mx-auto text-center">
    <p className="text-white text-lg leading-relaxed mb-6">
Welcome to <span className="font-semibold">Team Ignite</span>, where <span className="text-yellow-400">technology meets innovation</span>. 
As a leading <span className="text-blue-400">technology and business consulting firm</span>, we specialize in 
<span className="text-blue-400"> web development, AI solutions, digital marketing, and IT consulting</span>.  
Our mission is to empower businesses with <span className="font-semibold text-green-400">intelligent, scalable, and results-driven solutions</span> 
that fuel growth and success in today’s dynamic digital landscape.  
With a passion for excellence and a commitment to innovation, we help businesses 
<span className="text-red-400"> adapt, optimize, and lead</span> in their industries.
</p>

    </div>

    <div className="max-w-5xl mx-auto text-left mt-12">
      <h3 className="text-3xl font-semibold text-gray-200 mb-4">Who We Are</h3>
      <p className="text-white text-lg leading-relaxed">
        At <span className="font-semibold">Team Ignite</span>, we are a team of highly skilled developers, designers, marketers, and business
        strategists dedicated to delivering exceptional digital solutions tailored to your business needs. With years of
        experience in <span className="text-blue-600">full-stack development, AI, automation, and digital transformation</span>, we bring expertise across multiple
        industries, ensuring unparalleled service quality and customer satisfaction.
      </p>
    </div>
  </section>
  </>
  );
};





export default HeroSection;
