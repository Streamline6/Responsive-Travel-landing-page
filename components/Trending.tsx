import React from 'react'
import Image from 'next/image'
import One from '../public/images/1.jpg'
import Two from '../public/images/2.jpg'
import { AiFillStar } from 'react-icons/ai'

function Trending() {
  return (
    <div className="my-20 flex  items-center justify-center">
      {/* images section  */}
      <div className="flex w-11/12 flex-col items-center justify-center gap-4 p-5 md:ml-20 md:flex-row">
        <div className="relative">
          <Image
            src={One}
            alt="first"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className=" flex h-auto w-full flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              Beach
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Baga Beach</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 5.0 (12 reviews)</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Two}
            alt="second"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className="flex h-auto flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              Forest
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Antonia</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 4.8 (48 reviews)</p>
            </div>
          </div>
        </div>
        {/* textual content */}
        <div className="flex-col items-start justify-start sm:mt-8 md:mt-0 md:ml-20">
          <h1 className="text-5xl font-bold text-gray-900">Best Of The Week</h1>
          <p className="mt-5 w-3/4 text-base text-gray-600 md:text-xl">
            Traveling is one of the best way to enhance personal growth. It
            enables you to do things different from your daily routine
            activities
          </p>
          <div className="flex items-start justify-start gap-5">
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">50+</h1>
              <p className="text-xl font-medium text-gray-600">Destination</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">800+</h1>
              <p className="text-xl font-medium text-gray-600">Tourists</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">300+</h1>
              <p className="text-xl font-medium text-gray-600">Hotels</p>
            </div>
          </div>
          <button className="h-14 w-auto rounded-xl bg-violet-600 px-8  text-white shadow-xl hover:bg-violet-900">
            Find Place
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trending
