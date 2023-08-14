import React from "react"
import KadyImg from "../../assets/images/avatar-kady.jpg"
import AiyshaImg from "../../assets/images/avatar-aiysha.jpg"
import ArthurImg from "../../assets/images/avatar-arthur.jpg"
import quote from "../../assets/images/icon-quotes.svg"
import oval5 from "../../assets/images/oval5.svg"
import oval4 from "../../assets/images/oval4.svg"

const SuccessStories = () => {
  return (
    <div className="bg-secondaryGreen flex items-center justify-center h-screen relative">
      <img src={oval4} className="absolute left-0 top-0" alt="" />
      <img src={oval5} className="absolute right-0 bottom-0" alt="" />

      <div className="flex flex-col justify-center items-center  w-5/6 ">
        <h2 className="text-64 text-center px-56 leading-48 text-white font-livvic-bold">
          Delivering real results for top companies. Some of our{" "}
          <span className="text-secondaryBlue1">success stories.</span>
        </h2>
        <ul className="flex items-center justify-center gap-10">
          <li className="flex flex-col items-center justify-center text-center gap-14 relative">
            <img src={quote} className="absolute -top-2" alt="quote" />
            <p className="text-white text-23 font-livvic-semibold leading-6 z-10">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <span className="text-secondaryBlue1 text-28 font-livvic-bold">
              Kady Baker
            </span>
            <img
              className="w-16 border-solid rounded-full border-2 border-lightCyan"
              src={KadyImg}
              alt="Kady Image"
            />
          </li>
          <li className="flex flex-col items-center justify-center text-center gap-14 relative">
            <img src={quote} className="absolute -top-2" alt="quote" />
            <p className="text-white text-23 font-livvic-semibold leading-6 z-10">
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <span className="text-secondaryBlue1 text-28 font-livvic-bold">
              Aiysha Reese
            </span>
            <img
              className="w-16 border-solid rounded-full border-2 border-lightCyan"
              src={AiyshaImg}
              alt="Aiysha Image"
            />
          </li>
          <li className="flex flex-col items-center justify-center text-center gap-14 relative">
            <img src={quote} className="absolute -top-2" alt="quote" />
            <p className="text-white text-23 font-livvic-semibold leading-6 z-10">
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <span className="text-secondaryBlue1 text-28 font-livvic-bold">
              Arthur Clarke
            </span>
            <img
              className="w-16 border-solid rounded-full border-2 border-lightCyan"
              src={ArthurImg}
              alt="Arthur Image"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SuccessStories
