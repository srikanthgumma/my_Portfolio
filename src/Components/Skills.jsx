import React from 'react';
import { motion } from 'framer-motion';


export default function Skills() {
    return (
        <motion.Skills
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2, ease: 'easeInOut',

            }}
        >

            <section
                id="home"
                className="flex-1  items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-gray-800 sm:bg-transparent"
            >
                <h1 className='text-center text-white text-4xl font-bold'>Skills</h1>
                <div className="flex flex-col md:flex-row justify-center items-center p-12  w-full gap-8" >
                    <div className="relative p-5 bg-gray-600  rounded-3xl flex overflow-hidden items-center w-fit min-w-[300px] md:min-w-[500px] cursor-pointer group">
                        <img className="z-50 h-6 w-6 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3" height="20" width="20" src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" />
                        <div
                            className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden">
                        </div>
                        <div className="relative z-10 flex items-center space-x-4">
                            <img className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95" height="64" width="64" src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" />
                            <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
                                <div className="relative text-md font-semibold text-gray-100 my-1 cursor-pointer 
                                            after:transition-[width] after:ease-in-out after:duration-700 
                                            after:absolute after:bg-gradient-to-r after:from-gray-100/30
                                            after:via-gray-100/10 after:to-transparent after:origin-left 
                                            after:h-[2px] after:w-0 group-hover:after:w-full 
                                            after:bottom-0 after:left-0">
                                    Frontend Technologies
                                </div>
                                <p className="text-xs text-gray-50/70 w-full text-balance">HTML/CSS, Tailwind CSS, Bootstrap CSS, React.js, React Native</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative p-5 bg-gray-600  rounded-3xl flex overflow-hidden items-center w-fit min-w-[300px] md:min-w-[500px] cursor-pointer group">
                        <img className="z-50 h-6 w-6 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3" height="20" width="20" src="https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png" />
                        <div
                            className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden">
                        </div>
                        <div className="relative z-10 flex items-center space-x-4">
                            <img className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95" height="64" width="64" src="https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png" />
                            <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
                                <div className="relative text-md font-semibold text-gray-100 cursor-pointer 
                                            after:transition-[width] after:ease-in-out after:duration-700 
                                            after:absolute after:bg-gradient-to-r after:from-gray-100/30
                                            after:via-gray-100/10 after:to-transparent after:origin-left 
                                            after:h-[2px] after:w-0 group-hover:after:w-full 
                                            after:bottom-0 after:left-0">
                                    Backend Technologies
                                </div>
                                <p className="text-xs text-gray-50/70 text-balance">Node.js, MongoDB, SQL, Expess.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.Skills >
    )
}
