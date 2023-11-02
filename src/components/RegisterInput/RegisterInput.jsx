import React, { useState } from "react";
import PropTypes from 'prop-types'

import './RegisterInput.css'

function RegisterInput({ register }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (evt) => {
        setName(evt.target.value);
    }

    const onEmailChange = (evt) => {
        setEmail(evt.target.value)
    }
    
    const onPasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const onSubmitHandler = (evt) => {
        evt.preventDefault();

        register({
            name: name,
            email: email,
            password: password,
        })
    }

    return (
        <form onSubmit={onSubmitHandler} className="register-input">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={onNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
          />
          <button>Register</button>
        </form>
      );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
