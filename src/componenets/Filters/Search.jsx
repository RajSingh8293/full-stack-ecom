import React, { useContext } from 'react'
import { store } from '../../Contexts/ContextStore'

const Search = () => {
  const { handleInputChange } = useContext(store)
  // console.log(filterResult)
  return (
    <div className="w-[100%] mb-5 mt-3">
      <div className="flex w-[100%] mb-5">
        <div className="flex w-[90%] items-center px-4 border-2 border-gray-500 h-[40px] ">
          <input
            type="search"
            onChange={handleInputChange}
            placeholder="Search here...."
            className="border-0 outline-none w-[100%]"
          />
        </div>
      </div>
    </div>
  )
}

export default Search
