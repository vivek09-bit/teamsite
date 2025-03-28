import React from "react";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us"className="bg-black py-12 px-6 md:px-16 lg:px-24 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Why Choose Team Ignite?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="p-6 bg-gray-400 shadow-lg rounded-xl flex flex-col items-center">
          <span className="text-5xl">✅</span>
          <h3 className="text-xl font-semibold mt-4">Experience & Expertise</h3>
          <p className="text-gray-600 mt-2">
            With years of experience in web development, AI, digital marketing, and IT consulting, we provide solutions that drive real results.
          </p>
        </div>

        <div className="p-6 bg-green-400 shadow-lg rounded-xl flex flex-col items-center">
          <span className="text-5xl">🚀</span>
          <h3 className="text-xl font-semibold mt-4">Innovative & Scalable Solutions</h3>
          <p className="text-gray-600 mt-2">
            We stay ahead of the technology curve, ensuring that our solutions are future-proof, scalable, and optimized for business growth.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center">
          <span className="text-5xl">🎯</span>
          <h3 className="text-xl font-semibold mt-4">Client-Centric Approach</h3>
          <p className="text-gray-600 mt-2">
            Your success is our priority. We focus on understanding your business goals and delivering tailored solutions that align with your vision.
          </p>
        </div>

        <div className="p-6 bg-purple-500 shadow-lg rounded-xl flex flex-col items-center">
          <span className="text-5xl">🔒</span>
          <h3 className="text-xl font-semibold mt-4">Security & Performance Focused</h3>
          <p className="text-white mt-2">
            We build secure, high-performance applications optimized for speed, efficiency, and seamless user experience.
          </p>
        </div>

      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-100">Let's Build Something Great Together!</h3>
        <p className="text-gray-300 mt-2">
          If you're looking for a trusted technology partner, Team Ignite is here for you.
          Get in touch with us today and let's create something extraordinary!
        </p>
        <div className="mt-6">
          <a href="#Contact" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
