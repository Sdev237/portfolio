import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 }); 

  return (
    <div className='nav'>
      
      <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar-container">
          <h1>SAP JEDEON</h1>
          <div>
            <Link to="/">Accueil</Link>
            <Link to="/profile">Profil</Link>
            <a onClick={() => {toggle();toggleTheme();}} className='toggle'>
              {isDarkMode ? (<FontAwesomeIcon icon={faSun} className='sun'/> ) : ( <FontAwesomeIcon icon={faMoon} className='moon'/> )}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

