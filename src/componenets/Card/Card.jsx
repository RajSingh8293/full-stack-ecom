import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

const Card = ({ data }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart.cart)
  console.log(data.category)

  const handleCart = (productData) => {
    dispatch(addToCart(productData))
    toast.success('Add to cart successfully')
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem))
  }, [cartItem])
  return (
    <>
      <div className="max-w-sm w-52 rounded overflow-hidden shadow-lg">
        <Link to={`/productdetails/${data.id}`}>
          <div className="relative flex justify-center items-center overfloew-hidden h-[265px] bg-neutral-200 ">
            <img
              className="w-[100%]"
              src={data.image}
              alt="Sunset in the mountains"
            />
            <div className="bg-red-500 -rotate-45 absolute top-3 left-0 font-bold text-lg mb-2">
              {data.category}
            </div>
          </div>
        </Link>
        <button
          className="w-[100%]  py-2 px-4  hover:bg-red-700 hover:text-white"
          type="button"
          onClick={() => handleCart(data)}
        >
          Add To Cart
        </button>
        <div className="p-2 h-[100%]">
          <Link to={`/productdetails/${data.id}`}>
            <div className="font-bold text-lg mb-2">{data.title}</div>
          </Link>
          <div className="font-bold text-lg mb-2">$ {data.price}</div>
        </div>
      </div>
    </>
  )
}

export default Card
