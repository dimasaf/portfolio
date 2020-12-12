import React from "react"

const Section = () => {
  return (
    <div className=" flex items-center justify-around bg-primary mt-20">
      <div className="flex-col item-center content-center ">
        <div className="text-white font-sans font-semibold transform rotate-90 mb-6 ">
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
          <div className="rounded-full h-56 w-56 border-4 relative">
            <img
              src={require("../images/Profil.png")}
              className="rounded-full h-52 w-52 absolute bottom-1 left-1"
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
        </div>
        {/* Title */}
        <div className=" mr-6">
          <div
            className="flex flex-row-reverse justify-center md:justify-start mt-10 md:mt-0
          items-center "
          >
            <div className="uppercase text-yellow-200 text-sm md:text-right tracking-widest font-semibold">
              a portfolio guide
            </div>
            <div className="hidden md:block w-16 h-0.5 rounded-xl bg-yellow-200 mr-10"></div>
          </div>
          <div className="capitalize font-serif leading-tight text-4xl sm:text-4xl md:text-5xl mt-10 lg:text-6xl  text-white text-center md:text-right mt-10">
            a guy who loving technology and passionate in design
          </div>
        </div>
      </div>
      <div className="flex-col item-center content-center ">
        <div className="text-white font-sans font-semibold transform rotate-90 mb-6 ">
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
