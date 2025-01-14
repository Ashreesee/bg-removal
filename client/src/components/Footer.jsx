import React from 'react'
import i1 from "../assets/facebook_icon.svg";
import i2 from "../assets/twitter_icon.svg";
import i3 from "../assets/googleplus_icon.svg";
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img className="w-6 sm:w-12" src="/leaf.svg" alt="BgRemoval" />
        <span className="ml-2 text-lg sm:text-xl font-semibold text-black">
          Bg Removal
        </span>
        <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @BG.DEV | All right reserved.</p>
        <div className='flex gap-1'>
            <img width={40} src={i1} alt=''/>
            <img width={40} src={i2} alt=''/>
            <img width={40} src={i3} alt=''/>
        </div>
    </div>
  )
}

export default Footer
