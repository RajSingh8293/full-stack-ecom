import React, { useContext, useState } from 'react'
import { blogdata } from '../../../Data/blogdata'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { bindActionCreators } from '@reduxjs/toolkit'
import { store } from '../../../Contexts/ContextStore'
import Loader from '../../Loader/Loader'
const Blogs = () => {
  const [activeImage, setImage] = useState(0)
  const { loading } = useContext(store)

  const nextSlide = () => {
    setImage(activeImage === blogdata.length - 1 ? 0 : activeImage + 1)
  }
  const prevSlide = () => {
    setImage(activeImage === 0 ? blogdata.length - 1 : activeImage - 1)
  }

  if (!Array.isArray(blogdata) || blogdata.length <= 0) {
    return null
  }
  return (
    <section className="">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[100%] px-10 h-[40%] relative ">
          <div className="ml-5 left-10 lg:top-40 sm:top-52 absolute bg-white p-2 rounded-full">
            <KeyboardArrowLeftIcon onClick={prevSlide} />
          </div>
          <div className="absolute mr-5 lg:top-40 sm:top-52 right-10 bg-white p-2 rounded-full">
            <KeyboardArrowRightIcon onClick={nextSlide} />
          </div>

          {blogdata.map((blog, ind) => (
            <div
              className={
                ind === activeImage ? 'currentSlide active' : 'currentSlide'
              }
              key={blog.id}
            >
              {ind === activeImage && (
                <div className="flex gap-5">
                  <div className="col lg:w-[40%] md:w-[100%] sm:w-[100%]  overflow-hidden rounded ">
                    <img
                      className=" w-[100%] h-[100%] "
                      src={blog.image}
                      alt=""
                    />
                  </div>

                  <div className="col lg:w-[40%] md:w-[100%] sm:w-[100%]">
                    <p className="uppercase opacity-2 text-gray-500 font-normal  py-3">
                      {blog.name}
                    </p>
                    <h3 className="text-3xl text-black ">{blog.title}</h3>
                    <p className="opacity-2 text-gray-500 font-normal py-3">
                      {blog.description}
                    </p>
                    <p className="text-black font-bold">
                      <Link to="/">Read more</Link>
                    </p>
                  </div>

                  <div className="col lg:w-[15%] sm:md:flex-none overflow-hidden rounded ">
                    <img
                      className="w-[100%] h-[100%]  object-cover   transition-all duration-5 ease"
                      src={blog.image2}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Blogs
