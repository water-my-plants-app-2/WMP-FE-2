import axios from 'axios';

export const FETCH_PLANTS_START = 'FETCH_PLANTS_START';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';
export const FETCH_PLANTS_FAILURE = 'FETCH_PLANST_FAILURE';
export const DELETE_PLANT_START = 'DELETE_PLANT_START';
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';
export const DELETE_PLANT_FAILURE = 'DELETE_PLANT_FAILURE';

export const getPlants = () => dispatch => {
  dispatch({ type: FETCH_PLANTS_START });
  axios
    .get('https://wmp2-back-end.herokuapp.com/api/usersunp/4/plants')
    .then(response =>
      dispatch({ type: FETCH_PLANTS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_PLANTS_FAILURE, payload: error }));
  //     this.setState({ items: data });
};

export const deletePlant = plantId => dispatch => {
  dispatch({ type: DELETE_PLANT_START });
  return axios
    .delete(`https://wmp2-back-end.herokuapp.com/api/plantsunp//${plantId}`)
    .then(response => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: DELETE_PLANT_FAILURE, payload: error }));
};
