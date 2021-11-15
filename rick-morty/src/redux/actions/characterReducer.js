import axios from "axios"

export const FETCH_SUCCESS = 'FETCH_SUCCESS'

export const fetchSucces = (characters) => {
    return ({ type:FETCH_SUCCESS, payload:characters })
}


export const getCharacters = () => {
    return (dispatch) => {
        dispatch(fetchSucces)
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                dispatch(fetchSucces(res.data.results))
            });
    };
}







