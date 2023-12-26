import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex bg-black text-gray-50 h-14 items-center justify-evenly text fixed top-0 w-full z-50'>
      <Link
        to="/"
        className=' 
           transition ease-in-out
         hover:text-yellow-200
         hover:bg-slate-500
           px-3 py-1 rounded-[8px]'>
        CamargoReact
      </Link>
      <div className='flex gap-4 text-stone-950'>
        <Link to="/clock" className='bg-violet-200 rounded-[8px] px-3 py-1'>Digital Clock</Link>
        <Link to="/pokedex" className='bg-violet-200 rounded-[8px] px-3 py-1'>Pokedex</Link>
        <Link to="/creditcard" className='bg-violet-200 rounded-[8px] px-3 py-1'>Credit Card</Link>
        <Link to="/buttonpractice" className='bg-violet-200 rounded-[8px] px-3 py-1'>Buttons</Link>
        <Link to="/userscards" className='bg-violet-200 rounded-[8px] px-3 py-1'>UsersCards</Link>

      </div>

    </nav>
  )
}

export default Navbar