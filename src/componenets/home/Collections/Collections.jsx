import React, { useContext } from 'react'
import Heading from '../../common/Heading/Heading'
import Button from '../../common/Buttons/Button'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab'
import { store } from '../../../Contexts/ContextStore'
import Products from '../../Products/Products'

const Collections = () => {
  const { product: products } = useContext(store)

  const sliceData = products.slice(0, 5)

  return (
    <section className="">
      <Heading title="OUR COLLECTION" />
      <div className="flex justify-center">
        <Products product={sliceData} />
      </div>
      <Button title="See more" link="/shop" arrow={<KeyboardTabIcon />} />
    </section>
  )
}

export default Collections
