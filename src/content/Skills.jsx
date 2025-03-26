import React from "react";

const skillsData = {
  // designTools: [
  //   { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  //   { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  // ],
  technologies: [
    { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "PHP", logo: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
    { name: "jQuery", logo: "https://cdn.worldvectorlogo.com/logos/jquery-4.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
    { name: "Bootstrap", logo: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
    { name: "React.js", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "React Hook Forms", logo: "https://cdn.worldvectorlogo.com/logos/react-1.svg" },
    { name: "Axios", logo: "https://cdn.worldvectorlogo.com/logos/axios.svg" },
    { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
    { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
    { name: "Flask", logo: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
    { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "MERN Stack", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "MEAN Stack", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon.svg" },
    { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg" },
    { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "CI/CD", logo: "https://cdn.worldvectorlogo.com/logos/github-actions.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "NumPy", logo: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg" },
    { name: "Pandas", logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
    { name: "Matplotlib", logo: "https://cdn.worldvectorlogo.com/logos/matplotlib.svg" },
    { name: "Seaborn", logo: "https://cdn.worldvectorlogo.com/logos/seaborn.svg" },
    { name: "Selenium", logo: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg" },
    { name: "AI Chatbot Development", logo: "https://cdn.worldvectorlogo.com/logos/chatbot.svg" },
    { name: "Natural Language Processing", logo: "https://cdn.worldvectorlogo.com/logos/nlp.svg" },
    { name: "OpenAI GPT Models", logo: "https://cdn.worldvectorlogo.com/logos/openai.svg" },
    { name: "Web Scraping", logo: "https://cdn.worldvectorlogo.com/logos/scrapy.svg" },
    { name: "N8N", logo: "https://cdn.worldvectorlogo.com/logos/n8n.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Power Automate", logo: "https://cdn.worldvectorlogo.com/logos/power-automate.svg" },
    { name: "Power BI", logo: "https://cdn.worldvectorlogo.com/logos/power-bi.svg" },
    { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
    { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
    { name: "Wix", logo: "https://cdn.worldvectorlogo.com/logos/wix.svg" },
    { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native.svg" },
    { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    { name: "SEO", logo: "https://cdn.worldvectorlogo.com/logos/seo.svg" },
    { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads.svg" },
    { name: "Facebook Ads", logo: "https://cdn.worldvectorlogo.com/logos/facebook.svg" },
    { name: "Social Media Marketing", logo: "https://cdn.worldvectorlogo.com/logos/social-media.svg" },
    { name: "Content Marketing", logo: "https://cdn.worldvectorlogo.com/logos/content-marketing.svg" },
    { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
    { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva.svg" },
    { name: "Styled Components", logo: "https://cdn.worldvectorlogo.com/logos/web-components.svg" },
    { name: "Google Search Console", logo: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" },
    { name: "Google Analytics", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "Hostinger", logo: "https://cdn.worldvectorlogo.com/logos/hostinger.svg" },
    { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
  ]
};


const Skills = () => {
  return (
    <div id="Skills" className="min-h-screen flex items-center justify-center bg-black">
      <section className="text-center py-16 text-white w-full max-w-5xl px-6">
        <h2 className="text-6xl font-bold text-yellow-400 mb-16">Skills</h2>

        {/* Design Tools Section */}
        {/* <div className="mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_10px_rgba(255,255,0,.5)]">
  Technology I Used In Project
</h1>

          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.designTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md"
              >
                <img src={tool.logo} alt={tool.name} className="w-6 h-6 mr-2" />
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Technologies Section */}
        <div>
          <h3 className="text-4xl pt-8 font-semibold text-yellow-400 mb-4 4 drop-shadow-[0_0_10px_rgba(255,255,0,.5)">
            Technologies I Use
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-md"
              >
                <img src={tech.logo} alt={tech.name} className="w-6 h-6 mr-2" />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
