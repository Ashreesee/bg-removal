import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Upload from '../components/Upload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps />
      <BgSlider/>
      <Upload/>
    </div>
  )
}

export default Home