import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <section className='px-10 md:px-28 py-20'>
        <div className='bg-blue rounded-2xl p-10'>
            <h1 className='capitalize text-[40px] text-center font-semibold text-white'>subscribe to our newsletter</h1>
            <div className='flex items-center justify-center my-10'>
                <input type="email" placeholder='Enter your email...' className='w-[80%] p-4 rounded-full relative outline-none'/>
                <span className="bg-blue rounded-full p-3 text-white absolute right-[260px] cursor-pointer"><FaArrowRight/></span>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter