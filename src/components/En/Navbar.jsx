import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faHome  } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = ({ toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [langue, setLangue] = useState('fr');

  const toggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFlag = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLangue = (nouvelleLangue) => {
    setLangue(nouvelleLangue);
    let translations;
    if (nouvelleLangue === 'fr') {
      
    } else if (nouvelleLangue === 'en') {
      
    }
    // Mettre à jour le contenu de votre application avec les traductions chargées
  };

  const isMobile = useMediaQuery({ maxWidth: 768 }); 

  return (
    <section className='nav'>
      <nav className={`navi ${isMobile ? 'mobile' : ''}`}>
        <div className="navbar-container">
          <div>
            <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
            <Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link>

            <span onClick={() => {toggleFlag();toggleTheme();}} className='toggle' style={{ width: '24px', height: '20px', cursor: 'pointer', background: 'none' }}>
              {isDarkMode ? ( <span><img src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f1ec_1f1e7/512.png=s30" alt="Drapeau de l'Angleterre'" style={{ width: '24px', height: '20px' }} /> En</span> ):
              (<span ><img src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f1eb_1f1f7/512.png=s30" alt="Drapeau de la France" style={{ width: '24px', height: '20px'}} /> Fr</span>)}
            </span>

            <a onClick={() => {toggle();toggleTheme();}} className='toggle btn px-3'>
              {!isDarkMode ? (<FontAwesomeIcon icon={faSun} className='sun'/> ) : ( <FontAwesomeIcon icon={faMoon} className='moon'/> )} Theme
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

