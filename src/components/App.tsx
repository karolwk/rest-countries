import { Provider } from 'react-redux';
import { store, persistor } from '../state';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import Navbar from './Navbar';
import NoMatch from './NoMatch';

import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Navbar>
                  <CountryList />
                </Navbar>
              }
            />
            <Route
              path="/country/:id"
              element={
                <Navbar>
                  <CountryDetails />
                </Navbar>
              }
            />
            <Route
              path="*"
              element={
                <Navbar>
                  <NoMatch />
                </Navbar>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
