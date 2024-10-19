'use client'
import { MdKeyboardArrowDown as Down } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'
import NavListData from '../../data/NavData.js'
import Link from 'next/link.js'
import { MdArrowOutward as SideArrow } from 'react-icons/md'
export default function NavList() {
  const [openIndex, setOpenIndex] = useState(null)
  const dropdownRef = useRef(null)

  const handleDropdownToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenIndex(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='hidden lg:flex flex-row gap-1 items-center text-white '>
      {NavListData.map((item, index) =>
        item.isChildren ? (
          <ChildComponent
            key={index}
            item={item}
            index={index}
            openIndex={openIndex}
            handleDropdownToggle={handleDropdownToggle}
            dropdownRef={dropdownRef}
          />
        ) : (
          <NoChildComponent key={index} item={item} />
        )
      )}
    </div>
  )
}

function NoChildComponent({ item }) {
  return (
    <div className='hover:bg-boxColor hover:text-sky-700 p-3 rounded-xl'>
      <Link href={item.href} className='flex flex-row items-center gap-1'>
        {item.name}
      </Link>
    </div>
  )
}

function ChildComponent({
  item,
  index,
  openIndex,
  handleDropdownToggle,
  dropdownRef,
}) {
  const listItemRef = useRef(null)

  const handleClick = (e) => {
    handleDropdownToggle(index)
  }

  return (
    <div ref={listItemRef} className=' relative' onClick={handleClick}>
      <p className='hover:bg-boxColor hover:text-sky-700 rounded-xl flex flex-row items-center  p-3 gap-1 '>
        {' '}
        {item.name} <Down className='text-lg' />
      </p>
      {openIndex === index && (
        <div
          ref={dropdownRef}
          className='absolute bg-mainBackground border border-blue-600 top-14 rounded-xl flex flex-col gap-1 max-w-max py-4'
        >
          {item.children &&
            item.children.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className='flex flex-row items-center gap-2 text-nowrap px-5  py-2   hover:text-white hover:bg-blue-400 '
                >
                  {item.name} {item.isOtherPage ? <SideArrow /> : ''}{' '}
                </Link>
              )
            })}
        </div>
      )}
    </div>
  )
}
