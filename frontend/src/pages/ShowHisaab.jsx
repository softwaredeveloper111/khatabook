import React from 'react'
import Footer from "../components/Footer";

const ShowHisaab = () => {
  return (
    <>
    <div className=' px-20 py-4'>
       <h4 className="text-sky-600 text-bold text-lg font-semibold">
           hisaab of <span className='text-orange-400 font-bold'>12-08-20626</span> : kirane ki dukaan
        </h4>

        <div className='w-110  max-h-120 p-5 bg-zinc-300 overflow-y-auto mt-6 rounded-md'>
           <pre className='w-full h-full whitespace-normal'>

           </pre>
        </div>

        <button className="mt-10 px-3 py-2 text-white bg-[#0046FF] rounded-md w-fit cursor-pointer text-sm">Edit Hisaab</button>

    </div>
    <div className="absolute bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>
  )
}

export default ShowHisaab