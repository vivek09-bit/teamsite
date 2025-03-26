import ProjectCard from "./ProjectCard";

const skillsData = {
  technologies: [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "SCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  ],
};

const projects = [
  {
    title: "WebScrapper",
    image: "https://www.isoeh.com/images/learn-web-scraping-using-python.jpg", // Replace with actual image
    link: "https://github.com/vivek09-bit/",
    technologies: skillsData.technologies,
    bgColor: "bg-blue-900",
  },
  {
    title: "Asthica - E-Commerce",
    image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    link: "https://asthica.com",
    technologies: skillsData.technologies,
    bgColor: "bg-red-900",
  },
  // {
  //   title: "Epiko Market",
  //   image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  //   link: "#",
  //   technologies: skillsData.technologies,
  //   bgColor: "bg-pink-900",
  // },
];

const Projects = () => {
  return (
    <div id="Projects" className="min-h-screen bg-black text-white py-12">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Projects I’ve Worked on</h2>
      
      <div className="max-w-5xl mx-auto flex flex-col gap-8 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* GitHub Button */}
      <div className="flex justify-center mt-8">
  <a
    href="https://github.com/vivek09-bit"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 hover:bg-yellow-600 transition"
  >
    <img
      src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
      alt="GitHub Logo"
      className="w-6 h-6"
    />
    See Github
  </a>
</div>

    </div>
  );
};

export default Projects;
