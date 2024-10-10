import React from 'react'

export default function Image({imgSrc,parentCss,imgCss}) {
  return (
      <div className={`${parentCss}`}>
          <img src={imgSrc} className={` h-full w-full  object-contain ${imgCss} `}/>
    </div>
  )
}
