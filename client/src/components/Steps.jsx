import React from 'react'
import icon from "../assets/upload_icon.svg"
import icon1 from "../assets/remove_bg_icon.svg"
import icon2 from "../assets/download_icon.svg"

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove background<br/> image in seconds</h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

            <div className='flex items-start gap-4 p-7 pb-10 rounded-md border drop-shadow-md 
                  transform duration-500 ease-in-out hover:scale-105'>
                <img className="max-w-9" src={icon} alt='' />
                <div>
                    <p className='text-xl font-medium'>Upload image</p>
                    <p className='text-sm text-neutral-500 mt-1'>Click on "Upload the image" button<br /> to upload any image.</p>
                </div>
            </div>
            <div className='flex items-start gap-4 p-7 pb-10 rounded-md border drop-shadow-md 
                  transform duration-500 ease-in-out hover:scale-105'>
                <img className="max-w-9" src={icon1} alt='' />
                <div>
                    <p className='text-xl font-medium'>Remove background</p>
                    <p className='text-sm text-neutral-500 mt-1'>Click on "Remove background" button<br/> to do the magic.</p>
                </div>
            </div>
            <div className='flex items-start gap-4 p-7 pb-10 rounded-md border drop-shadow-md 
                  transform duration-500 ease-in-out hover:scale-105'>
                <img className="max-w-9" src={icon2} alt='' />
                <div>
                    <p className='text-xl font-medium'>Download image</p>
                    <p className='text-sm text-neutral-500 mt-1'>Click on "Download image" button<br/> to get the image.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps