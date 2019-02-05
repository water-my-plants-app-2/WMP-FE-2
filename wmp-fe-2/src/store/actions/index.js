import axios from 'axios';

import {
  GETTING_SANITY_CHECK,
  GETTING_SANITY_CHECK_COMPLETE,
  GETTING_SANITY_CHECK_ERROR,
  getSanityCheck
} from "./UserActions.js";

export {
  GETTING_SANITY_CHECK,
  GETTING_SANITY_CHECK_COMPLETE,
  GETTING_SANITY_CHECK_ERROR,
  getSanityCheck
};

export const DELETE_PLANT_START = 'DELETE_PLANT_START';
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';
export const DELETE_PLANT_FAIL = 'DELETE_PLANT_FAIL';

export const deletePlant = plantId => dispatch => {
  dispatch({ type: DELETE_PLANT_START});
  axios
    .delete(`https://wmp2-back-end.herokuapp.com/api/plantsunp/${plantId}`)
    .then(res =>
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: res.data })
      )
    .catch(err => dispatch({ type: DELETE_PLANT_FAIL, payload: err}))
}
