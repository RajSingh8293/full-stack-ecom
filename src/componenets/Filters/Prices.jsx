import React, { useContext } from 'react'
import Input from '../Inputs/Input'
import CategoryHeading from './CategoryHeading'
import { store } from '../../Contexts/ContextStore'

const Prices = () => {
  const { handleChange } = useContext(store)
  return (
    <div className="py-3">
      <CategoryHeading heading="Prices" />
      <div>
        <label className="flex gap-2">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span></span>All
        </label>

        <Input value="99" title="$0 - 100" name="test2" />
        <Input value="199" title="$100 - 200" name="test2" />
        <Input value="299" title="$200 - 500" name="test2" />
        <Input value="999" title="$500 - 1000" name="test2" />
        <Input value="1099" title="$1000 - 1200" name="test2" />
        <Input value="1299" title="$1200 - 1500" name="test2" />
      </div>
    </div>
  )
}

export default Prices
