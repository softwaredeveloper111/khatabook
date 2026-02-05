import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full  py-7  px-10 bg-white dark:bg-[rgb(29,29,31)] flex flex-col justify-center gap-3 items-center lg:px-20 lg:flex-row lg:justify-between'>
       <span className='flex items-center gap-1 text-zinc-400'>
        <i class="ri-book-open-line text-xl font-bold text-"></i>
        <span className='text-medium'>Khatabook</span>
       </span>

       <span className='text-sm sm:text-base'>©2026-2026 Powerd by <span className='text-blue-700 cursor-pointer'>Kirana Dukaan</span></span>
       <span className='flex items-center gap-5'>
        <Link target='_blank' to="https://www.instagram.com/sourav___giri/"><i class="ri-instagram-line  cursor-pointer text-base sm:text-xl"></i></Link>
        <Link target='_blank' to="https://www.linkedin.com/in/sourav-giri-0a148820a/"> <i class="ri-linkedin-fill  cursor-pointer text-base sm:text-xl"></i></Link> 
       <Link target='_blank' to="https://github.com/softwaredeveloper111"> <i class="ri-github-fill  cursor-pointer text-base sm:text-xl"></i></Link>
       </span>
    </div>
  )
}

export default Footer