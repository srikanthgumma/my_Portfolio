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
        className="px-6 sm:px-10 md:px-16 pb-28 w-full bg-[#1f2937] animate-fade-in-up"
      >
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:mx-auto w-full'>
          <img src={require('../images/programmer1.png')} className=' w-fit  ' />
          <div className=' flex flex-col gap-8'>
            <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold  mb-3md:mb-6">
              WHO I AM
            </h2>
            <p className="text-sm sm:text-xl font-medium dark:text-white  max-w-[850px]">
              Hi, my name is <span className='bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text font-bold  text-transparent text-center select-auto'>Srikanth Gummadi</span>, Full Stack Developer, UI Designer, and Mobile Developer.

              I am a highly skilled frontend web developer with hands-on experience delivering over 10 real-time projects using cutting-edge technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind, and MUI. My expertise lies in designing and developing responsive, user-friendly, and scalable web applications tailored to meet client and industry requirements.<br/><br/>

              In addition to my technical skills, I bring over 4 years of experience as a social media freelancer. I have a proven track record of designing and delivering high-quality, impactful content across diverse social media platforms. My creative approach and understanding of audience engagement have enabled me to help brands enhance their online presence and connect effectively with their target audiences.<br/><br/>

              I thrive on challenges and am passionate about leveraging my technical and creative expertise to deliver innovative solutions. My ability to blend development skills with creative content strategy allows me to contribute meaningfully to projects and teams. Whether building web solutions or crafting digital content, I am committed to excellence and continuous learning to stay at the forefront of industry trends.
            </p>
            <a href='/media/gummadisrikanthresume.pdf' download='gummadisrikanthresume.pdf' className='bg-gradient-to-r w-fit items-center px-6 py-3 from-blue-500  to-pink-500 text-white rounded-3xl mt-8  font-bold  text-transparent text-center select-auto flex  gap-3'>DOWNLOAD MY CV <HiOutlineDownload size={26} /></a>
          </div>
        </div>
      </section>
    </motion.Aboutsection>
  );
};

export default Aboutsection;
