import React from 'react';
import { useMediaQuery } from 'react-responsive';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
  return (
    <div className="home" >
      <Container>
        <Row className="mt-5 mb-4">
          <Col md={3} className='profil'>

            <aside>
              <Image alt="s" className="round-avatar"/>

              <h5 className='my-3 m-1'>Jedeon Sap <a className='btn contactMe' >Contact Me </a></h5>
              <Card.Subtitle className="my-4 py-2 competence">Développeur Full Stack</Card.Subtitle>

              <h6 className=" ">Ville-Marie, Montréal, QC</h6>
              <h6 className=" mb-2">jedeon@example.com</h6>
            </aside>

            <aside className='my-4'>
              <h5 className='my-3'>Liens utiles</h5>
              <a href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183">
                <Image alt='linkedin' className=' linkedinIcon icon'/>
                
              </a>
              <a href="https://github.com/Sdev237" className='' >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currenColor"
                width="60"
                height="60"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zM8.98 18.96C8.42 19.16 7.88 18.8 7.69 18.25 7.41 17.44 6.82 16.97 6 16.97c-1.15 0-2.09.98-2.09 2.19 0 1.08.66 1.99 1.59 2.16.12.03.21-.1.18-.22-.15-.58-.24-1.19-.24-1.81 0-2.3 1.65-4.2 3.82-4.66.07-.01.11-.01.17-.01s.1 0 .16.01c2.18.46 3.82 2.36 3.82 4.66 0 .62-.09 1.24-.24 1.82-.03.11.06.24.18.22.93-.17 1.59-1.08 1.59-2.16 0-.61-.25-1.18-.65-1.61.03-.1.05-.21.05-.32 0-.23-.08-.45-.23-.64-.07-.08-.16-.14-.28-.14-.09 0-.16.03-.22.09-.47.46-1.1.73-1.79.73s-1.32-.27-1.79-.73c-.06-.05-.13-.08-.22-.09-.12 0-.21.06-.28.14-.15.19-.23.41-.23.64 0 .11.02.22.05.32-.4.43-.65 1-65 1.61zm1.77-5.27c-.36-.08-.73-.08-1.09 0-.56.12-.97.6-.97 1.17 0 .59.38 1.09.9 1.25.08.03.14-.06.12-.14-.12-.49-.2-1-.2-1.53 0-.4.08-.79.22-1.16.04-.1-.03-.22-.15-.24z"
                ></path>
              </svg>

              </a>
            </aside>
      
            <hr/>
            <aside>
              <h4 className='mb-3'>Langues</h4>
              <h6>Français ( Langue Maternel )</h6>
              <h6>Anglais ( Deuxieme Langue )</h6>
            </aside>
          </Col>
          
          <Col md={8} className='about'>
            <h6 className='mx-2'>Apropos de moi</h6>

            <Col  className='bio px-3 py-4'>
              
              <h1 className='mb-4' style={{opacity: '1'}}>BIENVENUE SUR MON PORTFOLIO</h1>

              <p className='pb-5' style={{opacity: '1'}}>
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              </p>
              <h3>STACK</h3>
              <hr />
              <Row className="mt-5">
                {['ReactJS', 'Next.js', 'TailwindCSS', 'Bootstrap', 'Laravel', 'Vitest'].map((competence) => (
                  <Col md={2} key={competence}>
                    {/* <img src={`chemin/vers/logo-${competence}.svg`} alt={competence} /> */}
                  </Col>
                ))}
                <Col>
                <Image alt='github' className='m-3 bi bi-github githubIcon icon'/>
                </Col>
              </Row>
            </Col>
          </Col>
          
        </Row>
       
        <br/>
        <p className='pb-5'>
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
            </p>
            <p className='pb-5'>
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
            </p>
            <p className='pb-5'>
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
            </p>
            <p className='pb-5'>
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
            </p>
            <p className='pb-5'>
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
            </p>
      </Container>
      
    </div>
  );
};

export default Home;
