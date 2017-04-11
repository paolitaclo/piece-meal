import { combineReducers } from 'redux';
import queryReducer from './reducer_query';
import recipeReducer from './reducer_recipe_list';
import activeRecipe from './reducer_recipe_active';
import showProfileReducer from './reducer_show_profile';

const rootReducer = combineReducers({
  query: queryReducer,
  recipes: recipeReducer,
  activeRecipe: activeRecipe,
  profile: showProfileReducer
})

export default rootReducer;
