
import './App.css';
//import Component from './Components/Component';
//import Login from './Components/LoginComponent/Login';
//import Login from './Components/LoginComponent/Login';
import { Route, Routes } from 'react-router-dom';
//import Recipe from './Components/RecipeInfo';
import Meal from './Components/Meal';
import "./Components/style.css";
import React from 'react';
import RecipeInfo from './Components/RecipeInfo';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Meal />}/>
          <Route path='/:MealId' element={<RecipeInfo/>}/>

          
        
      </Routes>


      {/* <Login/> */}
      {/* <Component/> */}
    </>
  );
}

export default App;
