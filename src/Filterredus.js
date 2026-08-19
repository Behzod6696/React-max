const initialState = {
  genre: "All",
  minRating: 0,
  sort: "default",
  search: ""
};

function filterReducer(state, action) {
  switch (action.type) {
    case "SET_GENRE":
      return {
        ...state,
        genre: action.payload
      };

    case "SET_MIN_RATING":
      return {
        ...state,
        minRating: Number(action.payload)
      };

    case "SET_SORT":
      return {
        ...state,
        sort: action.payload
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload
      };

    case "RESET_FILTERS":
      return initialState;

    default:
      return state;
  }
}

export default filterReducer;
export { initialState };