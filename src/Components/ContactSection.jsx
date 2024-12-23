import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbPhoneCalling } from "react-icons/tb";
import { TbMailForward } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API or email)
    console.log('Form submitted:', formData);
  };

  return (
    <motion.contactSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 6, ease: 'easeInOut',

      }}
    >
      <section
        id="contact"
        className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800"
      >
        <h2 className="text-indigo-500 text-xl lg:text-4xl font-semibold text-center mb-3">
          Connect with Me
        </h2>
        <p className="dark:text-white text-black text-sm lg:text-lg text-center mb-14">
          Contact me, let's make magic together
        </p>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-60 ' >
          <div className='flex flex-col gap-10 items-start p-6'>
            <div className='flex flex-row gap-6 justify-center items-center'>
              <TbPhoneCalling size={70} color='green' className='bg-green-50 rounded-full p-5' />
              <div className='flex flex-col text-white '>
                <span className='text-xl lg:text-2xl'>Call Me</span>
                <span className='text-[10px] lg:text-xl text-gray-300'>+919505907430</span>
              </div>
            </div>
            <div className='flex flex-row gap-6 justify-center items-center'>
              <TbMailForward size={70} color='red' className='bg-red-50 rounded-full p-5' />
              <div className='flex flex-col text-white '>
                <span className='text-xl lg:text-2xl'>Email Me</span>
                <span className='text-[10px] lg:text-xl text-gray-300'>srikanthgummadi516@gmail.com</span>
              </div>
            </div>
            <div className='flex flex-row gap-6 justify-center items-center'>
              <FaLocationDot size={70} color='blue' className='bg-blue-50 rounded-full p-5  ' />
              <div className='flex flex-col text-white '>
                <span className='text-xl lg:text-2xl'>Location</span>
                <span className='text-[10px] lg:text-xl text-gray-300'>Hyderabad,India</span>
              </div>
            </div>
          </div>
          <form
            className=" space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-4 rounded-lg dark:bg-gray-700 bg-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 rounded-lg dark:bg-gray-700 bg-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full p-4 rounded-lg dark:bg-gray-700 bg-gray-300 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-blue-400 dark:bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </motion.contactSection>
  );
};

export default ContactSection;
