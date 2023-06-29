import React from "react";
import { IoLogoNodejs } from "react-icons/io";
import { 
  SiCss3, 
  SiMui, 
  SiPostman,
  SiTailwindcss } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbBrandVscode } from 'react-icons/tb';


export const Tools = () => {
 return (
  <div>
   <section>
    <div className="lg:flex sm:flex justify-center" >
     <div style={{ maxWidth: 1600, height: 300 }} 
     className="max-w-lg scale-75 text-center shadow-lg p-10 rounded-xl my-0 bg-white dark:bg-white flex-1">
      <h4 className="font-aurora-regular py-4 text-teal-600">Design Tools</h4>
      <div className="relative overflow-auto lg:text-5xl flex justify-center gap-0 md:text-center">

      <p className="text-sm text-black">
       <SiCss3 className="text-8xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        CSS </p>
      <p className="text-sm text-black">
       <SiMui className="text-8xl gap-16 py-3 text-red-600 dark:text-red-600" />
        Mui</p>
        <p className="text-sm text-black">
       <BsGit className="text-8xl gap-16 py-3  text-red-600 dark:text-red-600" />
        Git</p>
        <p className="text-sm text-black">
       <SiTailwindcss className="text-8xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
          Tailwind CSS</p>
        <p className="text-sm text-black">
       <TbBrandVscode className="text-8xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
        VS Code</p>
        <p className="text-sm text-black">
       <IoLogoNodejs className="text-8xl gap-16 py-3 text-green-600 dark:text-green-600" />
        Node.js</p>
        <p className="text-sm text-black">
       <SiPostman id="machine-rotate" className="text-8xl gap-16 py-3 text-orange-600 dark:text-orange-600" />
       Postman</p>
      </div>
     </div>
    </div>
   </section>
  </div>
 )
}
