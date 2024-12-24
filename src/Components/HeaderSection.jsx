import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const HeaderSection = () => {
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("color-theme") === "dark" ||
  //     (!localStorage.getItem("color-theme") &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  // );
  const [mobileMenu, setMobileMenu] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("color-theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("color-theme", "light");
  //   }
  // }, [darkMode]);

  // const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <motion.HeaderSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1, ease: 'easeInOut',

      }}
    >
      {/* fixed z-20 */}
      <header className="bg-[#1f2937] shadow-md  w-full p-4 ">
        <div className=" lg:px-16 lg:py-4 flex justify-between items-center  " >
          {/* Logo */}
          <div className="text-indigo-500 text-xl lg:text-2xl font-semibold animate-ping" style={{animationIterationCount:4}} >GS</div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6  text-sm lg:text-xl animate-bounce" style={{animationIterationCount:1}}>
            <a href="#home" className="text-indigo-500 hover:text-black dark:hover:text-indigo-500 animate-home">Home</a>
            <a href="#aboutus" className="hover:text-indigo-500 text-indigo-500 animate-about">About</a>
            <a href="#skills" className="hover:text-indigo-500 text-indigo-500 animate-skills" >Skills</a>
            <a href="#experience" className="hover:text-indigo-500 text-indigo-500  animate-experience">Experience</a>
            <a href="#projects" className="hover:text-indigo-500 text-indigo-500 animate-projects">Projects</a>
            <a href="#contact" className="hover:text-indigo-500 text-indigo-500 animate-contact">Contact</a>
          </nav>

          {/* Dark Mode Toggle */}
          {/* <button onClick={toggleDarkMode} className="text-indigo-500 ml-4">
          {darkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm4.22 1.22a1 1 0 011.415 1.415l-.707.707a1 1 0 11-1.414-1.414l.707-.708zM17 10a1 1 0 100 2h1a1 1 0 100-2h-1zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"></path>
            </svg>
          )}
        </button> */}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-indigo-500"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenu && (
          <div className="md:hidden bg-transparent p-10">
            <a href="#home" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Home</a>
            <a href="#about" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">About</a>
            <a href="#skills" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Skills</a>
            <a href="#experience" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Experience</a>
            <a href="#projects" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Projects</a>
            <a href="#contact" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Contact</a>
          </div>
        )}
      </header>
    </motion.HeaderSection>
  );
};

export default HeaderSection;
