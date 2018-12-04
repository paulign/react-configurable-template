import { GET_TEMPLATES_ERROR, GET_TEMPLATES, GET_TEMPLATES_SUCCESS, ON_CHANGE_TEMPLATE } from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    templates: [],
    selectedIndex: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TEMPLATES:
            return {
                ...state,
                isLoading: true
            }
        case GET_TEMPLATES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                templates: action.payload || [],
                selectedIndex: 0
            }
        case GET_TEMPLATES_ERROR:
            return {
                ...state,
                isLoading: false
            }
        case ON_CHANGE_TEMPLATE:
            return {
                ...state,
                selectedIndex: action.payload || 0
            }
        default:
            return state;
    }
};
