const ProjectCard = ({ title, image, link, technologies, bgColor }) => {
    return (
      <div className={`rounded-2xl p-6 ${bgColor} text-white shadow-lg flex flex-col md:flex-row items-center gap-6 relative`}>
        
        {/* Left Side: Project Image */}
        <div className="w-full md:w-2/5">
          <img src={image} alt={title} className="w-full rounded-lg shadow-lg" />
        </div>
  
        {/* Right Side: Project Details */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          {/* Project Title */}
          <h3 className="text-2xl font-bold">{title}</h3>
  
          {/* Work Type */}
          <p className="mt-2 text-sm">Worked on</p>
          <div className="flex gap-2 mt-1">
            <span className="bg-white text-black px-3 py-1 text-sm rounded-full">Website</span>
            <span className="bg-white text-black px-3 py-1 text-sm rounded-full">Admin Panel</span>
          </div>
  
          {/* Technologies Used - Updated Section */}
          <p className="mt-4 text-sm">Technologies I have used</p>
          <div className="flex flex-wrap gap-3 mt-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md"
              >
                <img src={tech.logo} alt={tech.name} className="w-6 h-6 mr-2" />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
  
          {/* Button to Project */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-white text-black font-semibold py-2 px-5 rounded-full hover:scale-105 transition w-max"
          >
            Go to {title}
          </a>
        </div>
  
        {/* Info Icon */}
        <span className="absolute top-4 right-4 p-2 bg-white rounded-full text-white text-lg">🌟</span>
      </div>
    );
  };
  
  export default ProjectCard;
  