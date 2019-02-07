import {
    // FETCH_PLANTS_START,
    FETCH_PLANTS_SUCCESS,
    // FETCH_PLANTS_FAILURE,
    // ADD_PLANT_START,
    ADD_PLANT_SUCCESS,
    // ADD_PLANT_FAILURE,
    // DELETE_PLANT_START,
    DELETE_PLANT_SUCCESS,
    // DELETE_PLANT_FAILURE,
    UPDATE_PLANT_SUCCESS,
    POPULATE_PLANT,
  } from '../actions';

const initialState = {
    plants: [],
    isAddingPlant: false,
    isUpdating: false,
    beingUpdated: null,
    name: '',
    description: '',
    characteristic: '',
    lastWater: '',
    nextWater: '',
    img_url: '',
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
        case UPDATE_PLANT_SUCCESS:
        return{
            ...state,
            plants: action.payload,
            error: ''
        }
        case POPULATE_PLANT:
        const selectPlant = state.plants.find(plant => plant.id === action.payload)
        return{
            ...state,
            name: selectPlant.name,
            description: selectPlant.description,
            characteristic: selectPlant.characteristic,
            lastWater: selectPlant.lastWater,
            nextWater: selectPlant.nextWater,
            img_url: selectPlant.img_url,
            isUpdating: true,
            beingUpdated: selectPlant.id
        }

        default:
        return state;
    }
}

export default plants;