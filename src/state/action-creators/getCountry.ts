import { ActionType } from '../action-types';
import { GetCountryInfo } from '../actions';

export const getCountry = (name: string): GetCountryInfo => {
  return {
    type: ActionType.GET_COUNTRY,
    payload: name,
  };
};
