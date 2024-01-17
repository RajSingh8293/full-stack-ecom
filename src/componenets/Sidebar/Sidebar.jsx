import React, { useContext } from 'react'
import Category from '../Filters/Category'
import Prices from '../Filters/Prices'
import Colors from '../Filters/Colors'
import { store } from '../../Contexts/ContextStore'
import Buttons from '../Filters/Buttons'
import Search from '../Filters/Search'

const Sidebar = () => {
  // const { handleChange, handleClick } = useContext(store)
  return (
    <div>
      <Search />
      <Category />
      <Prices />
      <Colors />
    </div>
  )
}

export default Sidebar
