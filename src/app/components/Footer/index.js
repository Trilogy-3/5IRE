import React from 'react'
import Logo from '../Navbar/components/Logo'
import Social from '../Navbar/components/Social'
import { FooterData } from './Data/data'
import Link from 'next/link'
import Container from '@/app/atoms/Container'

export default function Footer() {
    const year = new Date().getFullYear()
    
    return (
        <Container>
            <div className='border border-slate-800  rounded-3xl p-8'>
                <div className='flex flex-col md:flex-row justify-between gap-10   items-start w-full'>
                    <Logo />
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full flex-grow lg:pl-16'>
                        {FooterData.map((item, index) => (
                            <FooterItem key={index} item={item} />
                        ))}
                    </div>
                    <Social />
                </div>
                <hr className='my-8 border-none bg-slate-800 h-[1px]' />

                <p className='text-center text-slate-600 text-sm font-bold'>© 5ire {year} - All Rights Reserved.</p>
            </div>
        </Container>
    )
}
function FooterItem({ item }) {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <p className='text-blue-600 font-bold italic'>{item.title}</p>
            <ul className='flex flex-col gap-2'>
                {item.children.map((child, idx) => (
                    <li key={idx}>
                        <Link href={child.href}>{child.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
