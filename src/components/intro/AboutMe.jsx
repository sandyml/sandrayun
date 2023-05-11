import React from "react";

export const AboutMe = () => {
  return (
    <div>
      <section className="py-10">
        <h3
          style={{
            fontSize: 55.6,
            fontFamily: 'Aurora',
            // fontFamily: 'Aurora Regular, Astralaga',
            letterSpacing: 0,
            fontWeight: 200
          }}
          className="text-5xl py-2 text-black font-medium dark:text-clotted-cream md:text-6xl max-w-md highlight">About Me</h3>
        <h3 style={{fontFamily: 'aesthetica'}} className=" text-1xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-1xl md:text-7xl">Who is Sandra?</h3>
        <div className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-2xl md:text-md">
          <div className="typewriter">
            <h1 className="text-sm py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-1xl md:text-sm">A little back story...</h1>
          </div>
          {/* <p className=" text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-md mx-auto md:text-md"> */}

          The combination of my past occupations (working in hospitality: Senior Retirement homes, and Dental offices) and hobbies (Arts & Crafts and Designing) narrowed down to something I was always passionate about becoming a Software Engineer.<br /><br />

          It all began when MySpace came about with their “Pimp My Profile,” “MySpace Layouts,” “Cool Space Tricks,” “MySpace Gens,” etc. And also Tumblr. You get the idea… I was constantly captivated by how layouts came about with their design of buttons and how to navigate to another part of your page. Even though it&#39;s just the HTML/CSS part, I would sit there REALLY figuring it out.<br /><br />

          I always wanted to pursue web development but didn&#39;t know much about it, and I wasn&#39;t inspired by my surroundings - the people I was around. So I moved locations a few times until I finally voiced out loud that I AM, IN FACT, A SOFTWARE DEVELOPER. I love everything about it. Figuring out how to debug, designing aspects of it, and creating something. I love creating, and I know this is where I belong.<br /><br />

          I value working with people. I have close and best friends from my previous jobs and school, and I enjoy supporting and assisting people around me. Suppose you were ever to contact any of my friends, colleagues, instructors, accounting coach, etc. They will vouch for me - ask me for their information! Becoming a web developer will always be fun - you won&#39;t get tired of doing one thing, and you have so many things to create, which keeps your brain going, and I love that.
          <br /><br />
          There&#39;s more to what meets the bio (eyes). I enjoy learning! Want to get to know me more?
          <a href="mailto:sandramayla@gmail.com, sandrayun.tech@gmail.com?subject=We want to work with you!">
            Please <span className="text-1xl gap-16 py-3 text-blue-600 dark:text-blue-600 hover:animate-bounce">email</span> me!
          </a>&nbsp;
          Looking forward to hearing from you!
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        </div>
      </section>
    </div>
  )
}
