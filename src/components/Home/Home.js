import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
return (
<section>
<Container fluid className="home-section" id="home">
<Particle />
<Container className="home-content">
<Row>
<Col md={7} className="home-header">


          <div style={{ padding: 0, textAlign: "center" }}>
            <Type />
          </div>
        </Col>

        <Col md={5} style={{ paddingBottom: 10 }}>
          
        </Col>
      </Row>
    </Container>
  </Container>
  <Home2 />
</section>
);
}

export default Home;