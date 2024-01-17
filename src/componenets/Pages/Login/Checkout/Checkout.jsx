import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../../../../Firebase/firebaseConfig'
import { store } from '../../../../Contexts/ContextStore'
import Loader from '../../../Loader/Loader'

const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.cart)
  const { loading } = useContext(store)

  // const userEmail = JSON.parse(localStorage.getItem('user'))
  // console.log(JSON.parse(localStorage.getItem('user')).email)
  // console.log(JSON.parse(localStorage.getItem('user')).uid)

  // const navigate = useNavigate()
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const [houseNo, setHouseNo] = useState('')
  const [apartment, setApartment] = useState('')
  const [pinecode, setPinecode] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const userEmail = JSON.parse(localStorage.getItem('user'))
  const email = userEmail.email
  console.log(email)

  const userUid = JSON.parse(localStorage.getItem('user'))
  const uid = userEmail.uid
  console.log(uid)

  const PlaceOrder = (e) => {
    e.preventDefault()

    if (
      fName === '' ||
      lName === '' ||
      country === '' ||
      houseNo === '' ||
      city === '' ||
      phone === ''
    ) {
      return toast.error('All fields are required')
    }

    const addressInfo = {
      fName,
      lName,
      company,
      country,
      houseNo,
      apartment,
      city,
      pinecode,
      phone,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
    }

    // console.log(addressInfo)

    let options = {
      colors: ['#FFF7E5', '#F9D3AB', '#f4cc72', '#ffbe2d', '#ffb100'],
      enableTooltip: false,
      deterministic: true,
      fontFamily: 'impact',
      fontSizes: [40, 80],
      fontStyle: 'normal',
      fontWeight: 'normal',
      key: 'rzp_test_tm3GguKLAroi0o',
      key_secret: 'P6s4kfawXaTuEPqjEZ1aSsRz',
      amount: parseInt(grandTotal * 100),
      currency: 'INR',
      order_reciept: 'order_reciept' + fName,
      name: 'E-Commerce',
      description: 'for testing purpose',
      handler: async (response) => {
        console.log(response)
        toast.success('Payment Successful')
        const paymentId = response.razorpay_payment_id
        // const paymentId = 1233

        const orderInfo = {
          cartItem,
          addressInfo,
          date: new Date().toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          // userEmail: JSON.parse(localStorage.getItem('user').email),
          // userUid: JSON.parse(localStorage.getItem('user').uid),
          email,
          uid,
          paymentId,
        }

        try {
          const orderRef = collection(db, 'orders')
          const data = await addDoc(orderRef, orderInfo)
          // toast.success('Data inserted Successful')

          console.log(data)
        } catch (error) {
          toast.error('Something wrong')
        }
      },
    }

    let pay = new Razorpay(options)
    pay.open()
    console.log(pay)
  }

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
  const grandTotal = getTotal().totalPrice + shipping

  return (
    <section className="w-[100%]  px-10 ">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="">
            <h1 className="text-center font-bold text-3xl underline">
              Checkout
            </h1>
          </div>
          <div className="w-[100%] pt-10 flex gap-10 flex-wrap">
            <div className="lg:w-[65%] md:w-[50%] sm:w-[100%] ">
              <h1 className="text-2xl font-bold pb-5 uppercase">
                BILLING Details
              </h1>
              <div className="w-full  bg-black p-10 rounded">
                <div className="w-[100%] flex justify-between flex-wrap lg:gap-5 sm:gap-0">
                  <div className="w-[100%] lg:w-[40%] sm:w-[100%] flex items-center border-b border-teal-500 py-3">
                    <input
                      className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="First name"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>

                  <div className="w-[100%] lg:w-[40%] flex items-center border-b border-teal-500 py-3">
                    <input
                      className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Last name"
                      aria-label="lastname"
                      value={lName}
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center border-b border-teal-500 py-3">
                  <input
                    className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Company name (optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className=" ">
                  <select
                    className="text-white py-3 px-1 pb-3  w-[100%] outline-none  border-b border-teal-500   leading-tight  bg-black"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option className="text-gray-600 ">Country / Region</option>
                    <option value="india">India</option>
                    <option value="japan">Japan</option>
                    <option value="usa ">USA</option>
                    <option value="china ">China</option>
                  </select>
                </div>
                <div className="flex items-center border-b border-teal-500 py-3">
                  <input
                    className="text-white bg-transparent w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="House number and street name"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                  />
                </div>
                <div className="flex items-center border-b border-teal-500 py-3">
                  <input
                    className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Apartment, unit, etc. (opational)"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                  />
                </div>
                <div className="flex items-center border-b border-teal-500 py-3">
                  <input
                    className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Pinecode / ZIP (optional)"
                    value={pinecode}
                    onChange={(e) => setPinecode(e.target.value)}
                  />
                </div>
                <div className="flex items-center border-b border-teal-500 py-3">
                  <input
                    className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="city / City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex items-center border-b border-teal-500 py-3">
                  <input
                    className="text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] md:w-[40%] sm:w-[100%] bg-gray-200 p-4 rounded">
              <h1 className="font-bold text-xl pb-4">YOUR ORDER</h1>
              <div>
                <div className="flex justify-between border-b border-gray-400 py-4">
                  <p className="font-bold">Product</p>
                  <p className="font-bold">Subtotal</p>
                </div>
                <div>
                  <div className="border-b border-gray-400 py-4">
                    {cartItem.map((item) => (
                      <div key={item.id} className="flex justify-between py-3">
                        <p className="text-md">
                          {item.title} x {item.quantity}
                        </p>
                        <p className="font-bold">
                          <span>$ </span>
                          <span>{item.price * item.quantity}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between py-5 border-b border-gray-400">
                    <p className="font-bold">Subtotal </p>
                    <p className="font-bold">
                      <span>$ </span>
                      <span>{getTotal().totalPrice}</span>
                    </p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-gray-400">
                    <p className="font-bold">Shipping </p>
                    <p className="font-bold">
                      <span>$ </span>
                      <span>{shipping}</span>
                    </p>
                  </div>
                  <div className="flex justify-between py-5 border-b border-gray-400">
                    <p className="font-bold">Total </p>
                    <p className="font-bold">
                      <span>$ </span>
                      {/* <span>{getTotal().totalPrice + shipping}</span> */}
                      <span>{grandTotal}</span>
                    </p>
                  </div>

                  <div className="py-4 w-[100%]">
                    <button
                      onClick={PlaceOrder}
                      className="w-full font-semibold bg-black hover:bg-red-600 border-black hover:border-red-600 text-sm border-2 text-white py-3 px-5"
                      type="button"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Checkout
