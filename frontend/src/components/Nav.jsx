import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import  Sidebar  from "../components/Sidebar";

const Nav = () => {

  const [sidebarToggle, setsidebarToggle] = useState(false);

  
  return (

    
    <div className="nav w-full py-5 px-8 sm:px-10 lg:px-20 flex justify-between items-center sticky top-0 bg-white dark:bg-[rgb(29,29,31)] z-40">
      <h2 className="text-2xl   font-bold text-orange-400  whitespace-nowrap  sm:text-3xl">
        Khatabook <i className="ri-book-open-line text-2xl font-bold"></i>
      </h2>

      <div className="hidden  rightNav  items-center gap-15 lg:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
    font-semibold transition-all
    ${
      isActive
        ? "text-blue-600 scale-110 dark:text-sky-400"
        : "text-black dark:text-white"
    }
    `
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/create-new-hissab"
          className={({ isActive }) =>
            `
    font-semibold transition-all
    ${
      isActive
        ? "text-blue-600 scale-110 dark:text-sky-400"
        : "text-black dark:text-white"
    }
    `
          }
        >
          Create New Hisaab
        </NavLink>

        <ThemeToggle />
      </div>
      
     <div className="lg:hidden">
     {sidebarToggle ? <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle}/> : (
      <span onClick={()=>setsidebarToggle(()=>true)}>
        <i className="ri-menu-line text-2xl"></i>
      </span>
      
      ) }

      </div>
    
   

    </div>
  );
};

export default Nav;
