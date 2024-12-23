import React from 'react';
import { motion } from 'framer-motion';


export default function Skills() {
  return (
    <section
      id="skills"
      className="flex-1 overflow-hidden text-center w-full px-1 lg:px-16 py-12 bg-gray-800 relative animate-fade-in-up"
    >
      <p className='text-center text-blue-700 text-sm lg:text-lg font-bold '>MY SKILLS PROGRESS SO FAR</p>
      <h1 className='text-center text-white text-xl lg:text-3xl font-bold mt-2 mb-12'>MY SKILLS</h1>
      <div className="container mx-auto w-full overflow-hidden ">
        <div className="carousel-items flex items-center justify-center w-fit animate-carouselAnim ml-32">
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/html.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>Html5</h1>
            <p className="mt-3 text-blue-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Experienced
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/css.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>CSS</h1>
            <p className="mt-3 text-blue-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Experienced
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/js.webp')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>JavaScript</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-1 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/sql.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>SQL</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-1 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/git.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>Git</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>

          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-1 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/github.png')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>GitHub</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/reactjs.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>React.js</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/nodejs.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>Node.js</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3  flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/expressjs.png')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>Express.js</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/tailwind.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>Tailwind CSS</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/rn.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>React Native</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-2 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/angular.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>Angular.js</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
          <div className="mr-60 carousel-focus flex items-center gap-3 flex-col relative bg-gray-800 border border-blue-400  mx-5 my-10 px-1 py-4  lg:px-8 lg:py-10 rounded-lg shadow-lg w-[180px] lg:w-[260px]">
            <img
              className="h-16 w-16 rounded-full shadow-2xl object-cover"
              src={require('../images/mongodb.jpg')}
              alt="Img"
            />
            <h1 className='text-white text-xl'>MongoDB</h1>
            <p className="mt-3 text-gray-400 text-sm text-center border border-blue-800 px-4 py-1 rounded-3xl">
              Intermediate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
