import { useContext, useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Avatar } from '@mui/material'
import Loader from '../Loader/Loader'
import { toast } from 'react-toastify'
import { store } from '../../Contexts/ContextStore'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Dashboard', href: '/dashboard' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartItem = useSelector((state) => state.cart.cart)
  const user = JSON.parse(localStorage.getItem('user'))

  // console.log(user.email)
  // console.log(user.uid)

  let getTotalQuantity = () => {
    let total = 0
    cartItem.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  const logout = () => {
    localStorage.clear('user')
    window.location.href('/')
    toast.success('Logout successfully')
  }
  return (
    <div className="bg-white">
      <header className=" inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <h1 className="text-xl text-orange-600 font-bold">E-Commerce</h1>
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-base font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="gap-x-12 items-center hidden lg:flex lg:flex-1 lg:justify-end">
            <div>
              {user ? (
                <div className="flex gap-x-12">
                  <NavLink
                    onClick={logout}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Logout
                  </NavLink>
                  <NavLink
                    to="/order"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Order
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </NavLink>
              )}
            </div>

            <div className=" ">
              <NavLink
                to="/cart"
                className=" relative text-sm font-semibold  text-gray-900"
              >
                {/* Cart <span>{cartItem.length}</span> */}
                <ShoppingCartOutlinedIcon />
                <span className=" bg-blue-600 p-1 px-2 text-white rounded-full absolute bottom-2 left-5 ">
                  {getTotalQuantity() || 0}
                  {/* {cartItem.length} */}
                </span>
              </NavLink>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <h1 className="text-xl text-orange-600 font-bold">
                  E-Commerce
                </h1>
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                <div className="py-6">
                  <div className="py-4">
                    {user ? (
                      <div>
                        <NavLink
                          onClick={logout}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Logout
                        </NavLink>
                        <NavLink
                          to="/order"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Order
                        </NavLink>
                      </div>
                    ) : (
                      <NavLink
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </NavLink>
                    )}
                  </div>

                  <div className=" ">
                    <NavLink
                      to="/cart"
                      className=" relative text-sm font-semibold  text-gray-900"
                    >
                      {/* Cart <span>{cartItem.length}</span> */}
                      <ShoppingCartOutlinedIcon />
                      <span className=" bg-blue-600 p-1 px-2 text-white rounded-full absolute bottom-2 left-5">
                        {getTotalQuantity() || 0}
                        {/* {cartItem.length} */}
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

export default Navbar
