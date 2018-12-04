import { apiRequest } from '../api';
import { GET_HOUSES, GET_HOUSES_ERROR, GET_HOUSES_SUCCESS } from './types';

export const getHouses = () => async (dispatch) => {
    try {
        dispatch({ type: GET_HOUSES });
        const response = await apiRequest({ url: 'properties' });
        const houses = response ? response.data : [];
        dispatch({ type: GET_HOUSES_SUCCESS, payload: houses || [] });
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_HOUSES_ERROR })
    }
}