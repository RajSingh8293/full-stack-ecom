import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../componenets/admin/Dashboard'
import AddProduct from '../componenets/admin/AddProduct'
import UpdateProduct from '../componenets/admin/UpdateProduct'
import AllProducts from '../componenets/admin/AllProducts'
import Orders from '../componenets/admin/Orders'
import Users from '../componenets/admin/Users'

import Home from '../componenets/Pages/Home/Home'
import Shop from '../componenets/Pages/Shop/Shop'
import Cart from '../componenets/Pages/Cart/Cart'
import SingleProduct from '../componenets/Pages/SingleProduct/SingleProduct'
import Login from '../componenets/Pages/Login/Login'
import Signup from '../componenets/Pages/Signup/Signup'
import Nopage from '../componenets/Pages/Nopage/Nopage'
import Payment from '../componenets/Pages/Payment/Payment'
import UserProtectedRoute from '../ProtectedRoute/UserProtectedRoute'
import Order from '../componenets/Pages/Order/Order'
import Checkout from '../componenets/Pages/Login/Checkout/Checkout'

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<UserProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
        </Route>
        <Route path="/productdetails/:id" element={<SingleProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/addproduct" element={<AddProduct />} />
        <Route path="/dashboard/updateproduct" element={<UpdateProduct />} />
        <Route path="/dashboard/allproducts" element={<AllProducts />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Nopage />} />
        {/* <Route
          path="/dashboard/orders"
          element={
            <UserProtectedRoute>
              <Order />
            </UserProtectedRoute>
          }
        /> */}
        {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
        {/* <Route path="/cart" element={<Cart />} />
        <Route path="/model" element={<Model />} />
        <Route path="/userorder" element={<UserOrder />} /> */}
        {/* <Route
          path="/dashboard"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/dashboard/allproducts"
          element={
            <AdminProtectedRoute>
              <Dashboard />
            </AdminProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/dashboard/users"
          element={
            <AdminProtectedRoute>
              <Users />
            </AdminProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/dashboard/addproduct"
          element={
            <AdminProtectedRoute>
              <AddProduct />
            </AdminProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/dashboard/updateproduct"
          element={
            <AdminProtectedRoute>
              <UpdateProduct />
            </AdminProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  )
}

export default Routers
