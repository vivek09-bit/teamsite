import React from 'react';

export default function Exp() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 md:px-8 text-base sm:text-lg">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-8 sm:mb-10">
        Projects
      </h2>

      {/* 🔹 Web App: Online Examination System (MERN) */}
      <div className="bg-gray-200 rounded-xl p-4 sm:p-6 mb-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          {/* Title with Icon */}
          <h3 className="flex items-center gap-3 sm:gap-4 bg-black rounded-full px-4 py-3 text-sm sm:text-base font-semibold text-yellow-500">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/education-and-compitive-exam.svg" 
              alt="Online Examination System" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            Online Examination System - MERN Stack
          </h3>

          {/* Institution Info */}
          <p className="text-xs sm:text-sm text-orange-900 mt-2 sm:mt-0">Private University</p>
        </div>

        <h4 className="text-base sm:text-lg font-semibold text-yellow-800">Full-Stack Developer</h4>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mt-2 sm:mt-3 text-sm sm:text-base">
          <li>Developed a <b>secure & scalable online examination system</b> for a private university.</li>
          <li>Utilized <b>Node.js, Express, MongoDB, Bootstrap</b> for a seamless user experience.</li>
          <li>Implemented <b>real-time test submissions, automated result calculations, and a question bank system</b>.</li>
          <li>Ensured <b>data security</b> with <b>JWT authentication & role-based access control</b>.</li>
        </ul>
      </div>

      {/* 🔹 Web Scraping Project */}
      <div className="bg-gray-200 rounded-xl p-4 sm:p-6 mb-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          {/* Title with Icon */}
          <h3 className="flex items-center gap-3 sm:gap-4 bg-black rounded-full px-4 py-3 text-sm sm:text-base font-semibold text-yellow-500">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2965/2965279.png" 
              alt="Web Scraping" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            Web Scraping - Mock Test Data Extraction
          </h3>

          <p className="text-xs sm:text-sm text-orange-900 mt-2 sm:mt-0">Freelance Project</p>
        </div>

        <h4 className="text-base sm:text-lg font-semibold text-yellow-800">Python Developer</h4>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mt-2 sm:mt-3 text-sm sm:text-base">
          <li>Automated the <b>extraction of exam questions, answers, and descriptions</b> from a mock test website.</li>
          <li>Developed a <b>Python-based web scraper</b> using <b>BeautifulSoup & Selenium</b> to gather structured data.</li>
          <li>Stored scraped data in <b>JSON format</b> for easy processing and analysis.</li>
        </ul>

        {/* JSON Output Example */}
        <div className="bg-black text-white text-xs sm:text-sm p-3 sm:p-4 rounded-lg mt-3 sm:mt-4 overflow-auto">
          <pre>
{`{
  "question": "What will be the output of the program, if a short int is 2 bytes wide?",
  "options": {
    "A": "1 ... 65535",
    "B": "Expression syntax error",
    "C": "No output",
    "D": "0, 1, 2, 3, 4, 5"
  },
  "correct_answer": "A"
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}
