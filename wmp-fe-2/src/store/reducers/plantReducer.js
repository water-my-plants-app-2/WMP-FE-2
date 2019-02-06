import {
    FETCH_PLANTS_START,
    FETCH_PLANTS_SUCCESS,
    FETCH_PLANTS_FAILURE,
    ADD_PLANT_START,
    ADD_PLANT_SUCCESS,
    ADD_PLANT_FAILURE,
    DELETE_PLANT_START,
    DELETE_PLANT_SUCCESS,
    DELETE_PLANT_FAILURE
  } from '../actions';

const initialState = {
    plants: [],
    isAddingPlant: false
}

const plants = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PLANTS_SUCCESS:
        return {
            ...state,
            plants: action.payload
        };
        case ADD_PLANT_SUCCESS:
        return {
            ...state,
            isAddingItem: false,
            error: '',
            plants: action.payload
        }
        case DELETE_PLANT_SUCCESS:
        return {
            ...state,
            plants: action.payload
        }

        default:
        return state;
    }
}

export default plants;