import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../../../Contexts/ContextStore'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../Firebase/firebaseConfig'
import { Rating } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import Products from '../../Common/Products'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../../redux/cartSlice'
import Products from '../../Products/Products'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart.cart)

  const { product } = useContext(store)
  const { id } = useParams()
  //   get data using ID
  const [data, setData] = useState({})
  // console.log(data)
  // const { category } = data

  const getDataById = async () => {
    const getId = doc(db, 'products', id)
    const getData = await getDoc(getId)
    if (getData.exists()) {
      setData(getData.data())
    } else {
      console.log('No Data')
    }
  }

  const cartHandle = (data) => {
    console.log(data)
    dispatch(addToCart(data))
    toast.success('Add to cart successfully')
  }

  useEffect(() => {
    getDataById()
    window.scroll(0, 0)
    // localStorage.setItem('cart', JSON.stringify(cartItem))
  }, [id, cartItem])

  const relatedProducts = product.filter(
    // (curItem) => curItem.category === category,
    (curItem) => curItem.category === data.category,
  )
  // console.log(relatedProducts)
  return (
    <div className="py-10 px-10">
      <div className="py-5 flex gap-10">
        <div className="w-[40%]">
          <img className="w-[400px]" src={data.image} alt={data.title} />
        </div>
        <div className="w-[60%] details flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">{data.title}</h1>
            <p>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </p>

            <h1 className="text-2xl font-semibold">$ {data.price}</h1>
            <p className="">{data.description}</p>
          </div>

          <div>
            <button
              className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-6 border border-black hover:border-transparent rounded"
              type="button"
              onClick={() => cartHandle(data)}
            >
              Add To Cart <AddShoppingCartIcon />
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 1 ? (
        <div className="py-10 mx-auto">
          <h1 className="py-5 text-2xl font-semibold">Related Products</h1>
          <div className="">
            <Products product={relatedProducts} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SingleProduct
