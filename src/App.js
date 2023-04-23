
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



import React from 'react'
import Home from './components/home'


export default function App() {


 



  return(
    <>
    <Router>

      <Routes>
      <Route exact path='/' element={<Home />} />

      </Routes>

    </Router>
    </>

  )
}





















