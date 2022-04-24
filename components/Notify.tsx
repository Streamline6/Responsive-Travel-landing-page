import React from 'react'

function Notify() {
  return (
    <div className="mx-auto my-20 flex h-auto w-11/12 flex-col items-center justify-center rounded-md bg-violet-400 p-8 shadow-xl">
      <h1 className="w-3/4 text-center text-5xl font-semibold text-white md:text-6xl">
        Don't Miss The 50% Discount If You Register Today{' '}
      </h1>
      <p className="my-10 w-3/4 text-center text-base text-white md:text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
        voluptatum excepturi ad dolorum placeat doloribus?
      </p>
      <button className="h-14 rounded-md border border-white px-10 text-xl text-white hover:border-none hover:bg-violet-900 ">
        Register
      </button>
    </div>
  )
}

export default Notify
