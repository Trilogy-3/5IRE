"use client"
import { useState,useEffect } from 'react'
import Left from './componets/Left'
import Right from './componets/Right'
import { ArrowData } from './data/ArrowData'

export default function ArrowCaurosel() {
  const [selectedIndex,setSelectedIndex]=useState(0)
  const handlePrevClick = () => {
    let index 
     index = selectedIndex - 1 % ArrowData.length
    if (index < 0) index=0
    if(index>ArrowData.length) index=ArrowData.length-1
    setSelectedIndex(index)
  }
  const handleForwardClick = () => {
   let index 
       index = selectedIndex + 1 % ArrowData.length

    if (index < 0) index=0
    if (index >= ArrowData.length) index = ArrowData.length - 1
    setSelectedIndex(index)
  }

  useEffect(() => {
    
  },[selectedIndex])
  return (
      <div className="flex flex-col gap-6 p-4 py-8 md:flex-row border rounded-2xl border-slate-700 hover:bg-slate-900 hover:opacity-55">
          
      <Left selectedIndex={selectedIndex} />
      <Right selectedIndex={selectedIndex} handlePrevClick={ handlePrevClick} handleForwardClick={handleForwardClick} />
    </div>
  )
}
