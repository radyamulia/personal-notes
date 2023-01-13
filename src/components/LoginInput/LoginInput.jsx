import React, { useState } from "react";
import PropTypes from "prop-types";

import './LoginInput.css'

function LoginInput({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChangeHandler = (evt) => {
    setEmail(() => {
      return evt.target.value;
    });
  };

  const onPasswordChangeHandler = (evt) => {
    setPassword(() => {
      return evt.target.value;
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    login({
      email: email,
      password: password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
