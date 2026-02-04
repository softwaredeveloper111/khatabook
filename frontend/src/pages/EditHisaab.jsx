import React , {useEffect, useState } from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useForm  } from "react-hook-form";
import { useParams,useNavigate } from "react-router-dom";
  import {  toast } from 'react-toastify';
import axios from "axios";

const EditHisaab = () => {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () => toast("product updated sucessfully✅", {
    className: "custom-update-toast",
  });


 const [task,setTask] =  useState(null)

  const navigate = useNavigate()
  const {id} =  useParams()
  

   useEffect(()=>{

    const fetchTask = async ()=>{
        if(id){
          const t =  await axios.get(`http://localhost:3000/api/v1/tasks/${id}`)
          setTask(t.data.task)
        }
    }
    fetchTask()
     
  },[id])


  useEffect(() => {
  if (task) {
    reset({
      title: task.title,
      description: task.description,
    });
  }
}, [task, reset]);



 async function SubmitEventHandler(data) {
   try {

      // console.log(data);
    await axios.patch(`http://localhost:3000/api/v1/tasks/${id}`,data)
    notify()
    navigate("/")
    
   } catch (error) {
     console.log(error.message)
   }
  }

  return (
    <> {task ? (
       <div className="edit-page px-20 py-5 ">
        <h4 className="text-sky-600 text-bold text-lg font-semibold">
          You are editing hisaab of
          <span className="text-orange-400 font-bold">{task.date}</span> date.
        </h4>

        <form
          className="flex flex-col gap-5 mt-10"
          onSubmit={handleSubmit(SubmitEventHandler)}
        >
          <div className="flex flex-col gap-1">
            <input
              {...register("title", {
                required: { value: true, message: "title is required" },
                minLength: {
                  value: 10,
                  message: "minimum 10 length character required",
                },
                maxLength: {
                  value: 100,
                  message: "maximum 100 length character exceed",
                },
              })}
             
              aria-invalid={!!errors.title}
              aria-describedby="title-errorr"
              className="bg-zinc-300 border-none outline-none rounded-md px-3 py-3 w-95"
              type="text"
              placeholder="Shopping Hisaab, Ghar Ka Kharcha..."
            />
            {errors.title && (
              <span className="text-sm text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <textarea
              {...register("description", {
                required: { value: true, message: "description is required" },
                minLength: {
                  value: 5,
                  message: "minimum 5 length character required",
                },
                maxLength: {
                  value: 200,
                  message: "maximum 200 length character exceed",
                },
              })}
             
              aria-invalid={!!errors.description}
              aria-describedby="description-errorr"
              className="bg-zinc-300 broder-none outline-none rounded-md p-3 resize-none w-115"
              cols="30"
              rows="10"
              placeholder="Daal,Atta,cheeni"
            ></textarea>
            {errors.description && (
              <span className="text-sm text-red-500">
                {errors.description.message}
              </span>
            )}
          </div>

          <button className="px-3 py-2 text-white bg-[#0046FF] rounded-md w-fit cursor-pointer text-sm">
            Update Hisaab
          </button>
        </form>
      </div>
    ) : <Loader/>}
     
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default EditHisaab;
