import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.png'
import Trending from '../components/Trending'

function MainPage() {
  return (
    <>
      <div className=" w-screen">
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 md:text-7xl">
              Explore World <HiOutlineArrowNarrowRight />
            </h1>
            <p className="text-base text-gray-500 md:text-xl">
              Traveling is one of the best way to enhance personal growth. It
              enables you to do things different from your daily routine
              activities
            </p>
            <div className="mt-20 flex items-start justify-start gap-5 text-center ">
              <button className=" h-14  cursor-pointer rounded-xl  bg-orange-400 px-8 font-semibold text-white hover:bg-black hover:shadow-xl">
                Book Now !
              </button>
              <button className="h-14 cursor-pointer rounded-xl  border px-8 font-semibold hover:bg-black hover:text-white hover:shadow-xl">
                Get a Price
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={HeroImage}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
        <Trending />
      </div>
    </>
  )
}

export default MainPage
