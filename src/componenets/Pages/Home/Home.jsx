import React, { useContext, useState } from 'react'
// import { products } from '../../../Data/products'
import { Link, NavLink } from 'react-router-dom'
import Blogs from '../../home/Blogs/Blogs'
import { store } from '../../../Contexts/ContextStore'
import Products from '../../Products/Products'
import Button from '../../common/Buttons/Button'
import Hero from '../../home/Hero/Hero'
import NewsLetter from '../../home/NewsLeter/NewsLetter'
import Heading from '../../common/Heading/Heading'
import CategoryCard from '../../home/Categories/CategoryCard'
import Collections from '../../home/Collections/Collections'
import heroImg from '../../../assets/hero-img.jpg'
import CategorySection from '../../home/Categories/CategorySection'
import BlogSection from '../../home/Blogs/BlogSection'

const Home = () => {
  // const { product: products } = useContext(store)
  // const { filterResult: products } = useContext(store)
  // // const [product, setProduct] = useState(products)
  // const data = [...new Set(products.map((item) => item.category))]
  // console.log(data)

  // hero images not working
  // const images = [
  //   {
  //     id: '1',
  //     imgs:
  //       'https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/10/blog-1-1174x862.jpg',
  //   },
  //   {
  //     id: '2',
  //     imgs:
  //       'https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=600',
  //   },
  //   // {
  //   //   id: '3',
  //   //   imgs: { heroImage },
  //   // },
  // ]
  return (
    <section>
      <Hero
        image={heroImg}
        link="/shop"
        title="Get More Pay Less"
        heading=" Special Offers Shipping"
        offer="$ 10"
      />
      <CategorySection />
      <Collections />
      <NewsLetter />
      <BlogSection />
    </section>
  )
}

export default Home
