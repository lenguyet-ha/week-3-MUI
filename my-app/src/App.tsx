import React from 'react'
import { Home } from './components/home/Home'
import { Login } from './components/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Register } from './components/register/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
