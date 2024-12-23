import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDownload } from "react-icons/hi";

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
        id="aboutus"
        className="px-6 sm:px-10 md:px-16 pb-16 mb-24 w-full bg-white dark:bg-gray-800 animate-fade-in-up"
      >
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:mx-auto w-full'>
          <img src={require('../images/programmer1.png')} className=' w-fit  ' />
          <div className=' flex flex-col gap-8'>
            <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold  mb-3md:mb-6">
              WHO I AM
            </h2>
            <p className="text-lg sm:text-2xl font-medium dark:text-white  max-w-[850px]">
              Hi, my name is <span className='bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text font-bold  text-transparent text-center select-auto'>Srikanth Gummadi</span>, Frontend Developer, UI Designer, and Mobile Developer.
              <br />
              <br />
              I have honed my skills in Web Development and advanced UI design principles, enabling me to create intuitive and visually appealing applications.<br /> <br />
              I'm an energetic person, a good communicator, positive thinker and creative. I'm looking for a chance to showcase my skills, creativity and confidence for mutual benefits. Moreover, whenever I face a problem or an issue, I don't leave it behind. I will do my best to solve it.
              <br /><br />In addition to that,
              I'm a great team member. I am more open to new opportunities and challenges
            </p>
            <a href='/media/gummadisrikanthresume.pdf' download='gummadisrikanthresume.pdf' className='bg-gradient-to-r w-fit items-center px-6 py-3 from-blue-500  to-pink-500 text-white rounded-3xl mt-8  font-bold  text-transparent text-center select-auto flex  gap-3'>DOWNLOAD MY CV <HiOutlineDownload size={26} /></a>
          </div>
        </div>
      </section>
    </motion.Aboutsection>
  );
};

export default Aboutsection;
