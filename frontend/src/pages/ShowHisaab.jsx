import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowHisaab = () => {
  
  const [task, setTask] = useState(null)
  const {id} =  useParams();



  useEffect(()=>{

    const fetchTask = async ()=>{
        if(id){
          const t =  await axios.get(`http://localhost:3000/api/v1/tasks/${id}`)
          setTask(t.data.task)
        }
    }
    fetchTask()
     
  },[id])


  

  return (
    <>

    {task ? (

      <div className=' px-8 sm:px-10 lg:px-20  py-4'>
       <h4 className="text-sky-600 text-bold  font-semibold text-sm sm:text-lg">
           hisaab of <span className='text-orange-400 text-sm sm:text-[15px]'>  {task.date}</span> : {task.title}
        </h4>

        <div className=' w-80  sm:w-115  max-h-120 p-5 bg-zinc-300 dark:bg-zinc-600 overflow-y-auto mt-6 rounded-md'>
           <p className='w-full h-full whitespace-pre-line'>
              {task.description}
           </p>
        </div>
    </div>

    ) : <Loader/>}
    
    <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  )
}

export default ShowHisaab