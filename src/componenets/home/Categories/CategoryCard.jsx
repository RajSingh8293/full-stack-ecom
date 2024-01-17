import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styeles/CategoryCard.css'
import { store } from '../../../Contexts/ContextStore'
import Loader from '../../Loader/Loader'

const CategoryCard = ({ categoryData }) => {
  const { loading } = useContext(store)

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-4 justify-center ">
          {categoryData.map((category) => (
            <NavLink
              to="/shop"
              className="category-btn px-6 py-4 w-60 flex justify-center rounded-full items-center h-60 bg-green-400"
              key={category}
            >
              <div className="font-bold mb-2 text-xl capitalize z-10 ">
                {category}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryCard
