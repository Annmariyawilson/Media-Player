import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import History from './Pages/History'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/his' element={<History/>}/>

    </Routes>
  
    <Footer/>
      
 
    
    </>
  )
}

export default App
