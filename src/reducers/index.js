import { combineReducers } from 'redux';
import queryReducer from './reducer_query';
import recipeReducer from './reducer_recipe_list';
import activeRecipe from './reducer_recipe_active';
import showProfileReducer from './reducer_show_profile';
import doSearchReducer from './reducer_do_search';

const rootReducer = combineReducers({
  query: queryReducer,
  recipes: recipeReducer,
  activeRecipe: activeRecipe,
  profile: showProfileReducer,
  search: doSearchReducer
})

export default rootReducer;
