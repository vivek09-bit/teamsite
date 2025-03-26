import React from "react";

const teamMembers = [
  {
    name: "Vivek",
    role: "Manager & Developer",
    image: "Vivek.PNG",
    skills: [
      "Python Automation", "Django Development", "MERN Stack Development", "MEAN Stack Development",
      "AI Chatbot Development", "N8N Automation", "WordPress Development"
    ]
  },
  {
    name: "Satyam",
    role: "Marketer & Developer",
    image: "Satyam.PNG",
    skills: [
      "Marketing Automation", "PHP Development", "Laravel Development", "jQuery Development",
      "SEO (Search Engine Optimization)", "Automated Testing", "Predictive Analytics"
    ]
  },
  {
    name: "Bishal Bandari",
    role: "Tech Developer & Designer",
    image: "Bishal.PNG",
    skills: ["React Development", "UX/UI Design", "Frontend Development", "Angular Development"]
  },
  {
    name: "Vikas",
    role: "Tech Developer & Designer",
    image: "Vikas.PNG",
    skills: ["MERN Stack Development", "UX/UI Design", "Frontend Development", "Angular Development", "Mobile App Development (Native)", "Mobile App Testing (Native)"]
  },
  {
    name: "Gaurav",
    role: "Designer & Frontend Developer",
    image: "Gaurav.PNG",
    skills: ["Frontend Development", "UX/UI Design", "Web Design", "Figma Development", "Cross-Browser Compatibility", "TypeScript", "Vue"]
  }
];

const MeetTeam = () => {
  return (
    <section id="Team" className="flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-8">Meet Our Team</h1>
      
      <div className="bg-black rounded-lg p-8 w-full max-w-6xl shadow-lg">
        {/* <p className="text-lg text-center text-white mb-10 leading-relaxed">
          Welcome to <b className="text-yellow-400">Team Ignite</b>! We are a passionate and skilled team of professionals specializing in
          web development, automation, AI-driven solutions, and digital marketing. Our goal is to deliver innovative,
          efficient, and high-impact solutions to help businesses scale and grow.
        </p> */}

        {/* Team Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-950 text-yellow-400 p-6 rounded-xl shadow-lg border border-yellow-500 transition transform hover:scale-105 hover:shadow-2xl">
              <img src={member.image} alt={member.name} className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-yellow-500 shadow-md" />
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-gray-300 text-lg font-medium">{member.role}</p>
              <div className="flex flex-wrap justify-center mt-3 gap-2">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-3 py-1 text-sm rounded-full hover:bg-yellow-600 transition duration-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-10">
          <a
            href="mailto:vkg1257@gmail.com"
            className="bg-yellow-500 border-2 border-yellow-600 text-black font-bold px-6 py-3 rounded-full text-lg hover:bg-yellow-600 hover:text-white transition duration-300 shadow-md"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;