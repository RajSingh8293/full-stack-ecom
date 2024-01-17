import React, { useContext } from 'react'
import Heading from '../../common/Heading/Heading'
import CategoryCard from '../../home/Categories/CategoryCard'
import { store } from '../../../Contexts/ContextStore'
import Button from '../../common/Buttons/Button'

const CategorySection = () => {
  const { product: products } = useContext(store)
  // console.log(products)
  const data = [...new Set(products.map((item) => item.category))]

  return (
    <section className="w-full py-10">
      <Heading title="SHOP BY CATEGORY" />
      <CategoryCard categoryData={data} />
      <div className="flex gap-3 justify-center">
        {/* {data.map((data) => (
          <Button title={data} />
        ))} */}
      </div>
    </section>
  )
}

export default CategorySection
