import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="relative bg-white w-full max-w-6xl p-8 rounded-3xl shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center relative text-black">
          Contact <span className="text-black">Me</span>
        </h2>

        {/* Form Fields */}
        <form 
          className="mt-6 space-y-4"
          action="https://getform.io/f/bllyqrpb"  // Replace with your Getform URL
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex items-center border bg-gray-100 px-4 py-3 rounded-full">
              <span className="text-gray-500">👤</span>
              <input
                type="text"
                name="full_name"  // ✅ Added name attribute
                placeholder="Full Name *"
                required
                className="bg-transparent outline-none w-full px-2 text-black"
              />
            </div>
            {/* Email */}
            <div className="flex items-center border bg-gray-100 px-4 py-3 rounded-full">
              <span className="text-gray-500">📧</span>
              <input
                type="email"
                name="email"  // ✅ Added name attribute
                placeholder="Email *"
                required
                className="bg-transparent outline-none w-full px-2 text-black"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mobile Number */}
            <div className="flex items-center border bg-gray-100 px-4 py-3 rounded-full">
              <span className="text-gray-500">📱</span>
              <input
                type="tel"
                name="mobile"  // ✅ Added name attribute
                placeholder="Mobile No."
                className="bg-transparent outline-none w-full px-2 text-black"
              />
            </div>
            {/* Subject */}
            <div className="flex items-center border bg-gray-100 px-4 py-3 rounded-full">
              <span className="text-gray-500">📌</span>
              <input
                type="text"
                name="subject"  // ✅ Added name attribute
                placeholder="Subject *"
                required
                className="bg-transparent outline-none w-full px-2 text-black"
              />
            </div>
          </div>

          {/* Message */}
          <div className="bg-gray-100 border px-4 py-3 rounded-xl h-32">
            <textarea
              name="message"  // ✅ Added name attribute
              placeholder="Message *"
              required
              className="bg-transparent outline-none w-full h-full resize-none text-black"
            ></textarea>
          </div>

          {/* Send Button */}
          <div>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
              Send <span>➤</span>
            </button>
          </div>
        </form>

        {/* 3D Image at Bottom Right */}
        <img
          src="laptop wave.png" // Replace with actual 3D image URL
          alt="3D Character"
          className="absolute -bottom-10 right-10 w-64 md:w-64"
        />
      </div>
    </div>
  );
};

export default ContactForm;
