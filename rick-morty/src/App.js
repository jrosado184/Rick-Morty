import React from 'react'
import CharacterList from './components/CharacterList'
import Login from './components/Login'
import './App.css'
import { connect } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'



const App = (props) => {

console.log(props)
const { dispatch } = props


const handleSubmit = (e) => {
e.preventDefault();
}


  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} >
      </Route>
      <Route path='/characters' element={<CharacterList/>} >
      </Route>
    </Routes>
    
   
   
   </>
  )
}

const mapStateToProps = state => {
 
}



export default connect(mapStateToProps)(App)

