import React, { useContext, useEffect } from 'react'
import { products } from '../../Data/products'
import { store } from '../../Contexts/ContextStore'

const Orders = () => {
  const { order } = useContext(store)

  const getdata = order.map((item) =>
    item.cartItem.map((data) => {
      return data
    }),
  )
  console.log(getdata)

  return (
    <section className="py-5 px-10">
      <h1 className="text-center text-2xl font-bold underline">All Orders</h1>
      <div className="w-[100%] py-10">
        {order.map((allorderdata) => (
          <table className="w-[100%]">
            <thead>
              <tr>
                <th className="py-2">Payment Id</th>
                <th className="py-2">Image</th>
                <th className="py-2">Title</th>
                <th className="py-2">Qty</th>
                <th className="py-2">Price</th>
                <th className="py-2">Subtotal</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Email</th>
                <th className="py-2">Name</th>
                <th className="py-2">Address</th>
                <th className="py-2">Country</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {allorderdata.cartItem.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{allorderdata.paymentId}</td>

                  <td className="border px-4 py-2 w-[100px]">
                    <img className=" w-[100%]" src={item.image} alt="" />
                  </td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">${item.price}</td>
                  <td className="border px-4 py-2">
                    ${item.price * item.quantity}
                  </td>
                  <td className="border px-4 py-2">
                    {allorderdata.addressInfo.phone}
                  </td>
                  <td className="border px-4 py-2">{allorderdata.email}</td>
                  <td className="border px-4 py-2">
                    {allorderdata.addressInfo.fName}
                  </td>
                  <td className="border px-4 py-2">
                    {`${allorderdata.addressInfo.houseNo} ${allorderdata.addressInfo.apartment}  ${allorderdata.addressInfo.city} ${allorderdata.addressInfo.pinecode} ${allorderdata.addressInfo.country}`}
                  </td>
                  <td className="border px-4 py-2">
                    {allorderdata.addressInfo.country}
                  </td>

                  <td className="border px-4 py-2">
                    {allorderdata.addressInfo.date}
                  </td>
                  <td className="border px-4 py-2">
                    <button className="bg-red-400 py-2 px-3 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </section>
  )
}

export default Orders
