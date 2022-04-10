import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';

import { useTypedSelector } from '../hooks/useTypedSelector';
import './CountryList.css';
import { regions } from '../shared/types';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import DropBar from './DropBar';
import { FaSearch } from 'react-icons/fa';
import { ROOT_URL } from '../shared/urls';

const CountryList: React.FC = () => {
  const { fetchAllCountries, filterByName, filterByRegion, setStartinView } =
    useActions();

  const { error, loading, filtredView, searchTerm } = useTypedSelector(
    (state) => state.countries
  );

  useEffect(() => {
    fetchAllCountries();

    setStartinView();
  }, [fetchAllCountries, loading, setStartinView]);

  return (
    <main>
      {!loading && (
        <form className="country-filter">
          <SearchBar
            icon={<FaSearch className="search-bar-icon" />}
            onInput={filterByName}
            placeholder="Search for a country..."
            value={searchTerm}
          />
          <DropBar
            options={regions}
            placeholder="Filter by Region"
            onChange={filterByRegion}
          />
        </form>
      )}
      {loading ? (
        <Spinner />
      ) : (
        <div className="countrylist-container">
          {error && console.log(error)}

          {filtredView.map((ele) => (
            <Link
              key={ele.name + '-link'}
              to={`${ROOT_URL}/country/${ele.name}`}
            >
              <CardItem
                flag={ele.flags?.svg}
                countryName={ele.name}
                population={ele.population}
                region={ele.region}
                capital={ele.capital}
              />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default CountryList;
