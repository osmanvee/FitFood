import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import './index.js';
import Burger from "./burger1.png";
import s2 from "./b2.png";
import s3 from "./b3.png";


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
 const [query, setQuery] = useState("");

 
 
 useEffect(()=> {
  getRecipes();
 }, [query]);

 //used to fetch our data
 const getRecipes = async () => {
  const resp = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await resp.json();
  SetRecipes(data.hits);
  console.log(data.hits);
}
 
//To change the search, takes in an event e
  const updateSearch = e => {
    setSearch(e.target.value);
    
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
   
    
    <div className="App">
      {/** HEADER AREA */}
      <div className="Header">
        <div className="logo">
          <h1><b>fit</b>food</h1>
        </div>
        <div className="github">
          <p>find us:</p>
          <a href="http://www.github.com/osmanvee">
        <div className="git" ><i class="fab fa-github"></i></div>
        </a>
        <a href="http://www.instagram.com/osmanmedia">
            <div className="insta"><i class="fab fa-instagram"></i></div>
            </a>
            <a href="http://www.facebook.com/osman.varsee">
            <div className="fb"><i class="fab fa-facebook-f"></i></div>
            </a>
            
        </div>
      </div>
      
      {/** BANNER AREA */}
      <div className="row">
        <div className="column">
          <img src={Burger} />
          <div className="text">
          Pick one main ingredient 
        </div>
        </div>
        
        <div className="column">
        <img src={s2} />
        <div className="text">
          Input the ingredient, calories and other parameters.
        </div>
        </div>
        <div className="column">
        <img src={s3} />
        <div className="text">
          We will provide the best recipes for you!
        </div>
        </div>
      </div>

      
     
      {/** INPUT AREA */}
      <form onSubmit={getSearch} className="search-form">
        
        <input type="text" className="search-bar" placeholder="Search ingredient e.g 'Chicken'" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"><i class="fas fa-search"></i></button>

      </form>

      

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}

      <div class="footer">
        <p>
          Powered by OsmanVee <i class="fab fa-osi"></i>
        </p>
      </div>
    </div>
  );
};

export default App;
