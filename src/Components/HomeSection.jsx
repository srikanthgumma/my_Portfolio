import React from 'react';
import { motion } from 'framer-motion';
import pic from '../images/profilename.jpg';

const HomeSection = () => {
    return (
        <motion.homeSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2, ease: 'easeInOut',

            }}
        >
            <section
                id="home"
                className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-gray-800 md:bg-transparent"
            >
                <div className='py-8' >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white text-black mb-4">
                        Hello, I’m Srikanth Gummadi
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-medium dark:text-gray-300 text-gray-600">
                        Freelance Content Creator, UI Designer & Frontend Developer.  I create seamless web experiences for end-users.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center  md:mb-0">
                    <motion.img
                        src={pic}
                        alt="Profile"
                        className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-500 object-cover "
                        style={{
                            borderRadius: '50%', // Optional, for rounded image
                            objectFit: 'cover', // Ensures the image covers the area
                        }}
                        animate={{
                            rotate: 360, // Rotate the image 360 degrees
                        }}
                        transition={{
                            repeat: 2, // Repeat the animation
                            repeatType: 'loop', // Loop the animation
                            duration: 8, // Duration of one rotation
                        }}
                    />
                </div>
            </section>
        </motion.homeSection >

    );
};

export default HomeSection;
