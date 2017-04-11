const showProfileReducer = (state = 'Log In', action) => {
  switch (action.type) {
    case 'SHOW_PROFILE_NAME':
      return action.profileName;
    default:
      return state
  }
}

export default showProfileReducer;
