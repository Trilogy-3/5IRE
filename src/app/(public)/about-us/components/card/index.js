import React from 'react'

export default function Card({icon:Icon,cssMain='',desc='' ,title}) {
  return (
      <div className={`h-auto w-full border border-slate-600 rounded-2xl p-6 bg-transparent hover:bg-slate-900 gap-3 flex flex-col ${cssMain}`}>
          <div className='flex items-center gap-4'>
              <Icon size={40}   className='text-sky-400  ' /> 
              <p className='font-bold text-white text-xl'>{title}</p>
          </div>
          <p className='text-slate-400 text-sm'>{desc}</p>
      </div>
  )
}
