import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Payment = () => {
  return (
    <section className="flex justify-center items-center min-h-[80vh]">
      <div class="w-full lg:max-w-[400px] md:max-w-[400px] py-5">
        <form class="bg-white shadow-md lg:border-2 md:border-2  rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between mb-8">
            <p className="w-[60px] rounded-full overflow-hidden">
              <img
                className="w-[100%]"
                src="https://w7.pngwing.com/pngs/803/833/png-transparent-logo-paypal-computer-icons-paypal-blue-angle-logo.png"
                alt=""
              />
            </p>
            <p className="text-gray-700 font-bold">
              <span>
                <ShoppingCartOutlinedIcon />
              </span>
              <span> $ </span>
              <span>529299</span>
            </p>
          </div>
          <h1 className="text-center text-gray-700 pb-5 text-2xl font-semibold">
            Pay with PayPal
          </h1>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-4"
              for="email"
            >
              Enter your email address to get started
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email or mobile number"
            />
          </div>
          <div class="mb-6">
            <p class="text-blue-500 text-sm font-bold">
              <Link to="/payment">Forgot email?</Link>
            </p>
          </div>
          <div class="mb-6 flex items-center justify-between">
            <button
              class=" w-full bg-blue-700 border-2 border-transparate hover:bg-white  text-white hover:border-2  hover:border-blue-800 hover:text-blue-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Next
            </button>
          </div>
          <div className="mb-6">
            <p class="text-center text-gray-500">or</p>
          </div>
          <div class="mb-6 flex items-center justify-between">
            <button
              class=" w-full text-blue-800 border-2 border-blue-800 hover:bg-blue-700 hover:border-blue-700 hover:text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Payment
