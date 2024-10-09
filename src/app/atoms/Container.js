import React from 'react'

export default function Container({children}) {
  return (
    <div className="max-w-[1250px] mx-auto p-4 flex flex-col gap-16">{children} </div>
  )
}
