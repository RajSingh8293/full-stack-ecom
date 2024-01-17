import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import { store } from '../../../Contexts/ContextStore'

const Total = () => {
  const cartItem = useSelector((state) => state.cart.cart)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const { loading } = useContext(store)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0

    cartItem.forEach((item) => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }
  let shipping = 10

  const checkout = () => {
    if (user) {
      navigate('/checkout')
    } else {
      navigate('/login')
    }
  }
  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {cartItem.length > 0 ? (
            <div className="w-[100%] mt-10 py-5 rounded  px-5 flex flex-col gap-3  bg-slate-400 ">
              <h3 className="text-xl ">
                <span>Total Items </span>{' '}
                <span>({getTotal().totalQuantity})</span>
              </h3>
              <h1 className="text-xl font-semibold flex justify-between">
                <span>SubTotal :</span> <span>${getTotal().totalPrice}</span>
              </h1>
              <h3 className="text-xl font-semibold flex justify-between">
                <span>Shpping :</span> <span>${shipping}</span>
              </h3>
              <h1 className="text-xl font-semibold flex justify-between">
                <span>Total :</span>{' '}
                <span>${getTotal().totalPrice + shipping}</span>
              </h1>

              <button
                className=" mt-5 py-2 px-4 bg-black text-white font-semibold hover:bg-red-700  hover:font-semibold transition-all"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </section>
  )
}

export default Total
