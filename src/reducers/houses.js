import { GET_HOUSES, GET_HOUSES_ERROR, GET_HOUSES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    houses: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HOUSES:
            return {
                ...state,
                isLoading: true
            }
        case GET_HOUSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                houses: action.payload || [],
                selectedIndex: 0
            }
        case GET_HOUSES_ERROR:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};
