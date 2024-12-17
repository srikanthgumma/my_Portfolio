import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [

    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "I create stunning interfaces using HTML, CSS, JavaScript, and frameworks like Angular, Vue, NextJS & ReactJS.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Development",
      description:
        "Expert in React Native to build cross-platform mobile applications.",
    }

  ];

  return (
    <motion.ServicesSection
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        duration: 5, ease: 'easeInOut', 
        
    }}
>
    <section
      id="services"
      className="px-6 sm:px-10 md:px-16 py-12 bg-white dark:bg-gray-800"
    >
      <h2 className="text-indigo-500 text-3xl sm:text-4xl font-semibold mb-6">
        The Services I Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 flex flex-col items-center text-center"
          >
            <i className={`${service.icon} text-indigo-500 text-3xl mb-4`}></i>
            <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-black dark:text-white text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </motion.ServicesSection>
  );
};

export default ServicesSection;
