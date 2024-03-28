import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

function En() {
  return (
    <div>
      
      <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default En