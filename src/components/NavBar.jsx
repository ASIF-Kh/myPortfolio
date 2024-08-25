import React from 'react'
import { FaLinkedinIn,FaGithub } from 'react-icons/fa'
function NavBar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src='' alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedinIn />
            <FaGithub />
        </div>
    </nav>
  )
}

export default NavBar