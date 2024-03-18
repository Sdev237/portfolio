import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Navbar.scss';

const Navbar = ({ toggleTheme }) => {

  const isMobile = useMediaQuery({ maxWidth: 768 }); 

  return (
    <div className='nav'>
      
      <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar-container">
          <h1>SAP JEDEON</h1>
          <div>
            <Link to="/">Accueil</Link>
            <Link to="/profile">Profil</Link>
            <button onClick={toggleTheme}>thème</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

