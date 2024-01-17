import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from 'firebase/firestore'
import { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/firebaseConfig'
import { toast } from 'react-toastify'
import { Card } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

export const store = createContext()

const DataProvider = ({ children }) => {
  //   const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    colors: '',
    image: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }),
  })

  //   add products

  const addProduct = async (e) => {
    e.preventDefault()
    if (
      products.title === '' ||
      products.description === '' ||
      products.category === '' ||
      products.price === '' ||
      products.colors === '' ||
      products.image === ''
    ) {
      return toast.error('All fileds are required')
      //   return alert('All fileds are required')
      //   console.log('All fileds required')
    }
    setLoading(true)

    try {
      const myCollection = collection(db, 'products')
      const data = await addDoc(myCollection, products)
      // navigate('/dashboard')
      window.location.href = '/dashboard'
      toast.success('Add product successfully')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error('Something wrong')
    }
    setProducts('')
  }

  //   get products
  const [product, setProduct] = useState([])
  //   console.log(product)
  const getProduct = () => {
    setLoading(true)

    try {
      const myCollection = collection(db, 'products')
      let productArray = []
      const getdata = onSnapshot(myCollection, (snapshot) => {
        snapshot.forEach((item) => {
          productArray.push({ ...item.data(), id: item.id })
        })
        setProduct(productArray)
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      toast.error(error)
    }
  }

  //   get products
  const [users, setUsers] = useState([])
  const getUsers = () => {
    setLoading(true)
    try {
      const myCollection = collection(db, 'users')
      let usersArray = []
      const getdata = onSnapshot(myCollection, (snapshot) => {
        snapshot.forEach((item) => {
          usersArray.push({ ...item.data(), id: item.id })
        })
        setUsers(usersArray)
        // console.log(usersArray)
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      toast.error(error)
    }
  }

  // delete product

  const deleteProduct = async (item) => {
    setLoading(true)
    try {
      const data = await deleteDoc(doc(db, 'products', item.id))
      toast.success('Deleted successfully')
      getProduct()
      setLoading(false)
    } catch (error) {
      setLoading(false)

      toast.error('Something went wrong')
    }
  }

  // editeData products in firestore database

  const editeData = (item) => {
    setProducts(item)
  }
  // editeData products in firestore database

  const updateProduct = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await setDoc(doc(db, 'products', products.id), products)
      toast.success('Product updated successfully')
      getProduct()
      // navigate('/dashboard')
      window.location.href = '/dashboard'
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error('Error', error)
    }
    setProducts('')
  }

  // getOrdersData products in firestore database
  const [order, setOrder] = useState([])
  const getOrdersData = async () => {
    setLoading(true)
    try {
      const getData = await getDocs(collection(db, 'orders'))
      const orderArray = []
      getData.forEach((orderData) => {
        orderArray.push(orderData.data())
      })
      setOrder(orderArray)
      // console.log(orderArray)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  // filters starts

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')

  // input filter
  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  const filterItems = product.filter(
    (productdata) =>
      productdata.title
        .toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase()) !== -1,
  )

  // Radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Buttons filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  function filterdData(d, selected, query) {
    let filtereddata = d

    // Filter input items
    if (query) {
      filtereddata = filterItems
    }

    // Selected filter
    if (selected) {
      // filterProducts = filterProducts.filter(
      //   (products) =>
      //     products.title === selected || products.category === selected || products.price === selected || products.oldPrice === selected || products.colors === selected
      // )
      filtereddata = filtereddata.filter(
        ({ title, category, price, colors }) =>
          title === selected ||
          category === selected ||
          price === selected ||
          colors === selected,
      )
    }

    return filtereddata
  }
  const filterResult = filterdData(product, selectedCategory, query)
  // console.log(filterResult)

  useEffect(() => {
    getProduct()
    getUsers()
    getOrdersData()
  }, [])
  return (
    <store.Provider
      value={{
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,

        product,
        users,

        deleteProduct,

        editeData,
        updateProduct,

        order,

        handleChange,
        query,
        handleInputChange,
        filterResult,
        handleClick,
        filterItems,
      }}
    >
      {children}
    </store.Provider>
  )
}

export { DataProvider }
