import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const registerBtn = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div>
      <form className='login-form'>
        <Link className='admin' to='/characters'>
          Admin
        </Link>
        <input className='username' type='text' placeholder='username' />
        <br />
        <input className='password' type='password' placeholder='password' />
        <br />
        <Link className='forgot' to='/forogtten'>
          Forgot Password?
        </Link>
        <br />
        <input className='submit-btn' type='submit' value='Login' />
        <p className='or'>OR</p>
        <input
          className='register-btn'
          type='submit'
          value='Register'
          onClick={registerBtn}
        />
      </form>
    </div>
  );
};

export default Login;
