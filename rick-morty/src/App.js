import React from "react";
import CharacterList from "./components/CharacterList";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/characters' element={<CharacterList />}></Route>
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(App);
