import React, { useContext } from 'react'
// import { products } from '../../Data/products'
import { store } from '../../Contexts/ContextStore'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const {
    product: products,
    deleteProduct,
    editeData,

    loading,
  } = useContext(store)

  return (
    <section className=" w-[100%] px-10">
      <h1 className="text-center pt-5 text-2xl font-bold underline">
        All Products ({products.length})
      </h1>
      <div className="w-[90%] flex justify-center py-8 ">
        <table className="w-full lg:max-w-[800px] md:max-w-[800px]">
          <thead>
            <tr>
              <th className="py-2">Image</th>
              <th className="py-2">Title</th>
              <th className="py-2">Category</th>
              <th className="py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td className=" border px-4 py-2 h-[80px] w-[100px]">
                  <img className="h-[100%] " src={item.image} alt="" />
                </td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">${item.price}</td>
                <td className="border flex mx-4 my-2">
                  <Link to="/dashboard/updateproduct" className="mr-3">
                    <button
                      className="bg-green-400 py-2 px-3 rounded"
                      onClick={() => editeData(item)}
                    >
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-400 py-2 px-3 rounded"
                    onClick={() => deleteProduct(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AllProducts
