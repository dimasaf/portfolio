import React from "react"

const About = () => {
  return (
    <div className="flex-col">
      <div
        className="uppercase text-center text-3xl font-bold tracking-wide my-20 relative"
        id="about"
      >
        <div className="bg-gray-700 w-full h-0.5">
          <div className="absolute -bottom-5 mx-auto left-0 right-0 bg-secondary block w-72">
            About
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-5/12">
          <div className="flex items-center mt-20">
            <div className="uppercase text-4xl tracking-wide font-bold">
              Hello.
            </div>
            <div className="w-8/12 h-1 bg-yellow-200 ml-auto rounded-xl" />
          </div>
          <div className="tracking-normal text-3xl text-justify mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className="w-1/4 p-4 mr-4 relative">
          <img src={require("../images/About.png")} className="" />
          <div className=" absolute top-2/4 -left-1/4 uppercase text-gray-900 text-4xl font-bold tracking-normal">
            dimas<span className="text-white"> adji</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
