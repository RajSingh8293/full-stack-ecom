import React from 'react'
import Navbar from '../componenets/Header/Navbar'
import Footer from '../componenets/Footer/Footer'
import AdminNav from '../componenets/admin/AdminNav'
import Routers from '../Routers/Routers'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const loaction = useLocation()

  return (
    <>
      {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Navbar />}

      <div>
        <Routers />
      </div>
      <Footer />
    </>
  )
}

export default Layout
