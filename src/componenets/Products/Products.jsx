import React from 'react'
import Card from '../Card/Card'

const Products = ({ product }) => {
  return (
    <div className="rounded flex gap-5 flex-wrap">
      {product.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  )
}

export default Products
