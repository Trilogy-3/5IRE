'use client'
import { useState, useEffect } from 'react'
import DesignedCauroselItem from './components/DesignedCaurosel'
import { data } from './components/data/CauroselData'

export default function Designed() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % data.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [])

  if (!data || data.length < 1) return null

  return (
    <div className='mt-12 flex flex-row items-center'>
      <div className='flex-grow w-full'>
        <div className='transition-opacity duration-500 ease-in-out opacity-100'>
          <DesignedCauroselItem
            btnColor={data[activeIndex].btnColor}
            videoLink={data[activeIndex].videoLink}
            btnHref={data[activeIndex].btnHref}
            btnValue={data[activeIndex].btnValue}
            title={data[activeIndex].title}
            desc={data[activeIndex].desc}
            isPercent={data[activeIndex].isPercent}
            percentValue={data[activeIndex].percent?.value}
            sibling={data[activeIndex].percent?.sibling}
            percentName={data[activeIndex].percent?.name}
            borderColor={data[activeIndex].borderColor}
          />
        </div>
      </div>
      <div className='max-w-max flex flex-col gap-2 items-center'>
        {data.map((_, index) => (
          <Indicator
            key={index}
            cssMain={activeIndex === index ? 'h-8 bg-[#8B57E3]' : 'bg-white'}
          />
        ))}
      </div>
    </div>
  )
}

function Indicator({ cssMain = 'bg-white' }) {
  return <div className={`h-4 w-2 rounded-full ${cssMain}`}></div>
}
