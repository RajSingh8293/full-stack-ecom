import React, { useContext } from 'react'
import AdminNav from './AdminNav'
import AllProducts from './AllProducts'
import { Link } from 'react-router-dom'
import { store } from '../../Contexts/ContextStore'

const Dashboard = () => {
  const { users, product, order } = useContext(store)
  return (
    <>
      <section className="py-3 px-10 dashboard">
        <div className="flex gap-10 justify-center">
          <div className="py-2 px-3  rounded top_box sale_box bg-slate-600">
            <h4>Total Sales</h4>
            <span className="text-3xl text-white">$78990</span>
          </div>

          <div className="py-2 px-3  rounded top_box order_box bg-orange-400 curser-pointer">
            <Link to="/dashboard/orders">
              <h4>Total Orders</h4>
              <span className="text-3xl">{order.length}</span>
            </Link>
          </div>

          <div className="py-2 px-3   rounded top_box product_box bg-green-800">
            <Link to="/dashboard/allproducts">
              <h4>Total Products</h4>
              <span className="text-3xl text-white">{product.length}</span>
            </Link>
          </div>

          <div className="py-2 px-3  rounded top_box user_box bg-gray-300">
            <Link to="/dashboard/users">
              <h4>Total Users</h4>
              <span className="text-3xl">{users.length}</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <AllProducts />
      </section>
    </>
  )
}

export default Dashboard
