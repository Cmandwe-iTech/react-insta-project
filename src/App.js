// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './LandingPage/LandingPage'
// import Application from './Images/abc';
import Postview from './postview/Postview';
import UsersForm from './formPage/form';
// import UserForm from './formPage/newF';

function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/postview' element={<Postview/>}/>
    {/* <Route path='/form'element={<UsersForm/>}/> */}
    <Route path='/form' element={<UsersForm/>}/>
    
  </Routes>

  {/* <Application/> */}
   </>
  
  );
}

export default App;
