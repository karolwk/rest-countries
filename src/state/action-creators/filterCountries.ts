import { ActionType } from '../action-types';
import { Action, SetStartingView } from '../actions';
import { FilterCountriesBySubRegion } from '../actions';

import { Dispatch } from 'redux';
import { RootState } from '../reducers';

export const filterByRegion = (region: string) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.FILTER_BY_NAME,
      payload: getState().countries.searchTerm,
    });

    dispatch({
      type: ActionType.FILTER_BY_REGION,
      payload: region,
    });
  };
};

export const filterBySubregion = (
  subregion: string
): FilterCountriesBySubRegion => {
  return {
    type: ActionType.FILTER_BY_SUBREGION,
    payload: subregion,
  };
};

export const filterByName = (name: string) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.FILTER_BY_NAME,
      payload: name,
    });

    dispatch({
      type: ActionType.FILTER_BY_REGION,
      payload: getState().countries.searchRegion,
    });
  };
};

export const setStartinView = (): SetStartingView => {
  return {
    type: ActionType.SET_STARTING_VIEW,
  };
};
