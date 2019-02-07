import axios from 'axios';
import { toast } from 'react-toastify';

export const ADD_PLANT_START = 'ADD_PLANT_START';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_PLANT_FAILURE = 'ADD_PLANT_FAILURE';

export const addPlant = plant => dispatch => {
  dispatch({ type: ADD_PLANT_START });
  axios
    .post('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants', plant)
    .then(response => {
      dispatch({ type: ADD_PLANT_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: ADD_PLANT_FAILURE, payload: error }));
    toast.success("Plant Added!");
};
