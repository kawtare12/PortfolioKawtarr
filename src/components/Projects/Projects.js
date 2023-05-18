import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/python.jpg";
import emotion from "../../Assets/Projects/hoho.jpg";
import editor from "../../Assets/Projects/pharmaice.jpeg";
import chatify from "../../Assets/Projects/sidi bennour.jpeg";
import suicide from "../../Assets/Projects/hhh.jpg";
import bitsOfCode from "../../Assets/Projects/laravel.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Projets Et Certificats <strong className="purple">Récent </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets et Certificats sur lesquels j'ai récemment travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Site Sidi Bennour WordPress"
              description="Réalisé récemment, ce projet consistait à créer un site WordPress pour la faculté Polydisciplinaire de Sidi Bennour. En utilisant WordPress comme plateforme de gestion de contenu. J'ai également intégré des fonctionnalités spécifiques, telles qu'un système de gestion des utilisateurs et des formulaires de contact. En travaillant avec WordPress, j'ai pu offrir une interface conviviale permettant à la faculté de mettre à jour et de gérer facilement le contenu du site. Ce projet a été une opportunité précieuse d'appliquer mes compétences en développement web et en gestion de contenu pour créer un site dynamique et fonctionnel pour la faculté Polydisciplinaire de Sidi Bennour."
              
              demoLink="https://www.google.com/url?q=https://youtu.be/ArksZlAnRIg&sa=D&source=editors&ust=1684369381387061&usg=AOvVaw3OBRf0dh7zvr1eRMdhX1cs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gestion des salles Laravel"
              description="Le projet de gestion des salles Laravel. L'objectif principal était de créer un système de gestion des salles , permettant de gérer les réservations, la disponibilité des salles, les détails des événements et d'autres fonctionnalités liées à la planification des salles.

              L'application offrait une interface où les utilisateurs pouvaient visualiser les différentes salles disponibles, vérifier leur disponibilité en temps réel et effectuer des réservations en fonction de leurs besoins. Les fonctionnalités de gestion incluaient la possibilité de créer et de modifier des événements, de définir des horaires récurrents, d'envoyer des notifications aux utilisateurs concernés et de générer des rapports sur l'utilisation des salles.
              
              ."
              
            
    
              
              demoLink="https://github.com/roaeldhimni/Laravel/tree/master/gestion_salles"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Localisation Des Pharmacies"
              description="Le projet de localisation des pharmacies consiste en la création d'une application ou d'un système permettant aux utilisateurs de trouver facilement les pharmacies les plus proches de leur emplacement. L'application utilise des technologies de géolocalisation pour déterminer la position de l'utilisateur, puis affiche les pharmacies à proximité sur une carte interactive. Les utilisateurs peuvent également obtenir des informations détaillées sur chaque pharmacie, telles que les horaires d'ouverture, les services offerts et les produits disponibles. Ce projet vise à faciliter l'accès aux services de santé en permettant aux utilisateurs de localiser rapidement les pharmacies les plus proches ."
              
              demoLink="https://github.com/roaeldhimni/Laravel/tree/master/gestion_salles"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Certificat de Python"
              description="La certification Python est une validation formelle des compétences en programmation Python. Elle atteste de la maîtrise des concepts fondamentaux du langage Python, de ses fonctionnalités avancées ainsi que des bonnes pratiques de développement. En obtenant cette certification, vous démontrez votre capacité à écrire du code Python de qualité, efficace et robuste. Elle est reconnue dans l'industrie et peut vous aider à vous démarquer en tant que développeur Python qualifié. Que vous soyez débutant cherchant à consolider vos connaissances ou professionnel souhaitant attester de votre expertise, la certification Python est un moyen de valoriser vos compétences et d'ouvrir de nouvelles opportunités dans le domaine."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Certificat de Linux"
              description="Le certificat Linux atteste de ma maîtrise des compétences nécessaires pour travailler efficacement dans un environnement Linux. Ce certificat valide mes connaissances approfondies sur le système d'exploitation Linux, y compris l'installation, la configuration, la gestion des utilisateurs et des groupes, l'administration du système, la sécurité, la gestion des fichiers et des répertoires, ainsi que l'automatisation des tâches avec des scripts shell. Grâce à ce certificat, je démontre ma capacité à résoudre des problèmes et à prendre en charge des tâches liées à Linux, ce qui est essentiel pour travailler dans des environnements informatiques professionnels."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Certificat de SQL"
              description="TLe certificat SQL atteste de ma maîtrise des compétences en matière de manipulation et de gestion de bases de données relationnelles à l'aide du langage SQL. Ce certificat valide ma compréhension approfondie des concepts fondamentaux de SQL, tels que la création de tables, l'insertion, la mise à jour et la suppression de données, les requêtes SELECT pour récupérer des informations spécifiques, les jointures pour combiner des données provenant de plusieurs tables, la gestion des contraintes et des index, ainsi que la création de vues et de procédures stockées. Grâce à ce certificat, je démontre ma capacité à travailler avec des bases de données relationnelles ."
              
                 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
