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
import AlltRAILS from '../assets/AlltRAILS.png';
import myportfolio from '../assets/myportfolio.png';
import reactproject from '../assets/reactproject.png';
import quotesgram from '../assets/quotesgram.png';
import { FcEngineering } from 'react-icons/fc';
import SayMyAim from './../assets/SayMyAim.png';

export const Cards = () => {
  const [showTAH, setShowTAH] = useState(false);
  const [showAT, setShowAT] = useState(false);

  const toggleSeeDemoVideoTAH = () => {
    (showTAH === false) ? setShowTAH(true) :
      setShowTAH(false);
  };

  const toggleSeeDemoVideoAT = () => {
    (showAT === false) ? setShowAT(true) :
      setShowAT(false);
  };

  return (
    <div>
      <body className="text-5xl py-1 text-black font-medium dark:text-clotted-cream md:text-2xl highlight">
      {/* <body className="text-5xl py-1 text-black font-medium dark:text-clotted-cream md:text-2xl highlight"> */}
      
        <h2
          style={{
            fontSize: 55.6,
            fontFamily: 'Aurora',
            // fontFamily: 'Aurora Regular, Astralaga',
            letterSpacing: 0,
            fontWeight: 200
          }}
          className="text-5xl py-1 text-black font-medium dark:text-clotted-cream md:text-2xl">
          Portfolio
        </h2>
        <section>
          <div className="container">

            <div className="card">
              <div className="content">
                {/* <div className=""> */}
                <div className="imgBx">
                  <img src={SayMyAim} alt="take a hike" className="scale-80 rounded-lg object-cover shadow-lg" />
                  {/* <img src={SayMyAim} alt="take a hike" className=" blur-lg scale-85 rounded-lg object-cover shadow-lg" /> */}
                </div>
                <div className="contentBx">
                  <h3>SAY MY AIM -  WebSockets<br />
                    <span>
                    Client to client interactions. A full stack chat-based application used amongst members.
                      <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
                        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-400 dark:text-teal-400" />
                        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
                        <SiRedux className="text-1xl gap-16 py-3 text-purple-600 dark:text-purple-600" />
                        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
                        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
                        <SiTailwindcss className="text-1xl gap-16 py-3 text-blue-700 dark:text-blue-700" />
                        {/* <img src="https://www.svgrepo.com/show/184911/atom.svg" style={{fontSize: 10 }} alt="" srcset="" /> */}
                      </div>
                    </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href='https://github.com/sandyml/say-my-aim'
                    alt='github'
                    className="  text-black md:text-3xl">
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={myportfolio} alt="My Porfolio" className="scale-85 rounded-lg object-cover shadow-lg" />
                </div>
                <div className="contentBx">
                  <h3>MY PORTFOLIO WEBSITE<br />
                    <span>
                      Displays the skills I&#39;ve adapted so far.
                      <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
                        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-400 dark:text-teal-400" />
                        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
                        <SiTailwindcss className="text-1xl gap-16 py-3 text-blue-700 dark:text-blue-700" />
                        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
                      </div>
                    </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href='https://github.com/sandyml/sandrayun'
                    alt='github'
                    className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </div>


            <div className="card">
              <div className="content">
                {/* <div className=""> */}
                <div className="imgBx">
                  <img src={TakeAHike} alt="take a hike" className="scale-85 rounded-lg object-cover shadow-lg" />
                </div>
                <div className="contentBx">
                  <h3>TAKE A HIKE<br />
                    <span>
                      <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
                        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-400 dark:text-teal-400" />
                        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
                        <SiRedux className="text-1xl gap-16 py-3 text-purple-600 dark:text-purple-600" />
                        <SiTailwindcss className="text-1xl gap-16 py-3 text-blue-700 dark:text-blue-700" />
                        <FcEngineering id="machine-rotate" className="text-1xl gap-16 py-3" />
                      </div>
                    </span></h3>
                </div>
              </div>

              <ul className="sci">
                <li>
                  <a
                    href='https://github.com/sandyml/sandrayun'
                    alt='github'
                    className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
                    <BsGithub />
                  </a>&emsp;
                </li>
                <li>
                  <BsYoutube
                    className="font-aurora-regular text-5xl py-0 text-red-600 md:text-3xl"
                    onClick={toggleSeeDemoVideoTAH} />
                  {showTAH ?
                    <iframe
                      width="375" height="315"
                      src="https://www.youtube.com/embed/bQUEiifH1Fs?start=7"
                      title="YouTube video player" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen></iframe>
                    : null}
                </li>
              </ul>
            </div>


            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={AlltRAILS} alt="All Trails" className="scale-85 rounded-lg object-cover shadow-lg" />
                </div>
                <div className="contentBx">
                  <h3>ALL TRAILS<br />

                    <span>
                      Created with Rails hence the name.

                      <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
                        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-400 dark:text-teal-400 " />
                        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
                        <DiRuby className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
                        <SiRubyonrails className="text-1xl gap-16 py-3 text-red-700 dark:text-red-700" />
                        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
                        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
                        <FcEngineering id="machine-rotate" className="text-1xl gap-16 py-3" />
                      </div>
                    </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href='https://github.com/sandyml/All-TRAILS'
                    alt='github'
                    className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
                    <BsGithub />
                  </a>&emsp;
                </li>
                <li>
                  <BsYoutube
                    className="font-aurora-regular text-5xl py-0 text-red-600 md:text-3xl"
                    onClick={toggleSeeDemoVideoAT} />
                  {showAT ?
                    <iframe
                      width="375" height="315"
                      src="https://www.youtube.com/embed/2CN5_Hlu33Y?start=2"
                      title="All tRAILS" frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen></iframe>
                    : null}
                </li>

              </ul>
            </div>
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={quotesgram} alt="Quotesgram" className="scale-85 rounded-lg object-cover shadow-lg" />
                </div>
                <div className="contentBx">
                  <h3>QUOTESGRAM<br />
                    <span>
                      Created with the idea of users being able to add and delete their quotes.
                      <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
                        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-400 dark:text-teal-400" />
                        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
                        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
                        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
                      </div>
                    </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href='https://github.com/sandyml/quotesgram-backend'
                    alt='github'
                    className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
                    <BsGithub />
                  </a>&emsp;
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img src={reactproject} alt="Favorite New York Parks" className="scale-85 rounded-lg object-cover shadow-lg" />
                </div>
                <div className="contentBx">
                  <h3>REACT NYC PARKS<br />
                    <span>
                      Created with React with add to favorites and creating parks form.
                      <div className=" relative overflow-hidden bg-no-repeat text-5xl flex flex-col sm:flex-row sm:flex-wrap justify-center">
                        <FaReact id="rotate" className="text-1xl flex justify-center gap-16 py-3 text-teal-400 dark:text-teal-400" />
                        <IoLogoJavascript className="text-1xl gap-16 py-3 text-yellow-600 dark:text-yellow-400" />
                        <SiCss3 className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600" />
                        <SiMui className="text-1xl gap-16 py-3 text-red-600 dark:text-red-600" />
                      </div>

                    </span></h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a
                    href='https://github.com/sandyml/newyorkparks-react'
                    alt='github'
                    className="font-aurora-regular text-5xl py-0 text-black md:text-3xl">
                    <BsGithub />
                  </a>&emsp;
                </li>
              </ul>
            </div>

          </div>

        </section>
      </body>
    </div>
  )
}
