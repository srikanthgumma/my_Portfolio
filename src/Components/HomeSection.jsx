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
            className="flex-1 flex flex-col-reverse lg:flex-row items-center justify-between p-4 xl:px-20 w-full h-full lg:h-[750px] lg:items-start bg-[#1f2937]"
        >
            <div className=' flex flex-col items-center justify-start lg:items-start text-left  gap-2 lg:gap-5 animate-fade-in-up' style={{ animationDelay: '0.4s' }} >
                <div className='flex flex-col mt-8  '>
                    {/* <h1 className='text-gray-400 text-[10px] lg:text-sm'>FULL STACK WEB DEVELOPER</h1> */}
                    <h1 className="lg:text-5xl text-2xl text-center lg:text-left font-sans dark:text-white text-black">Hey! I Am <br />
                    </h1>
                </div>
                <h1 className=' font-bold text-2xl lg:text-6xl bg-gradient-to-r items-center from-blue-500  to-pink-500 bg-clip-text  text-transparent text-center select-auto' >Srikanth Gummadi</h1>
                <p className="text-sm lg:text-lg max-w-2xl text-center md:text-left  font-medium dark:text-gray-300 text-gray-600  ">
                    I'm a full-stack web developer with hands-on exprerience on more than 10 real time projects based the technologies such as HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, Tailwind, MUI.<br />
                    Moreover, I am a social media freelancer with 4+ years of experience in designing and delivering high quality content for all types of social platforms.
                </p>
                <div className='flex flex-col items-center w-full md:flex-row gap-6'>
                    <a href='mailTo:srikanthgummadi516@gmail.com' className=' px-10 py-2 text-center w-full  rounded-full flex flex-row items-center justify-center gap-3 bg-gradient-to-r mt-4 md:mt-2 hover:font-bold hover:text-white  from-blue-500  to-pink-500'>HIRE ME <MdOutlineSend size={20} /></a>
                    <a href='https://meetmymotto.vercel.app/' className=' px-10 py-2 text-center w-full  rounded-full  bg-gradient-to-r mt-4 md:mt-2 hover:font-bold hover:text-white  from-blue-500  to-pink-500'>My Business</a>

                </div>
                <div className='mt-6 flex flex-col gap-4 justify-center lg:items-start items-center mx-auto lg:mx-0'>
                    <h1 className='text-white text-xl lg:text-2xl animate-fade-in-up'>Follow Me:</h1>
                    <div className='flex flex-row gap-3'>
                        <a href='https://www.linkedin.com/in/gummadi-srikanth/' className='border  rounded-full hover:-translate-y-1 p-3 hover:border-blue-600 '><LiaLinkedinIn color='white' size={22} /></a>
                        <a href='https://github.com/srikanthgumma' className='border hover:-translate-y-1  rounded-full p-3  hover:border-blue-600 '><FaGithub color='white' size={22} /></a>
                        <a href='https://wa.me/message/RRMBJAANXTFTL1' className='border hover:-translate-y-1  rounded-full p-3  hover:border-blue-600 '><FaWhatsapp color='white' size={22} /></a>
                        <a href='https://www.instagram.com/srikanthbiz' className='border hover:-translate-y-1  rounded-full p-3 hover:border-blue-600 '><FaInstagram color='white' size={22} /></a>
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
