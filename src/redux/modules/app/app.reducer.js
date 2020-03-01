import * as appTypes from "./app.type";

const initialState = {
  movies: [],
  series: [],

  isLoading: false,
  error: null
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case appTypes.GET_MOVIES_PENDING:
      return { ...state, isLoading: true, error: null };

    case appTypes.GET_MOVIES_FULFILLED:
      const movies = action.payload.entries.filter(item => {
        return item.programType === "movie";
      });

      const series = action.payload.entries.filter(item => {
        return item.programType === "series";
      });

      return {
        ...state,
        isLoading: false,
        movies,
        series
      };

    case appTypes.GET_MOVIES_REJECTED:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default reducer;
