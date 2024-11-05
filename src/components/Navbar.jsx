import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='flex py-5 px-28 items-center justify-between bg-hero_bg'>
        <img src={logo} alt="" />
        <ul className='flex'>
            <li className='mr-8 text-lg'><a href="#">Home</a></li>
            <li className='mr-8 text-lg'><a href="#">About</a></li>
            <li className='mr-8 text-lg'><a href="#">Application</a></li>
            <li className='mr-8 text-lg'><a href="#">History</a></li>
        </ul>
        <div className='flex gap-3 items-center'>
            <button className='border-[1px] border-blue rounded-full py-1 px-5 text-blue text-lg font-semibold'>Log in</button>
            <button className='border-[1px] bg-blue rounded-full py-1 px-5 text-white text-lg font-semibold'>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar