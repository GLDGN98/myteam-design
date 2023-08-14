import React from "react"
import rectRed from "../../assets/images/RectangleRed.png"
import shape1 from "../../assets/images/Shape1.png"
import shape2 from "../../assets/images/Shape2.png"
import shape3 from "../../assets/images/Shape3.png"
import oval from "../../assets/images/Oval.png"
import oval2 from "../../assets/images/Group 8.png"

const BuildManage = () => {
  return (
    <div className="bg-secondaryGreen2 flex items-center justify-center h-screen relative">
      <img src={oval2} alt="" className="absolute bottom-0 right-0" />
      <div className="w-5/6 flex items-center justify-center">
        <h2 className="text-64 w-3/6 leading-48 text-white font-livvic-bold self-start 2xl:pr-60 relative">
          <img src={rectRed} className="absolute -top-16" alt="" />
          Build & manage distributed teams like no one else.
        </h2>
        <ul className="list-none w-3/6 p-0">
          <li className="relative">
            <img
              className="w-14 absolute -left-28 bottom-10"
              src={shape1}
              alt=""
            />
            <img
              className="w-14 absolute -left-24 opacity-95  bottom-6"
              src={oval}
              alt=""
            />
            <div>
              <span className="text-primaryCoral text-28 font-livvic-bold">
                Experienced Individuals
              </span>
              <p className="text-23 text-white font-livvic-semibold leading-25">
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </li>
          <li className="relative">
            <img
              className="w-14 absolute -left-28 bottom-10"
              src={shape2}
              alt=""
            />
            <img
              className="w-14 absolute -left-24 opacity-95  bottom-6"
              src={oval}
              alt=""
            />

            <div>
              <span className="text-primaryCoral text-28 font-livvic-bold">
                Easy to Implement
              </span>
              <p className="text-23 text-white font-livvic-semibold leading-25">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </li>
          <li className="relative">
            <img
              className="w-14 absolute -left-28 bottom-10"
              src={shape3}
              alt=""
            />
            <img
              className="w-14 absolute -left-24 opacity-95  bottom-6"
              src={oval}
              alt=""
            />
            <div>
              <span className="text-primaryCoral text-28 font-livvic-bold">
                Enhanced Productivity
              </span>
              <p className="text-23 text-white font-livvic-semibold leading-25">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BuildManage
