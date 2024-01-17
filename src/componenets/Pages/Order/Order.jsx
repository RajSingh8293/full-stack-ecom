import React, { useContext } from 'react'
import { store } from '../../../Contexts/ContextStore'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../../Loader/Loader'

const Order = () => {
  //   const cartItem = useSelector((state) => state.cart.cart)
  const { order, loading } = useContext(store)

  // console.log(order)
  const userId = JSON.parse(localStorage.getItem('user')).uid
  // console.log(userId)
  return (
    <section className="min-h-[700px] px-10 py-10">
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h1 className="text-center text-3xl font-bold underline">Orders</h1>
            {order.length > 0 ? (
              <div className="w-[100%] py-8 flex justify-center">
                {order
                  .filter((obj) => obj.uid == userId)
                  .map((order) => (
                    <div className="w-[70%] py-10" key={order.id}>
                      <table className="w-[100%] ">
                        <thead>
                          <tr>
                            <th className="py-2">Product</th>
                            <th className="py-2">Title</th>
                            <th className="py-2 text-center">Qty</th>
                            <th className="py-2 text-center">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.cartItem.map((item, index) => (
                            <tr key={index}>
                              <td className="border px-4 py-2 w-[100px]">
                                <img
                                  className=" w-[100%]"
                                  src={item.image}
                                  alt=""
                                />
                              </td>
                              <td className="border text-center px-4 py-2">
                                {item.title}
                              </td>
                              <td className="border px-4 py-2">
                                {item.quantity}
                              </td>
                              <td className="border px-4 py-2">
                                ${item.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="flex justify-center min-h[80%]">
                <h1 className=" text-center text-3xl text-black">No Order</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Order
