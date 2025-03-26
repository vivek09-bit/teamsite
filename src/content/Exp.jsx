import React from 'react';

export default function Exp() {
  return (
    <section id="Experience" className="w-full max-w-5xl mx-auto py-10 text-lg">
      <h2 className="text-4xl font-bold text-yellow-500 text-center mb-10">Experience</h2>

      {/* 🔹 Web App: Online Examination System (MERN) */}
      <div className="bg-gray-200 rounded-xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          {/* Title with Icon */}
          <h3 className="flex items-center gap-4 bg-black rounded-full px-4 py-3 font-semibold text-yellow-500">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/education-and-compitive-exam.svg" 
              alt="Online Examination System" 
              className="w-10 h-10 rounded-full"
            />
            Online Examination System - MERN Stack
          </h3>

          {/* Institution Info */}
          <p className="text-sm text-orange-900">Private University</p>
        </div>

        <h4 className="text-lg font-semibold text-yellow-800">Full-Stack Developer</h4>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Developed a <b>secure & scalable online examination system</b> for a private university.</li>
          <li>Utilized <b>Node.js, Express, MongoDB, Bootstrap</b> for a seamless user experience.</li>
          <li>Implemented <b>real-time test submissions, automated result calculations, and a question bank system</b>.</li>
          <li>Ensured <b>data security</b> with <b>JWT authentication & role-based access control</b>.</li>
        </ul>
      </div>

      {/* 🔹 Web Scraping Project */}
      <div className="bg-gray-200 rounded-xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          {/* Title with Icon */}
          <h3 className="flex items-center gap-4 bg-black rounded-full px-4 py-3 font-semibold text-yellow-500">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2965/2965279.png" 
              alt="Web Scraping" 
              className="w-10 h-10 rounded-full"
            />
            Web Scraping - Mock Test Data Extraction
          </h3>

          <p className="text-sm text-orange-900">Freelance Project</p>
        </div>

        <h4 className="text-lg font-semibold text-yellow-800">Python Developer</h4>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Automated the **extraction of exam questions, answers, and descriptions** from a mock test website.</li>
          <li>Developed a <b>Python-based web scraper</b> using <b>BeautifulSoup & Selenium</b> to gather structured data.</li>
          <li>Stored scraped data in <b>JSON format</b> for easy processing and analysis.</li>
        </ul>

        {/* JSON Output Example */}
        <div className="bg-black text-white text-sm p-4 rounded-lg mt-4 overflow-auto">
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
