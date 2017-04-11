const doSearchReducer = (state={results:{recipes:[]}}, action) => {
  console.log(action);
  switch (action.type) {
    case 'DO_SEARCH_PENDING':
      return {
        results: {
          recipes: [],
          isPending: true
        }
      };
    case 'DO_SEARCH_FULFILLED':
      return {
        results: {
          recipes: action.payload,
          isPending: false
        }
      };
    case 'DO_SEARCH_REJECTED':
      return {
        isRejected: true,
        error: action.payload
      };
    default:
      return state;
  }
}

export default doSearchReducer;
