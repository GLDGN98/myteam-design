import React from "react"
import logo from "../assets/images/myteam.svg"

const Navbar = () => {
  return (
    <div className="bg-primaryGreen">
      <nav className="flex justify-between items-center text w-5/6 m-auto p-8 absolute inset-x-0">
        <div className="flex items-center gap-12 font-livvic-semibold">
          <img src={logo} alt="logo" />
          <a className="text-white no-underline" href="">
            home
          </a>
          <a className="text-white no-underline" href="">
            about
          </a>
        </div>
        <div>
          <button className="font-livvic-semibold text-18 bg-primaryGreen text-white border-2 border-white border-solid rounded-full px-6 py-2">
            contact us
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
