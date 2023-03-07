import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './component/Nav';
import Menu from './component/Menu';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import "./global.css"
const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App