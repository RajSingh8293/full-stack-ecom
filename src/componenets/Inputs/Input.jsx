import React, { useContext } from 'react'
import { store } from '../../Contexts/ContextStore'

const Input = ({ value, title, name, color }) => {
  const { handleChange } = useContext(store)

  return (
    <div>
      <label className="flex gap-2 relative">
        <input
          onChange={handleChange}
          type="radio"
          value={value}
          name={name}
          className="bg-#2196f3"
        />
        <span style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </div>
  )
}

export default Input
