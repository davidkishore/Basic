import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect } from "react";
import { RegisterUserInfo } from "../redux/actions/Register_actions";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [ecorr, eCorr] = useState("");
  const [pcorr, pCorr] = useState("");
  const [val, sVal] = useState("0");
  const [warn, sWarn] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (val == "1") {
      let data = {
        name: name,
        phone: phone,
      };
      props.RegisterUserInfo(data);
      navigate("/signin");
    } else if (val == "0") {
      sWarn("Please fill all details");
    }
  };

  function phon() {
    if (
      /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
        phone
      )
    ) {
      pCorr("");
      sVal("1");
    } else {
      pCorr("Please Correct your Phone Number");
      sVal("0");
    }
  }
  function empname() {
    if (/^[a-zA-Z]*$/.test(name) && name.length != " ") {
      eCorr("");
      sVal("1");
    } else {
      eCorr("Please Correct your Name");
      sVal("0");
    }
  }
  useEffect(() => {
    onmousemove = () => sWarn("");
  });
  return (
    <div className="reg-div">
      <Form className="reg-form">
        {warn}
        <Form.Group className="mb-3 reg-inbox">
          <Form.Control
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            onBlur={empname}
            onClick={(e) => eCorr("")}
          />
          <div>{ecorr}</div>
        </Form.Group>

        <Form.Group className="mb-3 reg-inbox" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            onChange={(e) => setPhone(e.target.value)}
            onBlur={phon}
            onClick={(e) => pCorr("")}
          />
          <div>{pcorr}</div>
        </Form.Group>

        <Button
          className="reg-btn"
          variant="primary"
          type="submit"
          onClick={submit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.registraton,
});

const mapDispatchToProps = {
  // getUserInfo,
  RegisterUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
