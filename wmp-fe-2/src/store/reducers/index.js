import {
    DELETE_PLANT_START,
    DELETE_PLANT_SUCCESS,
    DELETE_PLANT_FAIL
} from '../actions';

const initialState = {
    plants: []
}

const plants = (state = initialState, action) => {
    switch (action.type){
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