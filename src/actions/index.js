import axios from 'axios';
// import { config } from 'dotenv';
// const dotenv = config()
// const dotenv = require('dot-env').config();
// const publicKey = process.env.API_KEY;
const config = {
  headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5MTg3NjQyNCwiZXhwIjoxNDkyNDgxMjI0fQ.nalShWjhqMDQN0om6DArjPeVkU5R4-t0RuQ7HeEqR9E'}
};

export const setQuery = (text) => {
  // console.log('this is action creating setQuery to', text);
  return {
    type: 'SET_QUERY',
    text
  }
}

export const selectRecipe = (recipe) => {
  console.log('selectRecipe action triggered');
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}
//for later need to update the profileName to call
//and show the form for log in
export const showProfile = () => {
  console.log('triggering showProfile');
  return {
    type: 'SHOW_PROFILE_NAME',
    profileName: 'Paola'
  }
}

export const doSearch = (value) => {
  console.log('this is what we want to search: ', value);
  return {
    type: 'DO_SEARCH',
    payload: getRecipes(value)
  }
}

function getRecipes(value) {
  return axios.get(`http://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=${value}`, config);
}
//
// console.log(getRecipes('a'));
//
// //
