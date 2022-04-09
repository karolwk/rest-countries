import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { RootState } from '../reducers';

export const fetchAllCountries = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const { data } = getState().countries;
    // Check if there is data in state if not fetch it from server
    if (!data.length) {
      dispatch({ type: ActionType.FETCH_COUNTRIES });

      try {
        const response = await axios.get('https://restcountries.com/v2/all');

        dispatch({
          type: ActionType.FETCH_COUNTRIES_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: ActionType.FETCH_COUNTRIES_ERROR,
            payload: error.message,
          });
        } else {
          dispatch({
            type: ActionType.FETCH_COUNTRIES_ERROR,
            payload: 'Unknown Error',
          });
        }
      }
    }
  };
};
