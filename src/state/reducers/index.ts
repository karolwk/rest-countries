import { combineReducers } from 'redux';

import countriesReducer from './countriesReducer';
import modeReducer from './modeReducer';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const countriesPersistConfig = {
  key: 'countries',
  storage: storage,
  whitelist: ['data'],
};

const modePersistConfig = {
  key: 'mode',
  storage: storage,
};

const reducers = combineReducers({
  countries: persistReducer(countriesPersistConfig, countriesReducer),
  mode: persistReducer(modePersistConfig, modeReducer),
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
