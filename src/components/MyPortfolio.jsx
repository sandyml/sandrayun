import React, { useState } from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
 SiCss3,
 SiMui,
 SiRedux,
 SiRubyonrails,
 SiTailwindcss
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { BsGithub, BsYoutube } from 'react-icons/bs';
import TakeAHike from '../assets/TakeAHike.png';
import takeahiketrailheads from '../assets/takeahiketrailheads.png';
import AlltRAILS from '../assets/AlltRAILS.png';
import myportfolio from '../assets/myportfolio.png';
import skills from '../assets/skills.png';
import reactproject from '../assets/reactproject.png';
import reactprojectfave from '../assets/reactprojectfave.png';
import quotesgram from '../assets/quotesgram.png';
import quotesgramform from '../assets/quotesgramform.png';
import { FcEngineering } from 'react-icons/fc';
import { TbBrandNextjs } from 'react-icons/tb';

export const MyPortfolio = () => {
 const [showVideo, setShowVideo] = useState(false);

 const toggleSeeDemoVideo = () => {
  (showVideo === false) ? setShowVideo(true) :
  setShowVideo(false);
 };

 return (
  <div>

   <section className="py-10 p-10">
    <div className="text-center p-10 py-0">
     <h2 
     style={{
      fontSize: 55.6,
      fontFamily: 'Aurora Regular, Astralaga',
      letterSpacing: 0,
      fontWeight: 200
    }}
     className="text-5xl py-1 text-teal-500 font-medium dark:text-teal-500 md:text-2xl">
      Portfolio
     </h2>
     
     <h3 className="text-2xl py-5 dark:text-white md:text-2xl">
      My Projects From Flatiron
     </h3>
     <p className="text-md py-1 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md">
      Mini Projects simply designed.<br />
      Starting off from most recent projects I creared to past projects
     </p>
    </div>

    <div className="flex flex-col-col gap-10 py-10 md:flex-row md:flex-wrap sm:flex justify-center">

     <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition duration-300 ease-in-out hover:scale-110 scale-100">
       <img src={myportfolio} className="scale-85 rounded-lg object-cover shadow-lg" alt="my portfolio" />
       <img src={skills} className="scale-85 rounded-lg object-cover shadow-lg" alt="my portfolio skills" />
      </div>
      <div className="p-6 text-center">
       <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        MY PORTFOLIO WEBSITE
       </h4>
       <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        Created with NEXT.js and Tailwind for the first time with all the skills documentations I&#39;ve adapted so far.
       </p>
       <h4 className=" py-1 text-teal-600">Design Tools I Use</h4>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2">
       <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        <SiTailwindcss className="text-1xl gap-16 py-3 text-blue-700 dark:text-blue-700" />
        <TbBrandNextjs className="text-1xl gap-16 py-3 text-black dark:text-black" />
       </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap sm:flex p-1 justify-left">
       <a
        href='https://github.com/sandyml/sandrayun'
        alt='github'
        className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
        <BsGithub />
       </a>&emsp;
      </div>
     </div>

     <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition duration-300 ease-in-out hover:scale-110 scale-100">
       <img src={TakeAHike} className="scale-85 rounded-lg object-cover shadow-lg " alt="take a hike" />
       <img src={takeahiketrailheads} className="scale-85 rounded-lg object-cover shadow-lg" alt="take a hike" />
      </div>
      <div className="p-6 text-center">
       <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Take A Hike
       </h4>
       <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        Created with the idea of RESTful API and full CRUD.
       </p>
       <h4 className=" py-1 text-teal-600">Design Tools I Use</h4>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2 ">
       <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        <SiRedux className="text-1xl gap-16 py-3 text-purple-600 dark:text-purple-600" />
        <SiTailwindcss className="text-1xl gap-16 py-3 text-blue-700 dark:text-blue-700" />
        <FcEngineering id="machine-rotate" className="text-1xl gap-16 py-3" />
       </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap sm:flex p-1 justify-left">
       <a
        href='https://github.com/sandyml/sandrayun'
        alt='github'
        className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
        <BsGithub />
       </a>&emsp;
       <BsYoutube 
        className="font-aurora-regular text-5xl py-0 text-red-600 md:text-3xl" 
        onClick={toggleSeeDemoVideo} />
       { showVideo ? 
        <iframe width="375" height="315" src="" title="Take A Hike" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       : null }
      </div>
     </div>

     <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition duration-300 ease-in-out hover:scale-110 scale-100">
       <img src={AlltRAILS} className="scale-85 rounded-lg object-cover" alt="all trails" />
      </div>
      <div className="p-6 text-center">
       <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        ALLtRAILS Reviews
       </h4>
       <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        Created with Rails hence the name.
       </p>
       <h4 className=" text-teal-600">Design Tools I Use</h4>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2">
       <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400 " />
        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
        <DiRuby className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
        <SiRubyonrails className="text-1xl gap-16 py-3 text-red-700 dark:text-red-700" />
        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
        <FcEngineering id="machine-rotate" className="text-1xl gap-16 py-3" />
       </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap sm:flex p-1 justify-left">
       <a
        href='https://github.com/sandyml/All-TRAILS'
        alt='github'
        className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
        <BsGithub />
       </a>&emsp;
       <BsYoutube 
        className="font-aurora-regular text-5xl py-0 text-red-600 md:text-3xl" 
        onClick={toggleSeeDemoVideo} />
       { showVideo ? 
        <iframe width="375" height="315" src="" title="All tRAILS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       : null }
      </div>
     </div>

     <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition duration-300 ease-in-out hover:scale-110 scale-100">
       <img src={quotesgram} className="scale-85 rounded-lg object-cover shadow-lg" alt="quotesgram" />
       <img src={quotesgramform} className="scale-85 rounded-lg object-cover shadow-lg" alt="quotesgram" />
      </div>
      <div className="p-6 text-center">
       <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        Quotesgram
       </h4>
       <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        Created with the idea of users being able to add and delete their quotes.
       </p>
       <h4 className=" py-1 text-teal-600">Design Tools I Use</h4>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2">
       <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
        {/* <div className=" relative overflow-hidden  bg-no-repeat text-5xl flex justify-center gap-6"> */}
        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
       </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap sm:flex p-1 justify-left">
       <a
        href='https://github.com/sandyml/quotesgram-backend'
        alt='github'
        className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
        <BsGithub />
       </a>&emsp;
      </div>
     </div>

     <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transition duration-300 ease-in-out hover:scale-110 scale-100">
       <img src={reactproject} className="scale-85 rounded-lg object-cover shadow-lg" alt="react project" />
       <img src={reactprojectfave} className="scale-85 rounded-lg object-cover shadow-lg" alt="react project" />
      </div>
      <div className="p-6 text-center">
       <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        React NYC Parks - Favorites
       </h4>
       <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
        Created with React with add to favorites and creating parks form.
       </p>
       <h4 className=" py-1 text-teal-600">Design Tools I Use</h4>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2">
       <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
       </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap sm:flex p-1 justify-left">
       <a
        href='https://github.com/sandyml/newyorkparks-react'
        alt='github'
        className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
        <BsGithub />
       </a>&emsp;
      </div>
     </div>

    </div>
   </section>
  </div>
 )
}
