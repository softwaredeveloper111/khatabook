import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Task = ({ item, setTaskLists }) => {
  const { date, _id } = item;

  const notify = () =>
    toast("task deleted sucessfully.✅", {
      className: "custom-delete-toast",
    });

  async function deleteEventHandler(id) {
    await axios.delete(`http://localhost:3000/api/v1/tasks/${id}`);
    setTaskLists((prev) => prev.filter((item) => item._id !== id));
    notify();
  }

  return (
    <div className="task bg-blue-500 w-80 py-3 flex items-center justify-between  rounded-md px-5">
      <div className="left flex items-center gap-3">
        <span className="text-white">{date}</span>
        <span className="w-7 h-7 rounded-full bg-white flex justify-center items-center cursor-pointer">
          <Tooltip>
            <TooltipTrigger>
              <Link to={`/show-hisaab/${_id}`}>
                <i class="ri-arrow-right-long-line text-blue-500 text-sm font-bold"></i>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-neutral-700 text-white text-[11px]">
              <p>Reveal Task</p>
            </TooltipContent>
          </Tooltip>
        </span>
      </div>

      <div className="right flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger>
            <Link to={`/update-hisaab/${_id}`}>
              <span className="cursor-pointer">
                <i class="ri-pencil-line text-white text-xl"></i>
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-neutral-700 text-white text-[11px]">
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <span
              onClick={() => deleteEventHandler(_id)}
              className="w-8 h-8 flex items-center justify-center bg-white text-red-500 rounded-full cursor-pointer"
            >
              <i class="ri-delete-bin-line"></i>
            </span>
          </TooltipTrigger>
          <TooltipContent className="bg-neutral-700 text-white text-[11px]">
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default Task;
