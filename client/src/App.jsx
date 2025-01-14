import React from 'react'
import { Routes,Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Footer from './components/Footer'
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
