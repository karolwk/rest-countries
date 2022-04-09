import { ActionType } from '../action-types';
import { CountryInteface } from '../../shared/api.interface';

export interface FetchCountriesSuccess {
  type: ActionType.FETCH_COUNTRIES_SUCCESS;
  payload: CountryInteface[];
}

export interface FetchCountriesError {
  type: ActionType.FETCH_COUNTRIES_ERROR;
  payload: string;
}

export interface FetchAllCountries {
  type: ActionType.FETCH_COUNTRIES;
}

export interface FilterCountriesBySubRegion {
  type: ActionType.FILTER_BY_SUBREGION;
  payload: string;
}

export interface FilterCountriesByRegion {
  type: ActionType.FILTER_BY_REGION;
  payload: string;
}

export interface FilterCountriesByName {
  type: ActionType.FILTER_BY_NAME;
  payload: string;
}

export interface SetStartingView {
  type: ActionType.SET_STARTING_VIEW;
}

export interface GetCountryInfo {
  type: ActionType.GET_COUNTRY;
  payload: string;
}

export interface SetCountryNeighbors {
  type: ActionType.SET_NEIGHBORS;
}

export interface ChangeScreenMode {
  type: ActionType.CHANGE_MODE;
}

export type Action =
  | FetchCountriesSuccess
  | FetchCountriesError
  | FetchAllCountries
  | FilterCountriesBySubRegion
  | FilterCountriesByRegion
  | FilterCountriesByName
  | GetCountryInfo
  | SetStartingView
  | ChangeScreenMode;
