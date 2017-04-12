const createProfileFormReducer = (state = false, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE_FULFILLED':
    return action.payload;
    default:
    return state
  }
}

export default createProfileFormReducer;
