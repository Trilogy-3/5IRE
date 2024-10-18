'use client'
import React from 'react'
import { FaChevronLeft as Left } from 'react-icons/fa'
import { FaChevronRight as Right } from 'react-icons/fa'
import { FaXTwitter as Twitter } from 'react-icons/fa6'
import { useState } from 'react'
import advisors from './advisor'

export default function AdvisorsCarousel() {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 8) % advisors.length)
  }

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 8 + advisors.length) % advisors.length
    )
  }

  const visibleAdvisors = advisors.slice(startIndex, startIndex + 8)

  return (
    <section className='bg-mainBackground px-4 sm:px-6 lg:px-8'>
      <div className='px-2 max-w-7xl mx-auto '>
        <h2 className='text-4xl font-bold text-white text-center mb-12'>
          Advisors
        </h2>
        <div className='lg:px-8 px-4 relative'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {visibleAdvisors.map((item, index) => (
              <div
                key={index}
                className='bg-mainBackground rounded-2xl p-6 flex flex-col items-center border-2 border-gray-900 hover:bg-blue-900'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-24 h-24 rounded-full mb-4 object-cover'
                />
                <h3 className='text-white text-lg font-semibold text-center'>
                  {item.name}
                </h3>
                <p className='text-gray-400 text-sm text-center mt-2'>
                  {item.role}
                </p>
                <Twitter className='text-[#1DA1F2] mt-4' size={24} />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className='absolute -top-16 md:top-1/2 left-0 transform -translate-y-1/2 -translate-x-full rounded-full p-2 shadow-lg'
          >
            <Left className='text-blue-600' size={24} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute -top-16 md:top-1/2 right-0 transform -translate-y-1/2 translate-x-full  rounded-full p-2 shadow-lg'
          >
            <Right className='text-blue-600' size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
