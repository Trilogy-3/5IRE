 
import React from 'react'
import AboutHeader from './components/AboutHeader';
import MissionVision from './components/MissionVision';

export default function Aboutus() {
  return (
    <div>
      <div className="w-full relative flex flex-col gap-10">
        <img
          src="/images/about_hero.webp"
          className="lg:h-screen block h-full w-full object-contain "

        />
        <div className='md:absolute md:top-36 lg:top-1/4 md:left-6  lg:left-40 lg:right-24 px-5 flex flex-col gap-20'>
          <AboutHeader />
          <MissionVision />
        </div>
      </div>


    </div>
  )
}
