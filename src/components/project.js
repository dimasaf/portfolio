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

      {/* project 1 */}
      <div className="flex pl-10 md:pl-40 pb-28">
        <div className="flex items-center">
          <div className="relative shadow-2xl">
            <div className="absolute -top-20 -left-20 text-10xl text-gray-500 opacity-50 font-semibold hidden lg:block">
              01
            </div>
            <div className="absolute top-20 -right-40 uppercase tracking-wide font-semibold text-yellow-300 hidden xl:block">
              <div className="bg-yellow-300 tracking-wide w-20 h-0.5 inline-block mb-1 mr-8"></div>
              web app
            </div>
            <img src={require("../images/Project_1.png")}></img>
          </div>

          <div className="ml-12">
            <div className="uppercase md:text-4xl font-semibold tracking-normal text-gray-800 p-2">
              reMovi
            </div>
            <div className="capitalize text-justify md:text-left lg:w-7/12 p-2">
              Latihan Web yang dibuat menggunakan vanilla javascript dengan
              bootstrap untuk membantu memahami fetching API dengan vanila
              javascript
            </div>
            <a
              href="https://github.com/dimasaf/reMovi"
              className="p-2  shadow-xl bg-white hover:shadow-sm mr-2"
            >
              github
            </a>
            <a
              href="#"
              className="p-2  shadow-xl bg-white hover:shadow-sm mr-2"
            >
              javascript
            </a>
            <a href="#" className="p-2  shadow-xl bg-white hover:shadow-sm">
              bootstrap
            </a>
          </div>
        </div>
      </div>

      {/* project 2 */}
      <div className="flex flex-row-reverse justify-end items-center pr-10 md:pr-40 pb-28 w-full">
        <div className=" relative shadow-2xl">
          <div className="absolute -top-20 left-72 text-10xl text-gray-500 opacity-50 font-semibold hidden lg:block">
            02
          </div>
          <div className=" absolute top-20 right-96 uppercase tracking-wide font-semibold text-yellow-300 w-60 hidden xl:block">
            apps
            <div className="bg-yellow-300 tracking-wide w-20 h-0.5 mb-1 ml-8 inline-block" />
          </div>
          <img src={require("../images/Project_2.png")}></img>
        </div>

        <div className="text-right mr-12">
          <div className="uppercase md:text-4xl font-semibold tracking-normal text-gray-800 ">
            yourNews
          </div>
          <div className="capitalize text-justify md:text-right lg:w-7/12 ml-auto p-2">
            Sebuah aplikasi pembaca berita yang dibuat menggunakan react native
            untuk menyelesaikan project akhir dari bootcamp sanbercode
          </div>
          <a
            href="https://gitlab.com/dimasaf/batch19/-/tree/master/IMRN0920/yourNews/android"
            className="p-2  shadow-xl bg-white hover:shadow-sm mr-2"
          >
            gitlab
          </a>
          <a href="#" className="p-2  shadow-xl bg-white hover:shadow-sm">
            react native
          </a>
        </div>
      </div>

      {/* project 3 */}
      <div className="flex pl-10 md:pl-40 pb-28">
        <div className="flex items-center">
          <div className="relative shadow-2xl">
            <div className="absolute -top-20 -left-20 text-10xl text-gray-500 opacity-50 font-semibold hidden lg:block">
              03
            </div>
            <div className="absolute top-20 -right-40 uppercase tracking-wide font-semibold text-yellow-300 hidden xl:block">
              <div className="bg-yellow-300 tracking-wide w-20 h-0.5 inline-block mb-1 mr-8"></div>
              apps &nbsp; &nbsp;
            </div>
            <img src={require("../images/Project_3.png")}></img>
          </div>

          <div className="ml-12">
            <div className="uppercase md:text-4xl font-semibold tracking-normal text-gray-800 p-2">
              Kppn App
            </div>
            <div className="capitalize text-justify md:text-left lg:w-7/12 p-2">
              project magang yang ditujukan untuk pengguna dari institusi yang
              bernama kppn agar pengguna dapat membuat janji bertemu tanpa
              terlebih dahulu datang ke instansi
            </div>
            <a
              href="https://github.com/dimasaf/Kppn"
              className="p-2  shadow-xl bg-white hover:shadow-sm mr-2"
            >
              github
            </a>
            <a
              href="#"
              className="p-2  shadow-xl bg-white hover:shadow-sm mr-2"
            >
              react native
            </a>
            <a href="" className="p-2  shadow-xl bg-white hover:shadow-sm">
              laravel
            </a>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="flex flex-row-reverse justify-end items-center pr-10 md:pr-40 pb-28 w-full">
        <div className=" relative shadow-2xl">
          <div className="absolute -top-20 left-72 text-10xl text-gray-500 opacity-50 font-semibold hidden lg:block">
            04
          </div>
          <div className=" absolute top-20 right-96 uppercase tracking-wide font-semibold text-yellow-300 w-60 hidden xl:block">
            web app
            <div className="bg-yellow-300 tracking-wide w-20 h-0.5 mb-1 ml-8 inline-block" />
          </div>
          <img src={require("../images/Project_4.png")}></img>
        </div>

        <div className="text-right mr-12">
          <div className="uppercase md:text-4xl font-semibold tracking-normal text-gray-800 ">
            portfolio
          </div>
          <div className="capitalize text-justify md:text-right lg:w-7/12 ml-auto p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
          <a
            href="https://github.com/dimasaf/portfolio"
            className="p-2  shadow-xl bg-white hover:shadow-sm mr-2"
          >
            github
          </a>
          <a href="#" className="p-2  shadow-xl bg-white hover:shadow-sm mr-2">
            Gatsby js
          </a>
          <a href="#" className="p-2  shadow-xl bg-white hover:shadow-sm">
            tailwind
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
