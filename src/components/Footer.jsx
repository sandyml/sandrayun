import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const Footer = () => {
 return (
  <div>
   <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
     <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Sandra M. Yun. All Rights Reserved.
     </span>
     <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      Made with: 
      <SiTailwindcss className="text-6xl gap-16 py-3 text-blue-700 dark:text-blue-700"/>
      <FaReact id="rotate" className="text-6xl flex justify-center gap-16 py-3 text-teal-600 dark:text-teal-400" />
     </ul>
    </div>
   </footer>

  </div>
 )
}
