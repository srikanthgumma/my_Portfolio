import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from "@react-spring/web";
import pic1 from '../images/counter.png';
import pic2 from '../images/page.png'
import pic3 from '../images/todo.jpeg';
import pic4 from '../images/gymai.jpeg';
import pic5 from '../images/table.jpeg';
import pic6 from '../images/vriddhi.jpeg';
import pic7 from '../images/weather.jpeg';
import pic8 from '../images/epratibha.jpeg';



const projects = [
  {
    imgSrc: pic8,
    title: "E-PRATIBHA UPSC website",
    description:
      "....",
    link: "https://github.com/srikanthgumma/e-prathibha-website",
  },
 
  {
    imgSrc: pic7,
    title: "Weather App",
    description:
      "....",
    link: "https://srikanthgumma.github.io/react_weather_app",
  },
  {
    imgSrc: pic2,
    title: "Calculator",
    description:
      "....",
    link: "https://github.com/srikanthgumma/code-calculator",
  },
  {
    imgSrc: pic2,
    title: "Responsive Page",
    description:
      "....",
    link: "http://srikanthgumma.github.io/react_responsive_landingpage",
  },
  {
    imgSrc: pic3,
    title: "MERN TO-DO",
    description:
      "....",
    link: "https://github.com/srikanthgumma/Mern-Todo-Project",
  },
  {
    imgSrc: pic1,
    title: "Counter App",
    description:
      "....",
    link: "https://srikanthgumma.github.io/react-counter-app",
  },
  {
    imgSrc: pic4,
    title: "GymAI website",
    description:
      "....",
    link: "https://gym-ai-site.vercel.app/",
  },
  {
    imgSrc: pic6,
    title: "Vriddhi Media website",
    description:
      "....",
    link: "https://vriddhi-mediaa.vercel.app/",
  },
  {
    imgSrc: pic5,
    title: "Editable Table",
    description:
      "....",
    link: "https://tabulator-table-self.vercel.app/",
  },
  {
    imgSrc: pic3,
    title: "To-do List",
    description:
      "....",
    link: "https://srikanthgumma.github.io/todo_Repo",
  },
];

const ProjectsSection = () => {
  return (
    <motion.ProjectsSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 4, ease: 'easeInOut',

      }}
    >
      <section
        id="projects"
        className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800"
      >
        <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">
          Featured Projects
        </h2>
        <animated.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="rounded-lg mb-4 object-cover h-48"
              />
              <h3 className="text-white text-2xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-black dark:text-white text-lg flex-grow">
                {project.description}
              </p>
              <a
                href={project.link}
                className="text-white mt-4 font-semibold hover:underline opacity-60 hover:opacity-100 hover:text-indigo-500"
              >
                View Link
              </a>
            </div>
          ))}
        </animated.div>
      </section>
    </motion.ProjectsSection>
  );
};

export default ProjectsSection;
