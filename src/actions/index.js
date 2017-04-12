import axios from 'axios';

const config = {
  headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5MTg3NjQyNCwiZXhwIjoxNDkyNDgxMjI0fQ.nalShWjhqMDQN0om6DArjPeVkU5R4-t0RuQ7HeEqR9E'}
};

function getRecipes(value) {
  return axios.get(`http://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=${value}`, config)
  .then(response => response.data.recipes);
}
function postProfile(props) {
  return axios.post('http://piecemeal-api.herokuapp.com/api/v1/clients', props)
  .then((response) => {
    console.log('user info: ', response.data);
    return response.data;
  });
}

export const setQuery = (text) => {
  return {
    type: 'SET_QUERY',
    text
  }
}

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

export const createProfileForm = (props) => {
  console.log('info for profile: ', props);
  return {
    type: 'CREATE_PROFILE',
    payload: postProfile(props)
  }
}
