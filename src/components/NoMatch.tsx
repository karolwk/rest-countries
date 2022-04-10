import { FaRegFrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../shared/urls';
const NoMatch: React.FC = () => {
  return (
    <main>
      <div className="page-404">
        <h1>
          404 - Page not found <FaRegFrown />
        </h1>
        <Link to={ROOT_URL}>
          <button className="btn-standard">
            <span>&larr;</span> Back
          </button>
        </Link>
      </div>
    </main>
  );
};

export default NoMatch;
