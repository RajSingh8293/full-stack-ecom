import React from 'react'
import HeroImg from '../Hero/HeroImg'
import newsLetterImg from '../../../assets/newsLetterImg.jpeg'
import '../../Styeles/Buttons.css'

const NewsLetter = () => {
  return (
    <section className="w-full py-10">
      <div className="relative overflow-hidden w-[100%] h-[200px] px-10 ">
        <HeroImg image={newsLetterImg} />
        <div className="">
          <div className="absolute flex items-center gap-10 top-[10%] left-20">
            <h1 className="text-6xl font-bold">10 %</h1>
            <div className="">
              <div className="flex flex-1 justify-between mb-2 items-center w-[50vw] h-[40px] z-10 bg-white border">
                <input
                  type="email"
                  className="px-2 outline-none border-0 w-[100%]"
                  placeholder="Email address"
                />
                <button className="btn px-3 py-2">Submit</button>
              </div>
              <p className="text-5xl mb-4">Get More Pay Less</p>
              <p className="text-3xl">
                On orders $500 + Use Coupon Code:{' '}
                <span className="text-3xl text-orange-600 font-bold">
                  WSD10
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
