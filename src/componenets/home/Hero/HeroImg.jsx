import React from 'react'

const HeroImg = ({ image }) => {
  return (
    <div className="w-full overflow-hidden ">
      <img
        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        src={image}
        alt=""
      />
    </div>
  )
}

export default HeroImg
