import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  return (
    <div className="nav  w-full py-5 px-20 flex justify-between items-center sticky top-0 bg-white dark:bg-[rgb(29,29,31)] z-40">
      <h2 className="text-3xl font-bold text-orange-400">
        Khatabook <i class="ri-book-open-line text-3xl font-bold"></i>
      </h2>
      <div className="rightNav flex items-center gap-15">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
    font-semibold transition-all
    ${
      isActive
        ? "text-blue-600 scale-110 dark:text-zinc-400"
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
        ? "text-blue-600 scale-110 dark:text-zinc-400"
        : "text-black dark:text-white"
    }
    `
          }
        >
          Create New Hisaab
        </NavLink>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Nav;
