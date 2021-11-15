import React from 'react'
import { logo } from '../assets/Assets';

const Characters = (props) => {
    const { character } = props;
    return (
        <div className='characters-container'> 
            <img className='character-img' src={character.image} alt='characters' />
            <h1 className='character-name'>{character.name}</h1>
        </div>
    
    )
}

export default Characters
