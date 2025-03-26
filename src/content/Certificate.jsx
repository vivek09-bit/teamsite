import React from "react";

export default function Certificate() {
  return (
    <section id="CERTIFIFCATES" className="max-w-screen-xl mx-auto pt-16 px-6">
      <h2 className="text-5xl font-bold text-yellow-400 mb-10 text-center">
        Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
            platform: "Udemy",
            logo: "https://placehold.co/30x30",
          },
          {
            title: "The Complete JavaScript Course 2020: From Zero to Expert!",
            platform: "Udemy",
            logo: "https://placehold.co/30x30",
          },
          {
            title: "Google UX Design",
            platform: "Coursera",
            logo: "https://placehold.co/30x30",
          },
          {
            title: "Front End Libraries",
            platform: "FreeCodeCamp",
            logo: "https://placehold.co/30x30",
          },
          {
            title: "React.js Essential Training",
            platform: "LinkedIn",
            logo: "https://placehold.co/30x30",
          },
          {
            title: "Understanding Redux: A Beginner's Guide To State Management",
            platform: "Educative",
            logo: "https://placehold.co/30x30",
          },
        ].map((cert, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 relative pb-16 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-300"
            }`}
          >
            {/* Certificate Icon at the Top-Right */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full shadow-md">
              🎓 {/* You can replace this emoji with an actual SVG */}
            </div>

            {/* Platform Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="bg-black rounded-full pr-6 pl-1 py-1 flex items-center space-x-3">
                <img
                  src={cert.logo}
                  alt={`${cert.platform} logo`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-500">
                    {cert.platform}
                  </h3>
                </div>
              </div>
            </div>

            {/* Certificate Title */}
            <h3 className="text-xl font-bold text-black mb-4">{cert.title}</h3>

            {/* View Button at the Bottom-Left */}
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black border p-2 rounded-full font-semibold flex items-center space-x-2 absolute bottom-4 left-4 bg-white shadow-md hover:bg-gray-100 transition"
            >
              {/* Eye Icon */}
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4.5c-7 0-11 7.5-11 7.5s4 7.5 11 7.5 11-7.5 11-7.5-4-7.5-11-7.5zm0 12c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span>View</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
