import React from 'react';
import { useMediaQuery } from 'react-responsive';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Home.scss';

const Home = () => {

  return (
    <div className="home" >
      <Container>
        <Row className="mt-5">
          <Col md={3} className=' profil' style={{}}>

            <aside>
              <Image alt="s" className="round-avatar"/>

              <h5 className='my-3 m-1'>Jedeon Sap <a className='btn contactMe' >Contact Me </a></h5>
              <Card.Subtitle className="my-4 py-2 competence">Full Stack Developer</Card.Subtitle>

              <h6 className=" ">Ville-Marie, Montréal, QC</h6>
              <h6 className=" mb-2">jedeon@example.com</h6>
            </aside>

            <aside className='my-4'>
              <h5 className='my-3'>Liens utiles</h5>
              <a href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183">
                <Image alt='linkedin' className=' linkedinIcon icon'/>
                
              </a>
              <a href="https://github.com/Sdev237" className='' >
                <Image alt='github' className='m-3 bi bi-github githubIcon icon'/>

              </a>
            </aside>
      
            <hr/>
            <aside>
              <h4 className='mb-3'>Langues</h4>
              <h6>French ( First language)</h6>
              <h6>English ( Second language )</h6>
            </aside>
          </Col>
          
          <Col md={8} className='about'>
            <h6 className='mx-2'>About me</h6>

            <Col  className='bio px-3 py-4'>
              
              <h1 className='mb-4' style={{opacity: '1'}}>WELCOME TO MY PORTFOLIO</h1>

              <p className='pb-' style={{opacity: '1'}}>
              Passionate about software development and new technologies, I am fortunate to have been able to develop my skills within numerous companies such as Orange Cameroun, HUGO Company LTD, CENADI and MODRY Sarl.
              </p>
              <h3>STACK</h3>
              <hr />
              <Row className="mt-3">
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
            <aside className='p-3' style={{border: '1px solid #333', borderRadius: '0.4rem'}}>
            I am a developer passionate about web technologies. I have worked on various projects including React applications and Node.js APIs.
                I am a developer passionate about web technologies. I have worked on various projects including React applications and Node.js APIs.
                I am a developer passionate about web technologies. I have worked on various projects including React applications and Node.js APIs.
            </aside>
          </Col> 
        </Row>
        <Row>
          <Col md={2}>
            <aside className='m-1' style={{border: '1px solid #333', borderRadius: '0.4rem', display: 'none'}}>
              bonjour
            </aside>
          </Col>
          <Col md={9}>
            <aside className=' p-4' style={{border: '1px solid #333', borderRadius: '0.4rem'}}>
              <p className='pb-2'>
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              </p>
              <p className='pb-2'>
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              </p>
              <p className='pb-2'>
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              </p>
              <p className='pb-2'>
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
                Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
              </p>
            </aside>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default Home;
