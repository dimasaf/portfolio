import React, { useState } from "react"

const Header = () => {
  const [menu, setMenu] = useState(false)

  return (
    // <div className="flex-col md:flex justify-between items-center bg-primary text-white h-24">
    <div className="text-white sm:flex sm:justify-between items-center text-right">
      <div className="flex items-center justify-between px-10 py-6">
        <div className="text-3xl md:text-4xl font-semibold lg:pl-10">
          <a href="#home">
            dimas<span className="text-yellow-300">af.</span>
          </a>
        </div>
        <button
          className="sm:hidden"
          onClick={() => {
            setMenu(!menu)
          }}
        >
          <svg
            class="w-8 h-8 lg:hide"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* </div> */}
      </div>
      <div
        className={`${
          menu ? "hidden" : "hidden"
        } sm:w-96 sm:flex px-10 sm:justify-around`}
      >
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#project">Project</a>
        </div>
        <div>
          <a href="#">Blog</a>
        </div>
      </div>
      <div className="px-20 hidden md:flex">
        <a href="#" className="border-2 rounded font-thin text-xs p-1 px-2">
          contact
        </a>
      </div>
    </div>
  )
}

export default Header
