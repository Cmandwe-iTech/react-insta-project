
import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import LandingPage from './LandingPage/LandingPage'

import Postview from './postview/Postview';
import UsersForm from './formPage/form';


function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/postview' element={<Postview/>}/>
    <Route path='/form' element={<UsersForm/>}/>  
  </Routes>
   </>
  
  );
}

export default App;
