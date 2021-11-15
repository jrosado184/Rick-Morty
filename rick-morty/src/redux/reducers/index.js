import { FETCH_SUCCESS } from "../actions/characterReducer"


const initialState = {
    characters: [],
    input: ''
}




export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_SUCCESS): {
            return ({
                ...state,
                characters: action.payload
            })
        }
        default:
            return state
    }

}