import React, { useState } from "react";

const AccordionItem = ({ title, years, role, children, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div>
      <h3 id={`accordion-flush-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 ${isOpen
            ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-blue-600 rounded-xl"
            : "text-gray-500 dark:text-gray-400"
            }`}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-flush-body-${id}`}
        >
          <div className="flex flex-row items-center justify-between w-[80%]">
            <div className="flex flex-col w-full justify-between items-start">
              <span className="text-[12px] lg:text-xl">{title}</span>
              <span className="text-[10px] lg:text-lg">{role}</span>
            </div>
            <span className=" text-[10px] lg:text-sm text-nowrap">{years}</span>

          </div>
          <svg
            className={`w-6 h-6 shrink-0 transform ${isOpen ? "rotate-180" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h3>
      {isOpen && (
        <div
          id={`accordion-flush-body-${id}`}
          aria-labelledby={`accordion-flush-heading-${id}`}
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-1 lg:p-10 my-16 bg-[#1f2937]" id="experience">
      <p className="text-blue-700 text-sm lg:text-xl font-bold text-center">WORK EXPERIENCE & EDUCATION</p>
      <h1 className="text-white text-xl lg:text-3xl font-bold text-center mb-14">EXPERIENCE</h1>
      <div id="accordion-flush">
        <AccordionItem title="CodeXIntern" years="Aug 2024 - Oct 2024" role="Frontend Developer" id="1">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl py-5 px-4">
            I implemented reusable UI components using company-specific software, focusing on efficient and scalable design solutions. Leveraging CSS, I styled and customized components to ensure responsiveness across various screen sizes. My work included designing and developing essential UI components such as Login, Register, Home Page, Modals, Cards, and Sidebars, enhancing the user experience.
            <br /> <br /> Additionally, I built websites using React.js and incorporated reusable React UI elements from the MUI store, streamlining development while maintaining consistency in design.
          </p>
        </AccordionItem>

        <AccordionItem title="Purecode AI" years="Nov 2022 - Oct 2023" role="Frontend Developer" id="2">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl py-5 px-4">
            I have contributed to various projects, including e-commerce platforms, application user interfaces, and marketing UIs. My expertise lies in creating responsive and dynamic web pages utilizing technologies such as HTML, CSS, JavaScript, React.js, Tailwind CSS, and Material-UI (MUI). I focus on delivering engaging and efficient designs that enhance user experiences across devices.
            <br /> <br />Additionally, I have experience with version control systems, ensuring seamless collaboration and code management. I routinely push code to GitHub, enabling efficient tracking and integration of project updates.
          </p>
        </AccordionItem>

        <AccordionItem
          title="Engrip"
          years="Feb 2022 - Aug 2022"
          role="Frontend Developer"
          id="3"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-xl py-5 px-4">
            I have hands-on experience using the Postman tool for testing APIs provided by the project manager, ensuring smooth backend integration and functionality. My work involved designing and implementing efficient frontend user interfaces with a strong focus on high performance, scalability, and responsiveness. I utilized CSS properties to create visually appealing and user-friendly designs tailored for various devices. Some of my key contributions include developing UIs for critical features such as login, registration, and email verification by effectively integrating APIs. My development process emphasizes creating seamless user experiences while maintaining clean, reusable code. Additionally, I have experience using Git for version control, allowing me to manage and push code changes into the repository efficiently. This ensures effective collaboration within the team and enables systematic project tracking, contributing to the successful delivery of high-quality web applications.
          </p>
        </AccordionItem>

        <AccordionItem title="B.Tech" years="Jul 2017 - Sep 2021" role="Computer Science and Engineering" id="4">
          <div className="flex flex-col p-4 gap-1">
            <h1 className="text-white font-bold text-xl p-0 m-0">Bachelors of Engineering In Computer Science and Engineering </h1>
            <p className="text-blue-500">Indur Institute of Engineering & Technology, Siddipet(Telangana)</p>
            <p className="text-white mt-6">I pursued my major in the CSE branch and achieved an impressive CGPA of 6.5 </p>
          </div>

        </AccordionItem>

        <AccordionItem title="Intermediate" years="Jun 2015 - Apr 2017" role="Maths, Physics, Chemistry" id="4">
          <div className="flex flex-col p-4 gap-1">
            <h1 className="text-white font-bold text-xl p-0 m-0">Senior Secondary (MPC)</h1>
            <p className="text-blue-500">Master Minds Junior College, Siddipet(Telangana)</p>
            <p className="text-white mt-6">I completed a comprehensive two-year senior secondary education program with a focus on MPC(Maths, Physics, Chemistry). Throughout this period, I dedicated myself to mastering these core subjects and attained an overall percentage of 87%. </p>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default ExperienceSection;

