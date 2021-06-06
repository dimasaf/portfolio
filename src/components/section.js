import React from "react"

const Section = () => {
  return (
    <div className=" flex items-center justify-around bg-primary min-screen md:mt-4">
      <div className="flex-col item-center content-center text-center hidden sm:block">
        <div className="text-white font-sans font-semibold transform rotate-90 mb-6 w-20">
          Follow us
        </div>
        <div className=" inline-block ">
          <a href="#">
            <img src={require("../images/instagram.png")} className="p-5" />
          </a>
          <a href="#">
            <img src={require("../images/twitter.png")} className="pl-5" />
          </a>
        </div>
      </div>

      <div className=" flex-col w-8/12 text-center justify-self-center">
        {/* image */}
        <div className="inline-block ">
          <div className="rounded-full sm:h-56 sm:w-56 h-40 w-40 border-4 relative">
            <img
              src={require("../images/Profil.png")}
              className="rounded-full sm:h-52 sm:w-52 h-36 w-36 absolute bottom-1 left-1 filter-grayscale hover:filter-none"
            />
          </div>
        </div>
        {/* Title */}
        <div
          className="flex flex-row-reverse justify-center md:justify-start mt-4 md:mt-4 md:ml-12
          items-center "
        >
          <div className="uppercase text-yellow-200 text-sm md:text-right tracking-widest font-semibold">
            a portfolio guide
          </div>
          <div className="hidden md:block w-16 h-0.5 rounded-xl bg-yellow-200 mr-10"></div>
        </div>
        <div className="capitalize font-serif leading-tight mt-4 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center md:text-right">
          a guy who loves technology and passionate in design
          <div className="text-xs mb-10 md:mb-12 mt-4 sm:text-lg md:mt-6 ">
            <a href="#about">scroll down</a>
          </div>
        </div>
      </div>

      <div className="flex-col item-center content-center text-center hidden sm:block ">
        <div className="text-white font-sans font-semibold transform rotate-90 mb-6 w-20 ">
          Follow us
        </div>
        <div className=" inline-block ">
          <a href="#">
            <img src={require("../images/instagram.png")} className="p-5" />
          </a>
          <a href="#">
            <img src={require("../images/twitter.png")} className="pl-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Section
