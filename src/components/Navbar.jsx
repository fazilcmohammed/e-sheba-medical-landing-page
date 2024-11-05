import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='flex py-5 px-28 items-center justify-between bg-hero_bg'>
        <img src={logo} alt="" />
        <ul className='flex'>
            <li className='mr-8'><a href="#">Home</a></li>
            <li className='mr-8'><a href="#">About</a></li>
            <li className='mr-8'><a href="#">Application</a></li>
            <li className='mr-8'><a href="#">History</a></li>
        </ul>
        <div>
            <button>Log In</button>
            <button>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar