import React from 'react'
import HeroImg from './HeroImg'
import HeroContent from './HeroContent'

const Hero = ({ image, link, title, heading, offer }) => {
  return (
    <>
      <section className="relative w-[100%] overflow-hidden">
        <HeroImg image={image} />
        <HeroContent
          link={link}
          title={title}
          heading={heading}
          offer={offer}
        />
      </section>
    </>
  )
}

export default Hero
