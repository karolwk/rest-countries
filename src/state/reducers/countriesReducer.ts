import { ActionType } from '../action-types';
import { Action } from '../actions';
import { CountryInteface } from '../../shared/api.interface';

interface FetchAllState {
  loading: boolean;
  error: string | null;
  data: CountryInteface[];
  filtredView: CountryInteface[];
  countryView: CountryInteface;
  countryNeighbors:
    | {
        name?: string;
        code?: string;
      }[]
    | [];
  searchTerm: string;
  searchRegion: string;
}

const intialState = {
  loading: false,
  error: null,
  data: [],
  filtredView: [],
  countryView: {},
  countryNeighbors: [],
  searchTerm: '',
  searchRegion: '',
};

const countriesReducer = (
  state: FetchAllState = intialState,
  action: Action
): FetchAllState => {
  switch (action.type) {
    case ActionType.FETCH_COUNTRIES:
      return { ...state, loading: true, error: null, data: [] };

    case ActionType.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };

    case ActionType.FETCH_COUNTRIES_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };

    case ActionType.SET_STARTING_VIEW:
      // Manual select countries to show on first render
      if (!state.filtredView.length) {
        const selectedAlphaCodes = ['ISL', 'BRA', 'USA', 'DEU'];
        const addtoStart = [] as CountryInteface[];
        const startingView = state.data.filter((ele) => {
          for (let code of selectedAlphaCodes) {
            if (code === ele.alpha3Code) {
              addtoStart.push(ele);
              return false;
            }
          }
          return true;
        });

        // Sort in code AlphaCode order
        for (let code of selectedAlphaCodes) {
          for (let country of addtoStart) {
            if (code === country.alpha3Code) {
              startingView.unshift(country);
            }
          }
        }
        return { ...state, filtredView: startingView };
      }
      return state;

    case ActionType.FILTER_BY_SUBREGION:
      const subRegionView = state.data.filter((ele) => {
        return ele.subregion === action.payload;
      });
      return { ...state, filtredView: subRegionView };
    case ActionType.FILTER_BY_REGION:
      if (!action.payload) {
        return { ...state, searchRegion: '' };
      }

      const regionView = state.filtredView.filter((ele) => {
        return ele.region === action.payload;
      });
      return {
        ...state,
        filtredView: regionView,
        searchRegion: action.payload,
      };

    case ActionType.FILTER_BY_NAME:
      const regex = RegExp(action.payload, 'gi');
      const nameView = state.data.filter((ele) => {
        if (regex.exec(ele.name as string)) {
          return true;
        }
        return false;
      });
      return { ...state, filtredView: nameView, searchTerm: action.payload };
    case ActionType.GET_COUNTRY:
      // Gets country info from state.data and sets its neighbors state.
      const country = state.data.find((ele) => {
        return ele.alpha3Code?.toLowerCase() === action.payload.toLowerCase();
      });
      if (country) {
        if (country.borders) {
          const neighbors = [];
          for (let borderCode of country.borders) {
            for (let country_ of state.data) {
              if (country_.alpha3Code === borderCode) {
                neighbors.push({
                  name: country_.name,
                  code: country_.alpha3Code,
                });
                break;
              }
            }
          }
          return {
            ...state,
            countryView: country,
            countryNeighbors: neighbors,
          };
        }
        return { ...state, countryNeighbors: [], countryView: country };
      }
      return state;

    default:
      return state;
  }
};

export default countriesReducer;
