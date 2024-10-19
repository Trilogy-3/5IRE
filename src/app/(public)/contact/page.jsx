'use client'
import { FaTelegramPlane } from 'react-icons/fa'
import { useState } from 'react'
import NextSteps from '@/app/components/NextSteps'
import { FaLongArrowAltRight as Right } from 'react-icons/fa'
import Link from 'next/link'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <div className='min-h-screen flex flex-col items-center gap-12 h-auto justify-center my-20'>
        <h2 className='text-4xl text-white text-center'>Contact Us</h2>
        <div className='sm:p-8 p-2 rounded-3xl shadow-lg w-full max-w-7xl border-gray-900 border-2'>
          <section className='flex justify-center sm:gap-6 gap-2 mb-6 mt-8'>
            <FaTelegramPlane size={30} color='blue' />
            <h2 className='text-2xl  text-white mb-6 text-center'>
              Get in touch with us
            </h2>
          </section>
          <div className='flex justify-center'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col sm:max-w-xl w-full space-y-5'
            >
              <div className='flex md:flex-row flex-col gap-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-3 rounded-2xl border-sky-400 border-2 bg-mainBackground'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='E-Mail'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-3 rounded-2xl border-sky-400 border-2 bg-mainBackground '
                />
              </div>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                className='w-full p-3 rounded-2xl border-sky-400 border-2 bg-mainBackground'
              />
              <textarea
                name='message'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                className='w-full p-3 rounded-2xl border-sky-400 border-2 bg-mainBackground h-32'
              />
              <section className='flex justify-between w-full'>
                <p className='text-center text-gray-500 mt-4'>
                  <Link
                    href='mailto:contact@5ire.org'
                    className='hover:bg-blue-400 p-2 bg-boxColor rounded-lg px-4 transition duration-200'
                  >
                    contact@5ire.org
                  </Link>
                </p>
                <button
                  type='submit'
                  className='flex items-center gap-2 w-24 p-3 bg-purple-800 text-white font-bold rounded-md hover:bg-blue-400 transition duration-200'
                >
                  Send <Right />
                </button>
              </section>
            </form>
          </div>
        </div>
      </div>
      <NextSteps />
    </>
  )
}
