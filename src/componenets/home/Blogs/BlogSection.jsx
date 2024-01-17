import React from 'react'
import Heading from '../../common/Heading/Heading'
import Blogs from './Blogs'

const BlogSection = () => {
  return (
    <section className="w-full py-10">
      <Heading title="OUR BLOGS" />
      <Blogs />
    </section>
  )
}

export default BlogSection
