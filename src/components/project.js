import React from "react"

const Project = () => {
  return (
    <div>
      <div
        className="text-center uppercase text-3xl font-bold tracking-wide my-20 relative"
        id="project"
      >
        <div className="bg-gray-700 w-full h-0.5">
          <div className="absolute -bottom-5 mx-auto left-0 right-0 bg-secondary block w-72">
            Project
          </div>
        </div>
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
  )
}

export default Project
