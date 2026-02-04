import React from "react";

const Task = () => {
  return (
    <div className="task bg-blue-500 w-80 py-3 flex items-center justify-between  rounded-md px-5">
      <div className="left flex items-center gap-3">
        <span className="text-white">12-08-2026</span>
        <span className="w-7 h-7 rounded-full bg-white flex justify-center items-center cursor-pointer">
          <i class="ri-arrow-right-long-line text-blue-500 text-sm font-bold"></i>
        </span>
      </div>

      <div className="right flex items-center gap-3">
         <span className="cursor-pointer"><i class="ri-pencil-line text-white text-xl"></i></span>
         <span className="w-8 h-8 flex items-center justify-center bg-white text-red-500 rounded-full cursor-pointer"><i class="ri-delete-bin-line"></i></span>
      </div>
       
    </div>
  );
};

export default Task;
