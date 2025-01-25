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
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://github.com/srikanthgumma/e-prathibha-website",
  },

  {
    imgSrc: pic7,
    title: "Weather App",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://srikanthgumma.github.io/react_weather_app",
  },
  {
    imgSrc: pic2,
    title: "Calculator",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://github.com/srikanthgumma/code-calculator",
  },
  {
    imgSrc: pic2,
    title: "Responsive Page",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "http://srikanthgumma.github.io/react_responsive_landingpage",
  },
  {
    imgSrc: pic3,
    title: "MERN TO-DO",
    description:
      "HTML | CSS | JAVASCRIPT | REACT | NODE.JS | EXPRESS.JS",
    link: "https://github.com/srikanthgumma/Mern-Todo-Project",
  },
  {
    imgSrc: pic1,
    title: "Counter App",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://srikanthgumma.github.io/react-counter-app",
  },
  {
    imgSrc: pic4,
    title: "GymAI website",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://gym-ai-site.vercel.app/",
  },
  {
    imgSrc: pic6,
    title: "Vriddhi Media website",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://vriddhi-mediaa.vercel.app/",
  },
  {
    imgSrc: pic5,
    title: "Editable Table",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
    link: "https://tabulator-table-self.vercel.app/",
  },
  {
    imgSrc: pic3,
    title: "To-do List",
    description:
      "HTML | CSS | JAVASCRIPT | REACT",
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
        className=" px-1 lg:px-16 py-12 bg-[#1f2937] overflow-hidden"
      >
        <p className='text-blue-500 text-center font-bold mb-3 text-sm lg:text-xl'>CHECK OUT ALL OF MY PROJECTS</p>
        <h2 className="text-white text-2xl lg:text-4xl  text-center font-semibold mb-10">
          MY WORK
        </h2>
        <div className="projects overflow-x-auto flex relative">
          <div className=" flex items-center gap-16  p-4 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1f2937] shadow-xl rounded-lg flex flex-col w-[280px] lg:w-[600px] h-fit  hover:shadow-2xl border hover:border-blue-800  border-gray-700 duration-300 transform hover:scale-105 transition-transform"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="rounded-lg mb-4 object-cover h-36 lg:h-72 w-full"
                />
                <div className='p-6'>
                  <p className=' text-sm bg-gradient-to-r text-left from-blue-500  to-pink-500 bg-clip-text font-bold  text-transparent select-auto pb-2'>
                    {project.description}
                  </p>
                  <h3 className="text-white text-lg lg:text-2xl font-semibold mb-2">
                    {project.title}
                  </h3> 
                  <a
                    href={project.link}
                    className="text-white mt-4  font-semibold hover:underline opacity-60 hover:opacity-100 hover:text-indigo-500"
                  >
                    View Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.ProjectsSection>
  );
};

export default ProjectsSection;
