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
  webScraping: [
    { name: "BeautifulSoup", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/BeautifulSoup_logo.png" },
    { name: "Scrapy", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Scrapy_logo.svg/1024px-Scrapy_logo.svg.png" },
    { name: "Selenium", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
  ],
  ecommerce: [
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  ],
};

const projects = [
  {
    title: "WebScrapper",
    image: "https://www.isoeh.com/images/learn-web-scraping-using-python.jpg",
    link: "https://github.com/vivek09-bit/",
    technologies: skillsData.webScraping, // Web Scraping specific tech stack
    bgColor: "bg-blue-900",
  },
  {
    title: "Asthica - E-Commerce",
    image: "E-com.png",
    link: "https://asthica.com",
    technologies: skillsData.ecommerce, // E-commerce specific tech stack
    bgColor: "bg-red-900",
  },
];

const Projects = () => {
  return (
    <div id="Projects" className="min-h-screen bg-black text-white py-12">
      <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">Projects I’ve Worked on</h2>
      
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
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
