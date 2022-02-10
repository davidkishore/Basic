import React from "react";
import { Form, Row, Button } from "react-bootstrap";

const Process = (props) => {
  return (
    <div>
      <Form>
        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextEmail"
        >
          <Row className="form2grouprow">
            <Form.Label>User Name</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control
              readOnly
              type="text"
              defaultValue="email@example.com"
            />
          </Row>
        </Form.Group>

        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextEmail"
        >
          <Row className="form2grouprow">
            <Form.Label>Mobile</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control readOnly type="number" defaultValue="7868687878" />
          </Row>
        </Form.Group>

        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextPassword"
        >
          <Row className="form2grouprow">
            <Form.Label>Saving Amount</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control type="number" placeholder="Amount" />
          </Row>
        </Form.Group>

        <Form.Group
          className="form2group"
          as={Row}
          controlId="formPlaintextPassword"
        >
          <Row className="form2grouprow">
            <Form.Label>Purpose</Form.Label>
          </Row>
          <Row className="form2grouprow">
            <Form.Control
              as="textarea"
              placeholder="Ex : This amount saving for children or This amount spending for wife"
              style={{ height: "100px" }}
            />
          </Row>
        </Form.Group>

        <Form.Group className="form2group" controlId="formBasicSelect">
          <Row className="form2grouprow">
            <Form.Label>Select Norm Type</Form.Label>
          </Row>
          <Form.Control as="select">
            <option value="DICTUM">Dictamen</option>
            <option value="CONSTANCY">Constancia</option>
            <option value="COMPLEMENT">Complemento</option>
          </Form.Control>
        </Form.Group>
        <Row style={{ display: "block", textAlign: "center" }}>
          {" "}
          <Button
            variant="primary"
            type="submit"
            style={{ background: "#231962" }}
          >
            Submit
          </Button>
        </Row>
      </Form>
    </div>
  );
};
export default Process;
