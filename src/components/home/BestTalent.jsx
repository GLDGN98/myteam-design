import React from "react"
import rect from "../../assets/images/Rectangle.png"
import oval from "../../assets/images/bg-pattern-home-1.svg"
import oval2 from "../../assets/images/bg-pattern-home-2.svg"

const BestTalent = () => {
  return (
    <div className="bg-primaryGreen flex items-center justify-center h-screen">
      <img src={oval} alt="oval" className="absolute -left-28" />
      <img src={oval2} alt="oval-2" className="absolute bottom-0 right-72" />
      <div className="w-5/6 flex items-center justify-center m-auto">
        <h2 className="title lg:text-100 xl:text-120 2xl:text-140 m-0 font-livvic-bold text-white w-4/6">
          Fine the <br /> best <span className="text-primaryCoral">talent</span>
        </h2>
        <p className="content text-white lg:text-18 self-end xl:text-23 2xl:text-23 font-livvic-semibold leading-7 w-2/6 relative">
          <img
            src={rect}
            alt="rectangle"
            className="absolute"
            style={{ bottom: "200%" }}
          />
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </div>
  )
}

export default BestTalent
