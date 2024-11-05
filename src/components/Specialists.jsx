import React from 'react'
import { specialists } from '../assets/constant'

const Specialists = () => {
  return (
    <section className='px-10 lg:px-28 py-20'>
        <h1 className='capitalize text-[48px] font-bold text-[#2e2e2e]'>our consulting specialists</h1>

        <div className='my-10'>
            <div className='grid lg:grid-cols-4 gap-10'>
                {
                    specialists.map((specialist, index) => (
                        <div key={index} className={`border-[1px] rounded-2xl p-6 border-gray-500 ${
                            index === 1 ? 'bg-blue text-white ' : 'text-darkgray'
                          }`}>
                            <img src={specialist.icon} alt="" className='bg-[#E6F5FC] p-5 rounded-full' />
                            <h2 className='font-bold text-2xl capitalize  my-3' >{specialist.speciality}</h2>
                            <p className=' text-[16px] '>{specialist.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Specialists