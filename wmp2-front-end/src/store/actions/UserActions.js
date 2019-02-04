import axios from "axios";

export const GETTING_SANITY_CHECK = "GETTING_SANITY_CHECK";
export const GETTING_SANITY_CHECK_COMPLETE = "GETTING_SANITY_CHECK_COMPLETE";
export const GETTING_SANITY_CHECK_ERROR = "GETTING_SANITY_CHECK_ERROR";

// const backendURL = process.env.REACT_APP_BACKEND_URL;

const backendURL = `https://wmp2-back-end.herokuapp.com`;

export const getSanityCheck = () => dispatch => {
  dispatch({ type: GETTING_SANITY_CHECK });

  axios
    .get(`${backendURL}/api/usersunp/4/plants`)
    .then(res =>
      dispatch({
        type: GETTING_SANITY_CHECK_COMPLETE,
        payload: res.data.message
      })
    )
    .catch(err =>
      dispatch({
        type: GETTING_SANITY_CHECK_ERROR,
        payload: err
      })
    );
};
