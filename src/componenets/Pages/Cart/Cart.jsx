import React, { useContext } from 'react'
// import { products } from '../../Data/products'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '../../../redux/cartSlice'
import Total from './Total'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader'
import { store } from '../../../Contexts/ContextStore'

const Cart = () => {
  const dispatch = useDispatch()
  const { loading } = useContext(store)

  const cartItem = useSelector((state) => state.cart.cart)

  const removeHandle = (deleteItem) => {
    dispatch(removeItem(deleteItem))
  }
  // const incrementHandle = (incQty) => {
  //   dispatch(incrementQuantity(incQty))
  // }
  // const decrementHandle = (deleteItem) => {
  //   dispatch(removeItem(deleteItem))
  // }

  // const Subtotal = quantity * price
  // console.log(Subtotal)

  return (
    <section className="py-5 px-10  ">
      {loading ? (
        <Loader />
      ) : (
        <div>
          {' '}
          {cartItem.length > 0 ? (
            <div className="min-h-[80vh]">
              <h1 className="text-center text-2xl font-bold underline">
                Cart Items
              </h1>
              <div className=" w-[100%] flex justify-between gap-10">
                <div className="w-[70%] py-10">
                  <table className="w-[100%]">
                    <thead>
                      <tr>
                        <th className="">Product</th>
                        <th className="">Title</th>
                        <th className="">Price</th>
                        <th className="">Qty</th>
                        <th className="">Subtotal</th>
                        <th className="">Remove Item</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((item, index) => (
                        <tr className="text-center" key={index}>
                          <td className="border px-4 py-2 w-[100px]">
                            <img
                              className=" w-[100%]"
                              src={item.image}
                              alt=""
                            />
                          </td>
                          <td className="border px-4  py-2">{item.title}</td>

                          <td className="border px-4 py-2">$ {item.price}</td>
                          <td className="border px-4 py-2">
                            <button
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                              className="bg-red-400 py-2 px-3 rounded text-white"
                            >
                              -
                            </button>{' '}
                            {item.quantity}
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                              className="bg-red-400 py-2 px-3 rounded text-white"
                            >
                              +
                            </button>
                          </td>
                          <td className="border px-4 py-2">
                            $ {item.quantity * item.price}
                          </td>

                          <td className="border px-4 py-2">
                            <button
                              className="ml-2 bg-red-400 py-2 px-3 rounded text-white"
                              onClick={() => removeHandle(item.id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-[30%]">
                  <Total />
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-[70vh] flex justify-center items-center flex-col">
              <p className="w-[200px] text-gray-600 text-2xl font-bold">
                <img
                  className="text-gray-600 w-[100%]"
                  src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
                  alt=""
                />
              </p>
              <h1 className="mt-2 text-gray-600 text-center text-4xl font-bold">
                Cart Empty
              </h1>

              <button className="bg-black py-2 px-5 mt-2 hover:bg-red-600 ">
                <Link className="text-white py-2 px-5" to="/shop">
                  Return To Shopping
                </Link>
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Cart
