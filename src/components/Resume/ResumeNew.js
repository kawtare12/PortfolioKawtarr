import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Elazizi-kawtar.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "http://localhost:3000/static/media/Elazizi-kawtar.86dae522c0d29830ba4a.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="education">
            <h4>Mon Éducation</h4>
            <p>
            CYCLE D'INGÉNIEUR-GÉNIE INFORMATIQUE
ET TECHNOLOGIE EMERGENTES<br />
            ENSA D'El Jadida<br />
            2022-2023<br />



            CYCLE PRÉPARATOIRE<br />

            ENSA D'El Jadida<br />
            2020-2022<br />


            BACCALAURÉAT INTÉRNATIONAL EN
            SCIENCES PHYSIQUE<br />
             Lycée Ghafiri<br />
             2019-2020
            </p>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Télécharger CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
