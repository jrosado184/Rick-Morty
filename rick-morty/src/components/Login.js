import React from 'react'
import logo from '../assets/login.png'

const Login = () => {
    return (
        <div>
       <form className='login-form'>
           <input className='username'
           type='text'
           placeholder='username'
            /><br/>
            <input className='password'
           type='password'
           placeholder='password'
            /><br/>
            <input className='submit-btn'
            type='submit'
            value='Login' />
       </form>
       </div>
    )
}

export default Login
