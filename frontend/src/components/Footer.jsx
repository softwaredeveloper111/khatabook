import React from 'react'

const Footer = () => {
  return (
    <div className='w-full  py-7  px-20 bg-white dark:bg-[rgb(29,29,31)] flex justify-between items-center'>
       <span className='flex items-center gap-1 text-zinc-400'>
        <i class="ri-book-open-line text-xl font-bold text-"></i>
        <span className='text-medium'>Khatabook</span>
       </span>

       <span>©2026-2026 Powerd by <span className='text-blue-700 cursor-pointer'>Kirana Dukaan</span></span>
       <span className='flex items-center gap-5'>
        <i class="ri-instagram-line text-xl cursor-pointer"></i>
        <i class="ri-linkedin-fill text-xl cursor-pointer"></i>
        <i class="ri-github-fill text-xl cursor-pointer"></i>
       </span>
    </div>
  )
}

export default Footer