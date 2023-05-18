import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            
            <br />Je suis Kawtar El Azizi, une étudiante passionnée par l'informatique et les nouvelles technologies. Je poursuis mes études à l'ENSA El Jadida, où j'acquiers des connaissances approfondies dans le domaine de l'ingénierie logicielle et du développement web. J'ai une passion pour la création d'interfaces utilisateur attrayantes et fonctionnelles, ainsi que pour la résolution de problèmes complexes. Mon objectif est de combiner ma créativité et mes compétences techniques pour développer des solutions innovantes et apporter une valeur ajoutée à travers mes projets. Je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences et collaborer sur des projets passionnants.

En dehors de mes études et de mon travail en informatique, j'aime m'adonner à d'autres activités pour me détendre et élargir mes horizons. L'une de mes passions est de jouer à des jeux vidéo, où je peux explorer de nouveaux mondes virtuels et relever des défis stimulants. J'aime également partager mes connaissances et mes expériences en écrivant des blogs techniques, où je peux aider les autres à mieux comprendre le monde de la technologie et à découvrir de nouvelles astuces et tendances.
            <br />
            <br />
Autres activités :          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engagement bénévole 
            </li>
            <li className="about-activity">
              <ImPointRight /> Participations à  des hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Participation à des clubs
            </li>
          </ul>

          
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
