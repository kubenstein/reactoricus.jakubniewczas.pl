import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';

import './styles.css';

const Login = ({ onLogin }) => {
  const formRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const { email } = serialize(formRef.current, { hash: true });
    return email && onLogin(email);
  };

  return (
    <div styleName="login-wrapper">
      <div styleName="login-box">
        <form
          ref={formRef}
          onSubmit={submit}
        >
          <span styleName="welcomeText">
            <span>Lead the Reactoricus!</span>
            Lead the robot through its robotic jorney!
          </span>
          <h1 styleName="title">Login / SignUp:</h1>
          <input name="email" type="email" placeholder="Email..." />
          <input className="btn" type="submit" value="log in" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
