import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ title, link, arrow }) => {
  return (
    <div className="flex justify-center pt-10">
      <NavLink to={link}>
        <button className="capitalize bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-6 border border-black hover:border-transparent rounded">
          {title} {arrow}
        </button>
      </NavLink>
    </div>
  )
}

export default Button
