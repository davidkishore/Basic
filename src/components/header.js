import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo4.png";

const Header = () => {
  const myComponentStyle = {
    color: "#fff",
  };

  return (
    <div>
      <Container className="header">
        <Container style={myComponentStyle}>
          <Row className="justify-content-md-center">
            <Col sm="4" xs="4">
              <img alt="Logo" style={{ width: "20%" }} src={Logo}></img>
            </Col>
            <Col sm="7" xs="7">
              <Row style={{ marginTop: "4%" }}>
                <h6>Hi, Welcome to Money Management Application</h6>
              </Row>
            </Col>
            <Col sm="1" xs="1">
              <Row style={{ marginTop: "30%" }}>
                <button className="button1">
                  <b>LOGOUT</b>
                </button>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
