import React, { useContext } from 'react'
import Input from '../Inputs/Input'
import CategoryHeading from './CategoryHeading'
import { store } from '../../Contexts/ContextStore'

const Category = () => {
  const { handleChange } = useContext(store)
  return (
    <div className="">
      <CategoryHeading heading="Category" />
      <div>
        <label className="flex gap-2">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sofa"
          title="Sofa"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="bed"
          title="Bed"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="chair"
          title="Chair"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="furniture"
          title="Furniture"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category
