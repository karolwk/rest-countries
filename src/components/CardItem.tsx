import numeral from 'numeral';
import './CardItem.css';
interface CardItemProps {
  flag?: string;
  countryName?: string;
  population?: number;
  capital?: string;
  region?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  flag,
  countryName,
  population,
  capital,
  region,
}) => {
  return (
    <div className="card-item">
      <div className="card-flag">
        <img alt={countryName + `-flag`} src={flag} />
      </div>
      <div className="card-description">
        <p>
          <span>{countryName}</span>
        </p>
        <p>
          <span>Population: </span>
          {numeral(population).format('0,0')}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
