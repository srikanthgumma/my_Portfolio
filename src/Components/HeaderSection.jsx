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
    <header className="bg-gray-800 dark:bg-gray-800 shadow-md  w-full p-2 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-indigo-500 text-2xl font-semibold">Gummadi Srikanth</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-indigo-500 hover:text-black dark:hover:text-indigo-500">Home</a>
          <a href="#about" className="hover:text-indigo-500 text-indigo-500">About Me</a>
          <a href="#services" className="hover:text-indigo-500 text-indigo-500">Services</a>
          <a href="#projects" className="hover:text-indigo-500 text-indigo-500">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 text-indigo-500">Contact</a>
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
        <div className="md:hidden bg-gray-300 dark:bg-gray-900 p-10">
          <a href="#home" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Home</a>
          <a href="#about" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">About Me</a>
          <a href="#services" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Services</a>
          <a href="#projects" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-indigo-500 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </header>
    </motion.HeaderSection>
  );
};

export default HeaderSection;
