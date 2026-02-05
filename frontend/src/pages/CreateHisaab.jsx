import React from "react";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
  import { ToastContainer, toast } from 'react-toastify';

const CreateHisaab = () => {


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  function createTodayDate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}
  

  const notify = () => toast("task created sucessfully✅", {
    className: "custom-create-toast",
  });
  

 async function SubmitEventHandler(data){
    
    await axios.post("http://localhost:3000/api/v1/tasks",{...data,date:createTodayDate()})
    notify()
    reset()
    
  }


  return (
    <>
      <div className="create-new-hisaab  py-6 px-8 sm:px-10 lg:px-20">
        <ToastContainer/>
        <h4 className="text-sky-600 text-bold text-lg font-semibold">
          Create New Hisaab.
        </h4>

        <form className="flex flex-col gap-5 mt-10" onSubmit={handleSubmit(SubmitEventHandler)}>

         <div className="flex flex-col gap-1">
          <input
            {...register("title", {
              required: { value: true, message: "title is required" },
              minLength:{value:10,message:"minimum 10 length character required"},
              maxLength:{value:100,message:"maximum 100 length character exceed"}
            })}
            aria-invalid={!!errors.title}
            aria-describedby="title-errorr"
            className="bg-zinc-300 text-sm sm:text-base border-none outline-none rounded-md px-3 py-3  w-70 sm:w-95 dark:bg-zinc-600"
            type="text"
            placeholder="Shopping Hisaab, Ghar Ka Kharcha..."
          />
          {errors.title && <span className="text-sm text-red-500">{errors.title.message}</span>}
          </div>
          

          <div className="flex flex-col gap-1">
          <textarea
            {...register("description", {
              required: { value: true, message: "description is required" },
              minLength:{value:5,message:"minimum 5 length character required"},
              maxLength:{value:200,message:"maximum 200 length character exceed"}
            })}
            aria-invalid={!!errors.description}
            aria-describedby="description-errorr"
            className="bg-zinc-300 text-sm sm:text-base broder-none outline-none rounded-md p-3 resize-none w-80  sm:w-115 dark:bg-zinc-600"
            cols="30"
            rows="10"
            placeholder="Daal,Atta,cheeni"
          ></textarea>
           {errors.description && <span className="text-sm text-red-500">{errors.description.message}</span>}
           </div>


          <button className="px-3 py-2 text-white bg-[#0046FF] rounded-md w-fit cursor-pointer text-sm">
            Create New Hissab
          </button>
        </form>

        
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default CreateHisaab;
