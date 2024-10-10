import React from 'react'
import { BsArrowUpRightSquareFill as Arrow } from 'react-icons/bs';
import Link from 'next/link';

export default function LearnMoreBtn({href}) {
  return (
    <Link
        href={href}
        className="flex items-center gap-2 bg-boxColor px-6 py-3 mt-3 text-blue-400 rounded-xl self-center hover:text-white hover:bg-blue-400 hover:shadow-sky-300 relative z-20 font-bold"
      >
        Learn More <Arrow  />
      </Link>
  )
}
