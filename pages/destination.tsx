import React from 'react'

function destination() {
  return (
    <div className="my-40 mx-auto">
      <div>
        <p className="text-center text-base uppercase text-gray-600">Explore</p>
        <h1 className="text-center text-5xl font-bold text-gray-900">
          Destination
        </h1>
      </div>
      <div className="mt-10 mb-10 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-yellow-400 px-8 hover:bg-black hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Forest
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-yellow-400 px-8 hover:bg-black hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Mountains
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-yellow-400 px-8 hover:bg-black hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Cites
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-yellow-400 px-8 hover:bg-black hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Beaches
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-yellow-400 px-8 hover:bg-black hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Islands
            </h1>
          </div>
          <div className="group flex h-20 w-auto cursor-pointer items-center justify-center gap-8 rounded-xl border border-yellow-400 px-8 hover:bg-black hover:shadow-xl ">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-white">
              Resorts
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default destination
