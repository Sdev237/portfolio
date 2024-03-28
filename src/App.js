import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss'; // Assurez-vous d'avoir importé votre fichier de styles
import Navbar from './components/Navbar'; // Créez votre composant Navbar
import { Marg } from './Marg'; // Importez vos autres composants
import En from './components/En/En'; // Importez le composant pour la langue anglaise
import Fr from './components/Fr/Fr'; // Importez le composant pour la langue française
import Profil from './components/Fr/Profil';
import Profile from './components/En/Profile';

function App() {
  const [theme, setTheme] = useState('dark');
  const [langue, setLangue] = useState('Fr');
  
  const [langueProfil, setLangueProfil] = useState('Fr');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLangue = () => {
    setLangue(langue === 'Fr' ? 'En' : 'Fr');
    
    setLangueProfil(langueProfil === 'Fr' ? 'En' : 'Fr');
  };

  return (
    <div className={`app ${theme} ${langue} ${langueProfil}`}>
      {/* Utilisez votre composant Navbar ici */}
      <Navbar toggleTheme={toggleTheme} toggleLangue={toggleLangue} />

      {/* Votre contenu principal */}
      <Marg />

      {/* Définissez vos routes */}
      <Routes>
        {langue === 'Fr' && <Route path="/" element={<Fr />} />}
        {langue === 'En' && <Route path="/" element={<En />} />}
        {langueProfil === 'En' && <Route path="/profile" element={<Profile/>} />}
        {langueProfil === 'Fr' && <Route path="/profil" element={<Profil/>} />}
      </Routes>
    </div>
  );
}

export default App;
