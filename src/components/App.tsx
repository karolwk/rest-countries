import { Provider } from 'react-redux';
import { store, persistor } from '../state';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import Navbar from './Navbar';
import NoMatch from './NoMatch';
import { ROOT_URL } from '../shared/urls';

import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route
              path={ROOT_URL}
              element={
                <Navbar>
                  <CountryList />
                </Navbar>
              }
            />
            <Route
              path={ROOT_URL + '/country/:id'}
              element={
                <Navbar>
                  <CountryDetails />
                </Navbar>
              }
            />
            <Route
              path={ROOT_URL + '/*'}
              element={
                <Navbar>
                  <NoMatch />
                </Navbar>
              }
            ></Route>
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
