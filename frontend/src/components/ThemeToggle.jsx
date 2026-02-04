import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  
  
  const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(()=>{
     setMounted(true);
   },[])

  if (!mounted) return null;

  function clickEventHandler(){
    setTheme(theme === "dark" ? "light" : "dark")
  }
 
  return (
     <span onClick={clickEventHandler} className={`h-9 w-9 ${theme==="light"?"bg-black":"bg-white"} rounded-full flex justify-center items-center cursor-pointer `}>
      {theme==="light" ? <i className="ri-sun-line text-white text-lg"></i> : <i className="ri-moon-line text-black text-lg"></i>  }
      
      </span>
  )
}

export default ThemeToggle