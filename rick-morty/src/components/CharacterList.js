import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../redux/actions/characterReducer'
import Characters from './Characters'


const CharacterList = (props) => {
    const { dispatch, characters } = props

    useEffect(() => {
        dispatch(getCharacters())
    }, [])



    return (
        <div className='characters'>
            {characters.map(character =>
             (<Characters character={character} key={character.id} />))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}


export default connect(mapStateToProps)(CharacterList)
