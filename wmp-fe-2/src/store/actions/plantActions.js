import axios from 'axios';

export const FETCH_PLANTS_START = 'FETCH_PLANTS_START';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANST_FAILURE';

export const DELETE_PLANT_START = 'DELETE_PLANT_START';
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';
export const DELETE_PLANT_FAILURE = 'DELETE_PLANT_FAILURE';

export const UPDATE_PLANT_START = 'UPDATE_PLANT_START';
export const UPDATE_PLANT_SUCCESS = 'UPDATE_PLANT_SUCCESS';
export const UPDATE_PLANT_FAIL = 'UPDATE_PLANT_FAIL';

export const POPULATE_PLANT = 'POPULATE_PLANT';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const getPlants = () => dispatch => {
  dispatch({ type: FETCH_PLANTS_START });
  axios
    .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
    .then(response =>
      dispatch({ type: FETCH_PLANTS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_PLANTS_FAILURE, payload: error }));
};

export const deletePlant = plantId => dispatch => {
  dispatch({ type: DELETE_PLANT_START });
  return axios
    .delete(`https://wmp2-back-end.herokuapp.com/api/plantsunp/${plantId}`)
    .then(response => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: response.data });
      dispatch(alert("You are deleting a plant!"))
    })
    .catch(error => dispatch({ type: DELETE_PLANT_FAILURE, payload: error }));
};

export const updatePlant = (plant, plantId) => dispatch => {
  dispatch({ type: UPDATE_PLANT_START});
  return axios
  .put(`https://wmp2-back-end.herokuapp.com/api/plantsunp/${plantId}`, plant)
  .then(res => {
    console.log('%c console log res data', 'color: pink', res);
    dispatch({ type: UPDATE_PLANT_SUCCESS, payload: res.data });
  })
  .catch(err => dispatch({ type: UPDATE_PLANT_FAIL, payload: err }))
}

export const populateForm = id => {
  return {type: POPULATE_PLANT, payload: id};
}

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGE,
  payload: {
    name,
    value
  }
})