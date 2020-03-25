import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
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

 //Passing array returned by function in this array we initialized
 const [recipes, SetRecipes] = useState([]);
 const [search, setSearch] = useState("");


 
 
 useEffect(()=> {
  getRecipes();
 }, []);

 //used to fetch our data
 const getRecipes = async () => {
  const resp = await fetch(
    `https://api.edamam.com/search?q=peas&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await resp.json();
  SetRecipes(data.hits);
  console.log(data.hits);
}
 
  return (
   
    
    <div className="App">
      {/** HEADER AREA */}
      <h1>Grooli</h1>
      <img src="./logomain.png"></img>

      {/** INPUT AREA */}
      <form className="search-form">
        <input type="text" className="search-bar" value={search}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
