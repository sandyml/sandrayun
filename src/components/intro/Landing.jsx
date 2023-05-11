import {
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { useState } from "react";
import myavatar from '../../assets/myavatar.png';
import { ToolBox } from "../ToolBox";
import { Footer } from "../Footer";
import { AboutMe } from "./AboutMe";
import { MyPortfolio } from "../MyPortfolio";
import { ScrollToTop } from "../ScrollToTop";
import { Tools } from "../Tools";

export const Landing = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={!darkMode ? "dark" : ""}>
      <main className=" bg-clotted-cream px-10 dark:bg-black md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1
              style={{
                fontSize: 30,
                fontFamily: 'Aurora',
              }}
              className="text-1xl text-black dark:text-white highlight">
              smy.
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="text-5xl flex justify-center gap-16 py-3"
                  href="mailto:sandramayla@gmail.com, sandrayun.tech@gmail.com?subject=We want to work with you!">
                  <AiOutlineMail
                    className=" max-w-xs transition duration-80 ease-in-out hover:scale-110 hover:animate-bounce" />
                </a>
              </li>
              <li>
                <div className="button-border px-4 py-2 border-none rounded-md ml-8 text-black dark:text-dark-beige">
                  <a className="button" href="YunSandraResume.pdf">
                    Resume
                  </a>
                </div>
              </li>&emsp;&emsp;&emsp;
              <li>
                <input type="checkbox" id="toggle" className="offscreen"
                  onClick={() => setDarkMode(!darkMode)} />
                <label htmlFor="toggle" className="switch">
                </label>
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-black rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <div className="main">
              <div className="circle">
              </div>
              <img src={myavatar} id="avatar" layout="fill" object-fit="cover" alt="my avatar" />
            </div>
          </div>
          <div className="text-center p-10 py-10">
            <h2
              style={{
                fontSize: 55.6,
                fontFamily: 'Aurora',
                letterSpacing: 0,
                fontWeight: 300
              }}
              className="text-5xl py-2 text-light-brown font-medium dark:text-dark-beige md:text-6xl">
              {/* Sandra Yun */}
              SANDRA YUN
            </h2>
            <h3 style={{
              fontFamily: ' Astralaga',
              letterSpacing: 2
            }}
              className="custom-text-selection text-2xl py-2 dark:text-white md:text-2xl">
              Full Stack Developer
            </h3>
            <p className=" py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md">
              Based in&nbsp;
              <span style={{
                fontFamily: 'Aurora Regular, Astralaga',
                letterSpacing: 0,
                fontWeight: 200
              }} className="text-light-brown"> New York, New York.</span><br />
              <span
                style={{
                  fontFamily: 'Aurora Regular, Astralaga',
                  letterSpacing: 0,
                  fontWeight: 200
                }}
                className="text-light-brown"> Developer
              </span>&nbsp;and&nbsp;<span
                style={{
                  fontFamily: 'Aurora Regular, Astralaga',
                  letterSpacing: 0,
                  fontWeight: 200
                }}
                className="text-light-brown">designer&nbsp;</span>(sometimes) specializing in building responsive and user-friendly
              <span
                className="text-light-brown"
                style={{
                  fontFamily: 'Aurora Regular, Astralaga',
                  letterSpacing: 0,
                  fontWeight: 200
                }}>&nbsp;web applications</span>&nbsp;and&nbsp;<span
                  className="text-light-brown"
                  style={{
                    fontFamily: 'Aurora Regular, Astralaga',
                    letterSpacing: 0,
                    fontWeight: 200
                  }}>websites</span>.
            </p>

            <div className=" relative overflow-hidden  bg-no-repeat text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://medium.com/@sandy_tech" alt="medium" >
                <AiFillMediumCircle
                  className="max-w-xs transition duration-80 ease-in-out hover:scale-110 text-black dark:text-white"
                />
              </a>
              <a href="https://www.linkedin.com/in/sandra-yun-aba132272" alt="linked-in">
                <AiFillLinkedin
                  className=" bg max-w-xs transition duration-80 ease-in-out hover:scale-110 text-blue-600 dark:text-blue-600"
                />
              </a>
              <a href="https://github.com/sandyml" alt="github">
                <AiFillGithub className="max-w-xs transition duration-80 ease-in-out hover:scale-110 text-black dark:text-purple-500" />
              </a>
              <a href="https://github.com/sandyml" alt="github">
                <FaDev className="max-w-xs transition duration-80 ease-in-out hover:scale-110 text-black dark:text-white" />
              </a>
            </div>
          </div>
        </section><hr/>
        <div className="divide-y divide-black dark:divide-white">
        <ToolBox />
        </div>
        <Tools /><hr/>
        <div className="divide-y divide-black dark:divide-white">
        <MyPortfolio /><hr />
        </div>
        <AboutMe />
        <div className="relative overflow-hidden bg-no-repeat text-5xl flex justify-center gap-16 py-3 text-light-brown dark:text-dark-beige animate-bounce">
          <ScrollToTop style={{ fontSize: 'large' }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}