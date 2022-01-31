import React, { useState } from "react";
import Form from "./components/form1";

const Signin = () => {
  return (
    <div className="register-page">
      <div>
        <h1 className="title">
          WELCOME
          <br></br> <span>Login Here</span>
        </h1>
        <div class="title_underline"></div>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <br></br>
        <div class="title_underline"></div>
        <h1 className="title">
          <span>
            Enter Your Phone Number <br></br>
            <span className="title2-s">
              Hint : Use same number which you have used in your Register
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Signin;
