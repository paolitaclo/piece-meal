import { combineReducers } from 'redux';
import queryReducer from './reducer_query';
import recipeReducer from './reducer_recipe_list';
import showProfileReducer from './reducer_show_profile';
import doSearchReducer from './reducer_do_search';
import createProfileFormReducer from './reducer_create_profile_form';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  query: queryReducer,
  recipes: recipeReducer,
  profile: showProfileReducer,
  search: doSearchReducer,
  form: formReducer,
  createProfile: createProfileFormReducer
})

export default rootReducer;
