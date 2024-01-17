import React, { useContext, useState } from 'react'
import { store } from '../../Contexts/ContextStore'

const UpdateProduct = () => {
  // const [products, setProducts] = useState('')
  const { products, setProducts, updateProduct, loading } = useContext(store)

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold underline text-center pb-5">
          Update Product
        </h1>
        <div className="flex justify-center ">
          <form className="addproduct_for bg-gray-600 w-[600px] py-3 px-4 rounded">
            <div className="mb-3 ">
              <h3 className="text-white mb-1">Title</h3>
              <input
                className="w-[100%] py-2 px-3 rounded outline-none border-black border-2"
                type="text"
                placeholder="T-Shirt"
                value={products.title}
                onChange={(e) =>
                  setProducts({ ...products, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3 ">
              <h3 className="text-white mb-1">Image URL</h3>
              <input
                type="text"
                className="w-[100%] py-2 px-3 rounded outline-none border-black border-2"
                placeholder="Enter image url"
                value={products.image}
                onChange={(e) =>
                  setProducts({
                    ...products,
                    productImage: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <h3 className="text-white mb-1">Description</h3>
              <input
                type="text"
                className="w-[100%] py-2 px-3 rounded outline-none border-black border-2"
                placeholder="Description...."
                value={products.description}
                onChange={(e) =>
                  setProducts({ ...products, description: e.target.value })
                }
              />
            </div>

            <div className="mb-4 ">
              <h3 className="text-white mb-1">Price</h3>
              <input
                type="text"
                placeholder="$1000"
                className="w-[100%] py-2 px-3 rounded outline-none border-black border-2"
                value={products.price}
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
              />
            </div>

            <div className="mb-3 ">
              <select
                className="  w-[100%] py-2 px-3 rounded outline-none border-black border-2 "
                aria-label="Default select example"
                value={products.category}
                onChange={(e) =>
                  setProducts({ ...products, category: e.target.value })
                }
              >
                <option>Select category</option>
                <option value="chair">Chair</option>
                <option value="sofa">Sofa</option>
                <option value="bed ">Bed</option>
                <option value="furniture ">Furniture</option>
              </select>
            </div>

            <button
              variant="primary"
              type="submit"
              className="bg-black py-2 px-4 text-white rounded"
              onClick={updateProduct}
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UpdateProduct
