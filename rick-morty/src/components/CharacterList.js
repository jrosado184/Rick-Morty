import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../redux/actions/characterReducer'
import Characters from './Characters'
import { logo } from '../assets/Assets'


const CharacterList = (props) => {
    const { dispatch, characters } = props

    useEffect(() => {
        dispatch(getCharacters())
    }, [])



    return (<>
        <div className='header'>
        <img className='logo' src={logo} alt='logo'/>
        <form className='search'>
            <input className='search-box'
             type='text'
             name='search'
             />
             <input className='search-button'
             type='submit'
             value='Search' />
        </form>
        </div>
        <div className='characters'>
            {characters.map(character =>
             (<Characters character={character} key={character.id} />))}
        </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}


export default connect(mapStateToProps)(CharacterList)
