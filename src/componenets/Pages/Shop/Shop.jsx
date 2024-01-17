import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../../Data/products'
import Products from '../../Products/Products'
import Heading from '../../common/Heading/Heading'
import { store } from '../../../Contexts/ContextStore'
import Search from '../../Filters/Search'
import Sidebar from '../../Sidebar/Sidebar'
import Hero from '../../home/Hero/Hero'
import ShopImg from '../../../assets/newsLetterImg.jpeg'
import Buttons from '../../Filters/Buttons'

const Shop = () => {
  // const [product, setProduct] = useState(products)
  // const { product: products } = useContext(store)
  const { filterResult: products } = useContext(store)

  // const words = [1, 3, 4, 5, 6, 7, 12, 34, 23, 31, 32, 8, 9, 10, 20, 22, 24]

  // const result = words.filter((a) => a > 10 || a < 20)
  // console.log(result)

  return (
    <main>
      <section className="w-[100%]">
        <Hero
          image={ShopImg}
          title="Get More Pay Less"
          heading=" world's leading ecommerce brands "
        />
      </section>

      <section className="">
        <Heading title="#shop" />
      </section>

      <section className="py-5 px-10 flex gap-10 ">
        <div className="  w-[20%]">
          <h1 className="text-2xl font-bold">Filters</h1>
          <Sidebar />
        </div>

        <div className="w-[80%]">
          <div className="w-[100%]">
            <div className="flex gap-20 mb-5">
              <h1 className="text-xl font-semibold">Recomended</h1>
              <Buttons />
            </div>
            <Products product={products} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop
