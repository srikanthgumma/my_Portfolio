import React from 'react';
import { motion } from 'framer-motion';
import pic from '../images/profilename.jpg';
import { MdOutlineSend } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HomeSection = () => {
    return (
        <section
            id="home"
            className="flex-1 flex flex-col-reverse md:flex-row justify-between p-4 xl:p-20 w-full h-full lg:h-[1000px] items-start bg-[#1f2937] mt-20"
        >
            <div className=' flex flex-col items-center justify-start lg:items-start text-left  gap-2 lg:gap-8 animate-fade-in-up' style={{ animationDelay: '0.4s' }} >
                <div className='flex flex-col gap-2 mt-8  '>
                    <h1 className='text-gray-400 text-[10px] lg:text-xl'>FULL STACK WEB DEVELOPER</h1>
                    <h1 className="lg:text-6xl text-2xl text-center lg:text-left font-sans dark:text-white text-black">Hey! I Am <br />
                    </h1>
                </div>
                <h1 className=' font-bold text-2xl lg:text-6xl bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  text-transparent text-center select-auto' >Srikanth Gummadi</h1>
                <p className="text-sm lg:text-xl text-center lg:text-left  font-medium dark:text-gray-300 text-gray-600  ">
                    I'm a full-stack web developer with 11 months of internship experience.<br />
                    I have good knowledge of JavaScript, React.js, Node.js, Express.js, and MongoDB, Tailwind, MUI.
                </p>
                <a href='mailTo:srikanthgummadi516@gmail.com' className=' px-10 py-2 md:py-3  w-fit rounded-full flex flex-row items-center gap-3 bg-gradient-to-r mt-4 md:mt-2  from-blue-500  to-pink-500'>HIRE ME <MdOutlineSend size={20} /></a>
                <div className='mt-6 flex flex-col gap-4 justify-center lg:items-start items-center mx-auto lg:mx-0'>
                    <h1 className='text-white text-xl lg:text-2xl animate-fade-in-up'>Follow Me:</h1>
                    <div className='flex flex-row gap-3'>
                        <button className='border  rounded-full p-3 hover:border-blue-600 '><LiaLinkedinIn color='white' size={22} /></button>
                        <button className='border  rounded-full p-3'><FaTwitter color='white' size={22} /></button>
                        <button className='border  rounded-full p-3'><FaGithub color='white' size={22} /></button>
                        <button className='border  rounded-full p-3'><FaWhatsapp color='white' size={22} /></button>
                        <button className='border  rounded-full p-3'><FaInstagram color='white' size={22} /></button>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center  md:mb-0  lg:w-[50%] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <motion.img
                    src={pic}
                    alt="Profile"
                    className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-indigo-500 object-cover "
                    style={{
                        borderRadius: '50%', // Optional, for rounded image
                        objectFit: 'cover', // Ensures the image covers the area
                    }}
                    animate={{
                        rotate: 360, // Rotate the image 360 degrees
                    }}
                    transition={{
                        repeat: 1, // Repeat the animation
                        repeatType: 'loop', // Loop the animation
                        duration: 8, // Duration of one rotation
                    }}
                />
            </div>
        </section>

    );
};

export default HomeSection;
