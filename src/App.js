import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import { Marg } from './Marg';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const [langue, setLangue] = useState('Fr');

  const toggleLangue = () => {
    setLangue(langue === 'Fr' ? 'An' : 'Fr');
  };

  return (
    <div className={`app ${theme} ${langue}`}>
      <Navbar toggleTheme={toggleTheme}  />
      <Marg/>
      <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/profile" element={<Profile />} />
      </Routes>
      
    </div>
  );
}

export default App;

