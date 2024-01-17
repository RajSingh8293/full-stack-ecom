import React, { useContext } from 'react'
import Input from '../Inputs/Input'
import CategoryHeading from './CategoryHeading'
import { store } from '../../Contexts/ContextStore'

const Colors = () => {
  const { handleChange } = useContext(store)
  return (
    <div className="py-3">
      <CategoryHeading heading="Colors" />

      <div>
        <label className="flex gap-2">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test3"
          color="white"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="brown"
          title="Brown"
          name="test3"
          color="brown"
        />
      </div>
    </div>
  )
}

export default Colors
