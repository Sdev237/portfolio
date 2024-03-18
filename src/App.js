import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} />
      <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

