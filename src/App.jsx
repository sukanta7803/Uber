import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'

const App = () => {
  return (
    <div className='bg-red-700 min-h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
      </Routes>
    </div>
  )
}

export default App
