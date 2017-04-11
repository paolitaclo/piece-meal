
export const setQuery = (text) => {
  // console.log('this is action creating setQuery to', text);
  return {
    type: 'SET_QUERY',
    text
  }
}

export const selectRecipe = (recipe) => {
  console.log('selectRecipe action triggered')
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}

export const showProfile = () => {
  console.log('triggering showProfile');
  return {
    type: 'SHOW_PROFILE_NAME',
    profileName: 'Paola'
  }
}

// export const doSearch = (query) => {
//   return {
//     type: 'DO_SEARCH',
//     payload: fetchRecipes(query)
//   }
// }
