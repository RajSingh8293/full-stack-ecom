import React from 'react'
import { Link } from 'react-router-dom'

const HeroContent = ({ link, title, heading, offer }) => {
  return (
    <div className="absolute flex items-center gap-10 top-[30%] left-20">
      <div className="">
        <p className="text-2xl font-semibold ">{title}</p>
        <p className="capitalize text-7xl my-5 font-bold">
          {heading} <span className="text-orange-600">{offer}</span>
        </p>
        <p className="mt-3">
          <Link to={link} className="font-bold underline ">
            SHOW NOW
          </Link>
        </p>
      </div>
    </div>
  )
}

export default HeroContent
