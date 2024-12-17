import React from 'react';
import { motion } from 'framer-motion';

const Aboutsection = () => {
  return (
    <motion.Aboutsection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 3, ease: 'easeInOut',

      }}
    >
      <section
        id="about"
        className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800"
      >
        <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">
          About Me
        </h2>
        <p className="text-lg sm:text-xl font-medium dark:text-white text-black">
          Hi, my name is Srikanth Gummadi, Frontend Developer, UI Designer, and Mobile Developer. I have honed my skills in Web Development and advanced UI design principles, enabling me to create intuitive and visually appealing applications.
         
          I'm an energetic person, a good communicator, positive thinker and creative. I'm looking for a chance to showcase my skills, creativity and confidence for mutual benefits. Moreover, whenever I face a problem or an issue, I don't leave it behind. I will do my best to solve it. In addition to that, I'm a good team member. I am more open to new opportunities and challenges
        </p>
      </section>
    </motion.Aboutsection>
  );
};

export default Aboutsection;
