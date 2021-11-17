import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const submitRegister = () => {
    navigate("/login");
  };

  return (
    <form className='register-form'>
      <h1 className='signup-h1'>Sign Up</h1>
      <input className='email' type='text' placeholder='Email' />
      <br />
      <input className='register-username' type='text' placeholder='Username' />
      <br />
      <input
        className='register-password'
        type='passsword'
        placeholder='Password'
      />
      <br />
      <input
        className='signup-btn'
        type='submit'
        value='Sign Up'
        onClick={submitRegister}
      />
      <br />
    </form>
  );
};

export default Register;
