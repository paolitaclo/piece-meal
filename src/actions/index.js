// actions index file
//
//
// setQuery action creators here
// the input parameter will be the event.target.value
// import axios from 'axios';
//
// function fetchRecipes(query, page = 0) {
//   return axios
//     .get('/recipes.json')
//     .then(response => response.data)
// }

export const setQuery = (text) => {
  // console.log('this is action creating setQuery to', text);
  return {
    type: 'SET_QUERY',
    text
  }
}

export const selectRecipe = (recipe) => {
  console.log('the recipe, ' recipe ', has been selected')
  return {
    type: 'RECIPE_SELCTED',
    payload: recipe
  }
}

// export const doSearch = (query) => {
//   return {
//     type: 'DO_SEARCH',
//     payload: fetchRecipes(query)
//   }
// }
