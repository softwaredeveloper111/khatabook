import React from 'react'
import { Link ,NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav  w-full py-5 px-20 flex justify-between items-center sticky top-0 bg-white z-40'>
        <h2 className='text-3xl font-bold text-orange-400'>Khatabook  <i class="ri-book-open-line text-3xl font-bold"></i></h2>
        <div className="rightNav flex items-center gap-20">
          <NavLink to="/" style={(e)=>e.isActive?{color:'blue',scale:'1.1'}:{color:'black',scale:'1'}} className='font-semibold'>Home</NavLink>
          <NavLink to="/create-new-hissab" style={(e)=>e.isActive?{color:'blue',scale:"1.1"}:{color:'black',scale:"1"}} className='font-semibold'>Create New Hisaab</NavLink>
        </div>
    </div>
  )
}

export default Nav