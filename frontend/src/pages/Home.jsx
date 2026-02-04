import React from "react";
import Task from "../components/Task";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home px-20 mt-10 min-h-[73vh] relative mb-10">
        <h4 className="text-sky-600 text-bold text-lg font-semibold">
          All Hisaab kitaab.
        </h4>
        <div className="flex flex-wrap gap-6 justify-between mt-10  ">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          
       
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
