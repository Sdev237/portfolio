import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Profil from './Profil';

function Fr() {
  return (
    <div>
      <Routes>
            <Route path="/"  element={<Accueil />} />
            <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  )
}

export default Fr