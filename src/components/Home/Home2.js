import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import laptopImg from "../../Assets/kouki.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               PERMETTEZ-MOI DE ME PRÉSENTER <span className="purple"></span> 
            </h1>
            <p className="home-about-body">
            Je suis tombé amoureuse de la programmation et j'ai au moins appris quelque chose. <br /><br />

                  Je maîtrise des langages classiques tels que le Php, Javascript et Python.<br /><br />

Mon domaine d'intérêt est la création de nouvelles technologies et de produits Web, ainsi que les domaines liés à l'apprentissage profond (Deep Learning) et au traitement du langage naturel (Natural Language Processing).<br /><br />

Chaque fois que possible, j'applique également ma passion pour le développement de produits avec Node.js et les bibliothèques et frameworks JavaScript modernes tels que React.js et Next.js.
            
              
              <i>
                <b className="purple">  </b>
              </i>
              
              <br />
            
              <i>
                <b className="purple"> </b>
                
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
               <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
               
                </b>
              </i>
          
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluid" /> 
             
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouvez moi sur </h1>
            <p>
               <span className="purple">connecntez vous avec moi</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kawtar-elazizi-42485822b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/kawtar__elazizi?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
