import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold text-center mb-3">
        Connect with Me
      </h2>
      <p className="dark:text-white text-black text-lg text-center mb-6">
        Contact me, let's make magic together
      </p>
      <form
        className="max-w-2xl mx-auto space-y-6"
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
    </section>
    </motion.contactSection>
  );
};

export default ContactSection;
