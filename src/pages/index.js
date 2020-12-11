import React from "react"

import Colors from "../components/colors"
import Quote from "../components/quote"

const IndexPage = () => (
  <div className="bg-white box-border">
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
            <div className="capitalize font-serif leading-tight text-6xl text-white text-right mt-6">
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
      <div className="flex justify-around">
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
        <div className="w-1/4 p-4 mr-4 relative">
          <img src={require("../images/About.png")} className="" />
          <div className=" absolute top-2/4 -left-1/4 uppercase text-gray-900 text-4xl font-bold tracking-normal">
            dimas<span className="text-white"> adji</span>
          </div>
        </div>
      </div>
    </div>
    {/* section 3 */}
    <div>
      <div className="text-center uppercase text-3xl font-bold tracking-wide my-20">
        PROJECT
      </div>

      <div className="flex pl-40 pb-28">
        <div className="flex items-center">
          <div className="relative shadow-2xl">
            <div className="absolute -top-20 -left-20 text-10xl text-gray-500 opacity-50 font-semibold">
              01
            </div>
            <div className="absolute top-20 -right-40 uppercase tracking-wide font-semibold text-yellow-300">
              <div className="bg-yellow-300 tracking-wide w-20 h-0.5 inline-block mb-1 mr-8"></div>
              web app
            </div>
            <div className="w-96 h-96 bg-green-400"></div>
          </div>

          <div className="ml-12">
            <div className="uppercase text-4xl font-semibold tracking-normal text-gray-800 ">
              judul
            </div>
            <div className="capitalize w-2/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </div>
            <a href="#">read more</a>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-end items-center pr-40 pb-28 w-full">
        <div className=" relative shadow-2xl">
          <div className="absolute -top-20 left-60 text-10xl text-gray-500 opacity-50 font-semibold">
            02
          </div>
          <div className=" absolute top-20 right-72 uppercase tracking-wide font-semibold text-yellow-300 w-60">
            web app
            <div className="bg-yellow-300 tracking-wide w-20 h-0.5 mb-1 ml-8 inline-block" />
          </div>
          <div className="w-96 h-96 bg-green-400"></div>
        </div>

        <div className="text-right mr-12">
          <div className="uppercase text-4xl font-semibold tracking-normal text-gray-800 ">
            judul
          </div>
          <div className="capitalize w-2/4 ml-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
          <a href="#">read more</a>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
