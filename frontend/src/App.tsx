import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomeDashboard from './pages/Dashboard/HomeDashboard'
import SignUpForm from './pages/forms/SignUpForm'
import HomeLanding from './pages/HomeLanding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/home" element={<HomeDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
