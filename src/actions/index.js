import axios from 'axios';

const config = {
  headers: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTQ5MTg3NjQyNCwiZXhwIjoxNDkyNDgxMjI0fQ.nalShWjhqMDQN0om6DArjPeVkU5R4-t0RuQ7HeEqR9E'}
};

function getRecipes(value) {
  return axios.get(`https://piecemeal-api.herokuapp.com/api/v1/search/recipes?text=${value}`, config)
  .then(response => response.data.recipes);
}
function postProfile(props) {
  return axios.post('https://piecemeal-api.herokuapp.com/api/v1/clients', props)
  .then((response) => {
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
  return {
    type: 'SHOW_PROFILE_NAME',
    profileName: 'Paola'
  }
}

export const doSearch = (value) => {
  return {
    type: 'DO_SEARCH',
    payload: getRecipes(value)
  }
}

export const createProfileForm = (props) => {
  return {
    type: 'CREATE_PROFILE',
    payload: postProfile(props)
  }
}
