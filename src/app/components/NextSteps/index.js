import Link from 'next/link'

export default function NextSteps() {
  const steps = [
    {
      title: 'Reach out',
      description:
        'Want to partner up or build with us? Get in touch with our core contributors.',
      buttonText: 'Get in Touch',
      link: '#',
      icon: '✈️',
    },
    {
      title: 'Start building',
      description: 'Find everything you need to start building on 5ire today.',
      buttonText: 'View Documentation',
      link: '#',
      icon: '🔗',
    },
    {
      title: 'Join the Community',
      description:
        'Connect with people from across the ecosystem. Build and grow together.',
      buttonText: 'Learn More',
      link: '#',
      icon: '👥',
    },
  ]

  return (
    <>
      <div className='bg-mainBackground flex flex-col items-center justify-center mb-12 max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-white'>
            Ready for the next steps?
          </h2>
        </div>
        <div className='flex lg:flex-row flex-col w-full gap-8 px-3'>
          {steps.map((item, index) => (
            <div
              key={index}
              className='bg-mainBackground p-6 rounded-2xl shadow-lg border-2 border-gray-900 hover:bg-slate-900 transition duration-200'
            >
              <div className='text-4xl text-blue-400 mb-4'>{item.icon}</div>
              <h3 className='text-xl font-bold text-white mb-4'>
                {item.title}
              </h3>
              <p className='text-gray-500 mb-6 lg:max-w-96'>
                {item.description}
              </p>
              <Link
                href={item.link}
                className='inline-block p-3 bg-boxColor text-white rounded-lg hover:bg-blue-400  transition duration-200'
              >
                {item.buttonText} <span aria-hidden='true'>↗️</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
