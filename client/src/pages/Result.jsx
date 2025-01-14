import React from 'react'
import img from "../assets/original.png";
import img2 from "../assets/output.png";

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className='bg-white rounded-lg-px-8 py-6 drop-shadow-md'>
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className="rounded-md border" src={img} alt=''/>
          </div>
          <div className='flex flex-col'>
            <p>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              <img src={img2} alt=''/>
              {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-green-950 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
              </div> */}
            </div>
          </div>
        </div>
                <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
                  <button className='px-8 py-2.5 text-green-950 text-sm border border-green-950 rounded-full hover:scale-105 transition-all duration-700'>Try another image</button>
                  <a className='px-8 py-2.5 text-white text-sm bg-gradient-to-r from-green-950 to-green-700 rounded-full hover:scale-105 transition-all duration-700' href="">Download image</a>
                </div>
      </div>


    </div>
  )
}

export default Result