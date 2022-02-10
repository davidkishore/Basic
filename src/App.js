// eslint-disable-next-line
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Form, Container, Row, Col } from "react-bootstrap";
import Form2 from "./components/form2";
import { useEffect } from "react";
// import Expensive from "./components/Expensive";

const App = (props) => {
  useEffect(() => {
    console.log("test");
  }, [props]);

  const Array = [
    { title: "Savings Amount", Money: "0", color: "#287128" },
    { title: "Expensives Amount", Money: "0", color: "#ab0000" },
    { title: "Current Amount", Money: "0", color: "#abab00" },
    { title: "Total Amount", Money: "0", color: "rgb(6 126 144)" },
  ];
  return (
    <div>
      <Header />
      <Container style={{ maxWidth: "100%" }}>
        <Row>
          <Col xs={6} style={{ padding: "2%" }}>
            <Row>
              {Array.map((res) => (
                <Col style={{ backgroundColor: res.color, padding: "5%" }}>
                  <h3
                    style={{
                      fontSize: "24px",
                      color: "#c5c5c5",
                      textAlign: "center",
                    }}
                  >
                    {res.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    {res.Money}
                  </div>
                </Col>
              ))}
            </Row>
            <Row className="appform">
              <Form2 />
            </Row>
          </Col>
          <Col xs={6} style={{ background: "#e6e6e6", padding: "2%" }}>
            <Row style={{ display: "block", textAlign: "center" }}>
              <h2>List of all Expensives</h2>
            </Row>
            <Row>
              <Col style={{ border: "1px solid #231962" }}>Date</Col>
              <Col style={{ border: "1px solid #231962" }}>Savings</Col>
              <Col style={{ border: "1px solid #231962" }}>Expensives</Col>
              <Col style={{ border: "1px solid #231962" }}>Current</Col>
              <Col style={{ border: "1px solid #231962" }}>Total</Col>
              <Col style={{ border: "1px solid #231962" }}>Reason</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row></Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
