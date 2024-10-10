import Link from 'next/link'

export default function Button5ire({href='/' ,cssMain,value}) {
  return (
     <Link
          href={href}
          className={`${cssMain} px-4 py-1 rounded-2xl `}
        >
         {value}
        </Link>
  )
}
