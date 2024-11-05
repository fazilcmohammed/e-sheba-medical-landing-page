import React from 'react'
import surgeryImg from '../assets/surgery.png'
import { chooseUs } from '../assets/constant'
import { SiTicktick } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <section className='flex flex-col md:flex-row gap-10 px-10 md:px-28 pb-20'>
        <div>
            <img src={surgeryImg} alt="" />
        </div>
        <div>
            <h1 className='capitalize text-[48px] font-bold mb-5 text-[#2e2e2e]'>why you choose us?</h1>
            <div className=''>
                {
                    chooseUs.map((point, index)=> (
                        <div key={index} className='flex gap-3 items-center mb-2 '>
                            <span className='text-blue'><SiTicktick/></span>
                            <p className='text-[#163048] text-[16px] '>{point}</p>
                        </div>
                        
                    ))
                }
                <button className='text-[16px] text-blue flex items-center gap-2 mt-5 font-medium'>Learn More <span><FaArrowRight/></span></button>
            </div>
        </div>
    </section>
  )
}

export default ChooseUs