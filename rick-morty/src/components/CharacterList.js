import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions/characterActions";
import Characters from "./Characters";
import { logo } from "../assets/Assets";
import axios from "axios";
import { fetchNew } from "../redux/actions/characterActions";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  const { dispatch, characters, loading } = props;
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${input}`)
      .then((res) => {
        dispatch(fetchNew(res.data.results));
      });
  };

  return (
    <>
      <div className='header'>
        <img className='logo' src={logo} alt='logo' />
        <form onSubmit={handleSearch} className='search'>
          <input
            onChange={handleChange}
            value={input}
            className='search-box'
            type='text'
            name='search'
            placeholder='Characters Name...'
          />
          <input
            onClick={handleSearch}
            className='search-button'
            type='submit'
            value='Search'
          />
        </form>
      </div>
      <nav>
        <Link className='logout' to='/login'>
          Logout
        </Link>
      </nav>
      <div className='characters'>
        {characters.map((character) => (
          <Characters character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    characters: state.characters,
  };
};

export default connect(mapStateToProps)(CharacterList);
