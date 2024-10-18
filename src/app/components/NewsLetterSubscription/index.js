'use client'
import { useState } from 'react'
import { IoIosMail as Mail } from 'react-icons/io'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribed with:', email)
  }

  return (
    <div className='w-full flex flex-col mx-2 max-w-7xl rounded-3xl py-10 items-center justify-center bg-gradient-to-r from-purple-900 to-black pt-6'>
      <h2 className='text-3xl font-bold text-white text-center mb-4'>
        Discover the 5ire Ecosystem
      </h2>
      <p className='text-center text-white mb-8'>Subscribe to our Newsletter</p>
      <form
        onSubmit={handleSubmit}
        className='flex  md:flex-row flex-col gap-4'
      >
        <div className='relative '>
          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400'>
            <Mail size={20} />
          </span>
          <input
            type='email'
            placeholder='Enter the E-Mail Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='pl-10 pr-4 py-3 rounded-md bg-mainBackground text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-purple-600 text-white font-bold px-6 py-3 rounded-md hover:bg-purple-500 transition duration-200 '
        >
          Subscribe now
        </button>
      </form>
    </div>
  )
}
