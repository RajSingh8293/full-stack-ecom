import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Add-Product', href: '/dashboard/addproduct' },
  { name: 'Update-Product', href: '/dashboard/updateproduct' },
]

const AdminNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear('user')
    navigate('/')
  }
  return (
    <>
      <section className="">
        <div className="">
          <div className="bg-white">
            <header className=" inset-x-0 top-0 z-50">
              <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
              >
                <div className="flex lg:flex-1">
                  <NavLink to="/" className="-m-1.5 p-1.5">
                    <h1 className="text-xl text-orange-600 font-bold">
                      E-Commerce
                    </h1>
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
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <div>
                    {user ? (
                      <NavLink
                        onClick={logout}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Logout <span aria-hidden="true">&rarr;</span>
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/login"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </NavLink>
                    )}
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
                        <div>
                          {user ? (
                            <NavLink
                              onClick={logout}
                              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              Logout <span aria-hidden="true">&rarr;</span>
                            </NavLink>
                          ) : (
                            <NavLink
                              to="/login"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Log in <span aria-hidden="true">&rarr;</span>
                            </NavLink>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </header>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminNav
