import React from 'react'
import {logo} from '../assets/Assets'

const Header = () => {
    return (
        <div className='header'>
       <img className='logo' src={logo} alt='logo'/>
       <form className='search'>
           <input className='search-box'
            type='text'
            />
            <input className='search-button'
            type='submit'
            value='Search' />
       </form>
       </div>
    )
}

export default Header
