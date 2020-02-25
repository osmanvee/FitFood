import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';
import logomain from './logomain.png'

const App = () => {
 //Declaring constants to use later
 const APP_ID ='70bf1e0a'; //Application ID given in Edamam
 const APP_KEY = '3d71591bab1d110a55da48bbaad3a5f0';

 //Given by Edamam
 const exampleREQ = 
 `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
 
 
 
 
  return (
   
    
    <div className="App">
      {/** HEADER AREA */}
      <h1>Grooli</h1>
      <img src="./logomain.png"></img>

      {/** INPUT AREA */}
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
