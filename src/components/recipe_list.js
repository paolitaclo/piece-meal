//eslint-disable-next-line
/* eslint-disable */
import React from 'react';
// import App from '../App';
//inputs: array of recipes
//outputs: selected recipe
const RecipeList = ({ recipes, onClickRecipe}) => (
  <ul>
    {recipes.map((recipe, id) => <li onClick= {()=>{onClickRecipe(recipe)}} key={id}>{recipe.name}</li>)}
  </ul>
)

export default RecipeList;
