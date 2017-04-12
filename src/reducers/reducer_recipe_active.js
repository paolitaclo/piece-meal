// if state is undefined, return null. ES6 syntax
export default function(state = null, action) {
  switch(action.type){
    case 'RECIPE_SELECTED':
    return action.payload;
  }
  // for when user hasn't clicked anything yet
  return state
}
