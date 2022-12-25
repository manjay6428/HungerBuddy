import React from 'react'
import Home from './Pages/Home'
import './App.css'
import Cart from './Pages/Cart'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='container'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
        
      </Routes>
     </Router>
    </div>
  )
}

export default App
