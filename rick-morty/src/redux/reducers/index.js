import {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_NEW,
} from "../actions/characterActions";

const initialState = {
  loading: false,
  characters: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING: {
      return {
        loading: true,
        characters: [],
      };
    }
    case FETCH_SUCCESS: {
      return {
        characters: action.payload,
        loading: false,
      };
    }
    case FETCH_NEW: {
      return {
        characters: action.payload,
      };
    }

    default:
      return state;
  }
};
