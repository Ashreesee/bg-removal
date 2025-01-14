import React,{ useState} from 'react'
import img from "../assets/original.png";
import img1 from "../assets/output.png";
const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(40)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }
  return (
    <div className='pb-10 md:py-20 mx-2'>
      <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High <br/> Quality and Accuracy</h1>
      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        <img src={img} style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} alt='' />
        <img className="absolute top-0 left-0 w-full h-full" src={img1} style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} alt='' />
        <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type='range' min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>  
      </div>
    </div>
  )
}

export default BgSlider
