import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import axios from "axios";
  import { ToastContainer  } from 'react-toastify';

const Home = () => {
 
  const [taskLists,setTaskLists] = useState(null)
  
  useEffect(()=>{
     async function fetchData(){
         const {data} = await axios.get("http://localhost:3000/api/v1/tasks")
        //  console.log(data.tasks)
        setTaskLists(data.tasks)
      }
      fetchData()
  },[])


  return (
    <>
      <div className="home px-20 mt-10 min-h-[73vh] relative mb-10">
        <ToastContainer/>
        <h4 className="text-sky-600 text-bold text-lg font-semibold">
          All Hisaab kitaab.
        </h4>
        <div className="flex flex-wrap gap-6 mt-10  ">
               
              {taskLists ? (
                taskLists.length>0? (
                  taskLists.map(item=><Task key={item._id} item={item} setTaskLists={setTaskLists}/>)
                ) : <h4>No task has been create yet.</h4>
              ) : <Loader/>}
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
