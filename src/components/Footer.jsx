import React from "react"
import logo from "../assets/images/logo.svg"
import oval3 from "../assets/images/oval3.svg"
import facebookIcon from "../assets/images/icon-facebook.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import pintrestIcon from "../assets/images/icon-pinterest.svg"

const Footer = () => {
  return (
    <div>
      <div className="bg-primaryCoral flex justify-evenly items-center h-52 relative">
        <img src={oval3} className="left-0 absolute bottom-0" alt="" />
        <h2 className="m-0 text-48 text-secondaryGreen3">
          Ready to get started?
        </h2>
        <button className="font-livvic-semibold text-18 bg-primaryCoral text-secondaryGreen3 border-2 border-secondaryGreen3 border-solid rounded-full px-6 py-2">
          contact us
        </button>
      </div>
      <div className="bg-secondaryGreen3 flex items-center justify-center">
        <div className="w-5/6 flex justify-between items-center">
          <ul className="p-0 m-0 list-none flex h-48">
            <li className="flex flex-col justify-evenly h-full ">
              <img className="w-40" src={logo} alt="" />
              <nav className="flex justify-between">
                <a className="text-white no-underline" href="">
                  home
                </a>
                <a className="text-white no-underline" href="">
                  about
                </a>
              </nav>
            </li>
            <li className="text-white opacity-70 text-18 flex flex-col gap-2 items-start justify-center pl-40">
              <span>987 Hillcrest Lane</span>
              <span>Irvine, CA</span>
              <span>California 92714</span>
              <span>Call Us: 949-833-7432</span>
            </li>
          </ul>
          <ul className="list-none flex flex-col p-0 m-0 h-full gap-12">
            <li>
              <nav className="flex gap-5 items-center justify-end">
                <div>
                  <a href="">
                    <img
                      className="w-6"
                      src={facebookIcon}
                      alt="facebook-icon"
                    />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img
                      className="w-6"
                      src={pintrestIcon}
                      alt="pintrest-icon"
                    />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img className="w-6" src={twitterIcon} alt="twitter-icon" />
                  </a>
                </div>
              </nav>
            </li>
            <li>
              <span className="text-white opacity-70">
                Copyright 2020. All Rights Reserved
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
