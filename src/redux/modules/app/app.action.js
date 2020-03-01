import * as appTypes from "./app.type";

export function getMovies() {
  return async function(dispatch) {
    dispatch({ type: appTypes.GET_MOVIES_PENDING });

    try {
      const response = await fetch(
        "https://gist.github.com/erkanerturk/d7f4f4f0ed205c2aa1b26a7cc6e8461d/raw"
      );
      const data = await response.json();

      dispatch({
        type: appTypes.GET_MOVIES_FULFILLED,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: appTypes.GET_MOVIES_REJECTED,
        payload: error
      });
    }
  };
}

// export const getMovies = () => async dispatch => {
//   dispatch({ type: appTypes.GET_MOVIES_PENDING });

//   try {
//     const response = await fetch("");
//     const data = await response.json();

//     dispatch({
//       type: appTypes.GET_MOVIES_FULFILLED,
//       payload: data
//     });
//   } catch (error) {
//     dispatch({
//       type: appTypes.GET_MOVIES_REJECTED,
//       payload: error
//     });
//   }
// };
