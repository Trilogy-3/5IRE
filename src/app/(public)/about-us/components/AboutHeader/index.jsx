import Button5ire from "@/app/atoms/Button5ire";

 
export default function AboutHeader() {
  return (
    <div className=' flex flex-col gap-6 items-center md:items-start '>
          <h2 className='text-4xl md:text-5xl'>About 5ire</h2>
          <p className='max-w-[450px] text-slate-400 md:text-start text-center leading-5 text-sm'>
            At 5ireChain, we are dedicated to leveraging blockchain technology to build a sustainable future. Our ecosystem represents a paradigm shift from a for-profit economy to a for-benefit economy, where sustainable practices are at the forefront of innovation.
          </p>
        <Button5ire href='/' value={'Contact Us'} cssMain={'py-3 bg-boxColor text-sky-700  rounded-xl hover:text-white hover:bg-blue-400 px-6 font-semibold hover:shadow-blue-400 shadow-sm outline-none max-w-max'}/>
        </div>
  )
}
