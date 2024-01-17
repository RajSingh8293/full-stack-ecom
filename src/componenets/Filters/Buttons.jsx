import React, { useContext } from 'react'
import { store } from '../../Contexts/ContextStore'

const Buttons = ({ value, title }) => {
  const { handleClick, product } = useContext(store)
  const btns = [...new Set(product.map((item) => item.category))]

  return (
    <div className="flex gap-3">
      <button
        onClick={handleClick}
        value=""
        className="bg-blue-400 py-1 px-3 rounded "
      >
        All Products
      </button>

      {/* {btns.map((btn) => (
        <button
          onClick={handleClick}
          value={btn}
          className="bg-blue-400 py-1 px-3 rounded "
        >
          {btn}
        </button>
      ))} */}

      <button
        onClick={handleClick}
        value="sofa"
        className="bg-blue-400 py-1 px-3 rounded "
      >
        Sofa
      </button>
      <button
        onClick={handleClick}
        value="chair"
        className="bg-blue-400 py-1 px-3 rounded "
      >
        Chair
      </button>
      <button
        onClick={handleClick}
        value="bed"
        className="bg-blue-400 py-1 px-3 rounded "
      >
        Bed
      </button>
      <button
        onClick={handleClick}
        value="furniture"
        className="bg-blue-400 py-1 px-3 rounded "
      >
        Furniture
      </button>
    </div>
  )
}

export default Buttons
