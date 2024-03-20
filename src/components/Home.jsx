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
            <Image alt="s" className="round-avatar"/>
            <h5 className='my-3 m-1'>Jedeon Sap <a className='btn contactMe' >Contact Me </a></h5>
            <Card.Subtitle className="my-4 py-2 competence">Développeur Full Stack</Card.Subtitle>
            <h6 className=" ">Ville-Marie, Montréal, QC</h6>
            <h6 className=" ">jedeon@example.com</h6>
            <h3 >Langues</h3>
            <h6>Français ( Langue Maternel )</h6>
            <h6>Anglais ( Deuxieme Langue )</h6>
            <h3 >Liens utiles</h3>
            <a href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183">
              <Image alt='linkedin' className='m-3 linkedinIcon icon'/>
            </a>
            <a href="https://github.com/Sdev237" className='' >
              <Image alt='github' className='m-3 githubIcon icon'/>
            </a>
          </Col>
          
          <Col md={8}>
            <h6 className='mx-2'>Apropos de moi</h6>
            <Col  className='bio px-3 py-4'>
              <h1 style={{opacity: '1'}}>BIENVENUE SUR MON PORTFOLIO</h1>
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
