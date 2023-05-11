import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 
  SiPostgresql,
  SiPython, 
  SiRedux,
  SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FcEngineering } from "react-icons/fc";

export const ToolBox = () => {
 return (
  <div>
   <section className="py-10">
    <div className="text-center p-10 py-0">
     <h2 
     style={{
      fontSize: 55.6,
      fontFamily: 'Aurora',
      letterSpacing: 0,
      fontWeight: 200
    }}
     className="text-5xl py-2 text-black font-medium dark:text-clotted-cream md:text-6xl highlight">
     Skills & Design Tools I Use
     </h2>
     <p className="text-md py-1 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md">
     I am working on adding additional tools to my toolbox—in the process of getting Python.
     </p>
    </div>
    <div className="lg:flex sm:flex justify-center" >
     <div style={{ maxWidth: 1600, height: 300 }} 
     className="max-w-lg scale-75 text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-white flex-1">
      <h4 className="font-aurora-regular py-4 text-teal-600">Languages I Use</h4>
      <div className="relative overflow-auto lg:text-5xl flex justify-center gap-0 md:text-center">
      <p className="text-sm text-black">
       <IoLogoJavascript className="text-8xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
        JavaScript</p>
      <p className="text-sm text-black">
       <FaReact id="rotate" className="text-8xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
        React</p>
      <p className="text-sm text-black">
       <DiRuby className="text-8xl gap-16 py-3 text-red-600 dark:text-red-600" />
        Ruby </p>
      <p className="text-sm text-black">
       <SiRubyonrails className="text-8xl gap-16 py-3 text-red-600 dark:text-red-600" />
        Ruby on Rails </p>
      <p className="text-sm text-black">
       <SiRedux className="text-8xl gap-16 py-3 text-purple-600 dark:text-purple-550" />
        Redux</p>
        <p className="text-sm text-black">
       <FcEngineering id="machine-rotate" className="text-8xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        RESTful API</p>
        <p className="text-sm text-black">
       <SiPostgresql className="text-8xl gap-16 py-3 text-blue-400 dark:text-blue-400" />
        PostgreSQL</p>
        <p className="text-sm text-black">
       <SiPython className="text-8xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
        Python pending</p>
      </div>
     </div>
    </div>
   </section>
  </div>
 )
}
