import React, { useState } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { HiOutlineMenuAlt1, HiX } from 'react-icons/hi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className=" z-10 w-full bg-white py-2">
        <div className="mx-auto lg:px-8 ">
          <div className="flex h-16 items-center justify-around">
            <div className=" flex items-center gap-x-72">
              <div className="flex-shrink-0">
                <h1 className=" cursor-pointer text-2xl font-bold text-gray-800">
                  TravelIn
                </h1>
              </div>
              <div className="hidden  md:block ">
                <div className="ml-10 flex items-center justify-items-end space-x-4">
                  <Link href="/">
                    <a
                      href="#"
                      className="  rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-orange-600"
                    >
                      Discovery
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="  rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-orange-600"
                  >
                    Destination
                  </a>
                  <Link href="/">
                    <a
                      href="#"
                      className="  rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:text-orange-600"
                    >
                      About Us
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <button className="h-10 w-auto cursor-pointer rounded-xl bg-orange-400  px-8 font-semibold text-white shadow-xl hover:bg-black">
                  Register
                </button>
              </div>
            </div>
            <div className="mr-2 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center rounded-md p-2 text-green-600 hover:text-green-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <HiOutlineMenuAlt1 className="text-xl" />
                ) : (
                  <HiX className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="mx-6 md:hidden" id="mobile-menu">
              <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <a
                  href="#"
                  className=" block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-orange-600"
                >
                  Discovery
                </a>
                <a
                  href="#"
                  className=" block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-orange-600"
                >
                  Destination
                </a>

                <a
                  href="#"
                  className=" block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-orange-600"
                >
                  About Us
                </a>
                <button className="h-10 w-auto cursor-pointer rounded-xl bg-orange-500  px-8 font-semibold text-white shadow-xl hover:bg-black">
                  Register
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
