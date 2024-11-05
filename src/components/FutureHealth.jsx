import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import futureHealth from '../assets/future_health.png'

const FutureHealth = () => {
  return (
    <section className='px-10 md:px-28 py-20 flex flex-col md:flex-row gap-10 md:gap-20'>
        <div className='md:w-[50%]'>
            <h1 className="capitalize text-center md:text-left text-[48px] font-bold text-[#2e2e2e]">The future <br /> of <span className="text-blue">quality health</span></h1>
            <p className="text-[#163048] text-center md:text-left text-[16px] my-6">The future of quality health is centered on personalized care, advanced technology, and holistic wellness. As healthcare evolves, we are moving toward more tailored treatments, faster diagnostics, and greater accessibility, ensuring that every individual receives the right care at the right time. <br /> <br /> Innovations in medical research, digital health tools, and preventative care will empower people to take control of their health, leading to healthier lives and a more connected, efficient healthcare system.</p>
            <button className='text-[16px] text-blue flex items-center gap-2 mt-5 font-medium'>Learn More <span><FaArrowRight/></span></button>
        </div>
        <div className='md:w-[50%]'>
            <img src={futureHealth} alt="" />
        </div>
    </section>
  )
}

export default FutureHealth