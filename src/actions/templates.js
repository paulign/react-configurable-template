import { apiRequest } from '../api';
import { GET_TEMPLATES_ERROR, GET_TEMPLATES, GET_TEMPLATES_SUCCESS, ON_CHANGE_TEMPLATE } from './types';

export const getTemplates = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TEMPLATES });
        const templates = await apiRequest({ url: 'templates' });
        dispatch({ type: GET_TEMPLATES_SUCCESS, payload: templates || [] });
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_TEMPLATES_ERROR })
    }
}

export const changeTemplate = (index) => {
    return {
        type: ON_CHANGE_TEMPLATE,
        payload: index
    }
}