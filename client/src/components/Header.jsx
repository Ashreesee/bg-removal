import React from 'react';
import img from "../assets/upload-icon.png";
import hero from "../assets/header_img-mdrOD-tk.png";
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Header = () => {

const { removeBg } = useContext(AppContext)

  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      <div>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Remove the <br className='max-md:hidden' /> 
          <span className='bg-gradient-to-r from-green-950 to-green-700 bg-clip-text text-transparent'>
            Background 
          </span> 
        from <br className='max-md:hidden' /> images for free.
        </h1>
        <p className='my-6 text-[15px] text-gray-500'>
          Remove backgrounds instantly and effortlessly for stunning visuals<br className='max-md:hidden' />
          Save time and money with our AI-powered background removal service.
        </p>
        <div>
          <input onChange={ e => removeBg(e.target.files[0])} type='file' accept='image/*' id='upload1' hidden />
          <label
            className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-green-950 to-green-700 m-auto hover:scale-105 transition-all duration-700'
            htmlFor='upload1'
          >
            <img width={20} src={img} alt='' />
            <p className='text-white text-sm'>Upload your image</p>
          </label>
        </div>
      </div>
      <div className='w-full max-w-md'>
        <img src={hero} alt=''/>
      </div>
    </div>
  );
};

export default Header;
