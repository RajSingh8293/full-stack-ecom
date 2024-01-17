import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin)
  return admin?.user?.email === 'adminraj123@gmail.com' ? (
    children
  ) : (
    <Navigate to="/" />
  )
}

export default AdminProtectedRoute
