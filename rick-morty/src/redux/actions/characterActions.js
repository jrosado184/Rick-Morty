import axios from "axios";
import { useState } from "react";

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSucces = (characters) => {
  return { type: FETCH_SUCCESS, payload: characters };
};

export const FETCH_LOADING = "FETCH_LOADING";

export const fetchLoading = (loading) => {
  return { type: FETCH_LOADING, payload: loading };
};

export const getCharacters = () => {
  return (dispatch) => {
    dispatch(fetchLoading);
    axios.get(`https://rickandmortyapi.com/api/character`).then((res) => {
      dispatch(fetchSucces(res.data.results));
    });
  };
};

export const FETCH_NEW = "FETCH_NEW";

export const fetchNew = (characters) => {
  return { type: FETCH_NEW, payload: characters };
};
