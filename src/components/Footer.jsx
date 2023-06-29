import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Footer = () => {
 return (
  <div>
   <footer className="bg-light-brown rounded-lg shadow m-4 dark:bg-zinc-800">
   {/* <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800"> */}
    <div className="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
     <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2023 Sandra M. Yun. All Rights Reserved.
     </span>
     <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
      Made with: 
      <SiTailwindcss className="text-6xl gap-16 py-3 text-blue-700 dark:text-blue-700"/>
      <FaReact id="rotate" className="text-6xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
     </ul>
    </div>
   </footer>

  </div>
 )
}
