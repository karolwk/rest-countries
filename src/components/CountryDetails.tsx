import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../shared/urls';
import numeral from 'numeral';

import Spinner from './Spinner';
import './CountryDetails.css';

const CountryDetails: React.FC = () => {
  let params = useParams();
  const { getCountry, fetchAllCountries } = useActions();
  const { countryView, countryNeighbors, loading } = useTypedSelector(
    (state) => state.countries
  );

  useEffect(() => {
    fetchAllCountries();
  }, [fetchAllCountries]);

  useEffect(() => {
    if (params.id) {
      getCountry(params.id);
    }
  }, [loading, getCountry, params.id]);

  return (
    <main>
      {loading ? (
        <Spinner />
      ) : (
        <div className="country-page">
          <Link to={ROOT_URL}>
            <button className="btn-standard">
              <span>&larr;</span> Back
            </button>
          </Link>
          <div className="country-container">
            <div className="country-flag">
              <img
                className="country-flag-img"
                alt="country-flag"
                src={countryView.flags?.svg}
              />
            </div>
            <div className="country-info">
              <h2>{countryView.name}</h2>
              <div className="country-details-container">
                <div className="country-details-one">
                  <dl>
                    <dt>
                      <span className="country-property">Native Name</span>:
                      {' ' + countryView.nativeName}
                    </dt>
                    <dt>
                      <span className="country-property">Population</span>:
                      {' ' + numeral(countryView.population).format('0,0')}
                    </dt>
                    <dt>
                      <span className="country-property">Region</span>:
                      {' ' + countryView.region}
                    </dt>
                    <dt>
                      <span className="country-property">Sub Region</span>:
                      {' ' + countryView.subregion}
                    </dt>
                    <dt>
                      <span className="country-property">Capital</span>:
                      {' ' + countryView.capital}
                    </dt>
                  </dl>
                </div>
                <div className="country-details-second">
                  <dl>
                    <dt>
                      <span className="country-property">Top Level Domain</span>
                      :{' ' + countryView.topLevelDomain?.map((ele) => ele)}
                    </dt>
                    <dt>
                      <span className="country-property">Currencies</span>:
                      {' ' +
                        countryView.currencies?.map((ele) => ele.name + ' ')}
                    </dt>
                    <dt>
                      <span className="country-property">Languages</span>:
                      {countryView.languages?.map((ele) => ele.name + ' ')}
                    </dt>
                  </dl>
                </div>
              </div>
              <h3>Border Countries:</h3>
              <div className="country-neighbors">
                {countryNeighbors.map((neighbor) => {
                  return (
                    <Link
                      to={`${ROOT_URL}/country/${neighbor.code}`}
                      key={neighbor + '-link'}
                    >
                      <button className="btn-standard">{neighbor.name}</button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CountryDetails;
