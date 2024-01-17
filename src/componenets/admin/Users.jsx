import React, { useContext } from 'react'
// import { products } from '../../Data/products'
import { store } from '../../Contexts/ContextStore'

const Users = () => {
  const { users, loading } = useContext(store)
  return (
    <section className="">
      {loading && <h1>Loading...</h1>}
      <div className="py-5 px-10">
        <h1 className="text-center text-2xl font-bold underline">All Users</h1>
        <div className="w-[100%] py-10 flex justify-center">
          <table className="w-full lg:max-w-[800px] md:max-w-[800px]">
            <thead>
              <tr>
                <th className="py-2">S.No</th>
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Operations</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{item.username}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2 text-center">
                    <button className="bg-red-400 py-2 px-3 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Users
