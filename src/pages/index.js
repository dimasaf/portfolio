import React from "react"

import Colors from "../components/colors"
import Quote from "../components/quote"

const IndexPage = () => (
  <div className="bg-white">
    <div
      className="h-screen bg-gray-800"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0% 99.5%)" }}
    >
      {/* header */}
      <div className="flex justify-between items-center bg-gray-800 text-white h-24">
        <div className="text-4xl font-semibold px-24">
          <div>
            dimas<span className="text-yellow-300">af.</span>
          </div>
        </div>
        <div className="flex justify-around w-96 ">
          <div>Home</div>
          <div>About</div>
          <div>Project</div>
        </div>
        <div className="px-32">
          <div className="border-2 rounded font-thin text-xs p-1 px-2">
            contact
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className=" flex items-center justify-around bg-gray-800 mt-20">
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
            <div className="flex  flex-row-reverse items-center ">
              <div className="uppercase text-yellow-200 text-sm text-right tracking-widest font-semibold">
                a portfolio guide
              </div>
              <div className="w-16 h-0.5 rounded-xl bg-yellow-200 mr-10"></div>
            </div>
            <div className="capitalize font-serif leading-tight text-7xl text-white text-right mt-6">
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
    </div>

    {/* section 2 */}
    <div className="flex-col">
      <div className="text-center uppercase text-3xl font-bold tracking-wide my-20">
        about me
      </div>
      <div className="flex justify-around mt-20">
        <div className="w-5/12">
          <div className="flex items-center mt-24">
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
        <img src={require("../images/About.png")} className="w-1/4 p-4 mr-4" />
      </div>
    </div>
  </div>
)

export default IndexPage
