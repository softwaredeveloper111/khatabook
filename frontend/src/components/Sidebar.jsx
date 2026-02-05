import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ sidebarToggle,setsidebarToggle }) => {
  return (
    <div
      className={`
        sidebar
        fixed top-0 right-0 h-screen w-64
        backdrop-blur-md bg-white/20 border-l border-white/30
        shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${sidebarToggle ? "translate-x-0" : "translate-x-full"}
      `}
    >
    
      <span className="absolute z-50 top-5 right-5" onClick={()=>setsidebarToggle(()=>false)}>
        <i className="ri-close-line text-3xl text-red-500"></i>
      </span>


      <div className="pt-25 py-16 px-10 text-white flex flex-col justify-baseline items-center gap-6 ">
        {/* Links will go here later */}
         <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold transition-all
            ${
        isActive
        ? "text-blue-600 scale-110 dark:text-sky-400"
        : "text-black dark:text-white"
         }
          `
          }
        > Home
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
        >Create New Hisaab 
        </NavLink>

        <ThemeToggle />

      </div>
    </div>
  );
};

export default Sidebar;
