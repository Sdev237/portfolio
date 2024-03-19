import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
  return (
    <div className="home" >
      <Container>
        <Row className="mt-5">
          <Col md={3} className='border mx-2'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Jedeon Sap</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Développeur Full Stack</Card.Subtitle>
                <Card.Text>
                  Ville-Marie, Montréal, QC
                  <br />
                  jedeon@example.com
                </Card.Text>
              </Card.Body>
            </Card>

            <h5>Langues</h5>
            <ul>
              <li>Français (Langue Maternel)</li>
              <li>Anglais (Deuxieme Langue)</li>
            </ul>
            <h5>Liens utiles</h5>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/jeremie-barriere">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/jeremie-barriere">GitHub</a>
              </li>
            </ul>
          </Col>

          <Col md={8} className='border mx-2'>
            <h1>BIENVENUE SUR MON PORTFOLIO</h1>
            <p>
              Je suis un développeur passionné par les technologies web. J'ai travaillé sur divers projets, notamment des applications React et des API Node.js.
            </p>
            <hr />
            <Row className="mt-5">
              {['ReactJS', 'Node.js', 'Next.js', 'TailwindCSS', 'Storybook'].map((competence) => (
                <Col md={2} key={competence}>
                  <img src={`chemin/vers/logo-${competence}.svg`} alt={competence} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        
      </Container>
      
    </div>
  );
};

export default Home;
