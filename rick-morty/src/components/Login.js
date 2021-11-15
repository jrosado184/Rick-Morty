import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
       <form className='login-form'>
           <Link className='admin' to='/characters'>Admin</Link>
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
            <p className='or'>OR</p>
            <input className='register-btn'
            type='submit'
            value='Register' />
       </form>
       </div>
    )
}

export default Login
