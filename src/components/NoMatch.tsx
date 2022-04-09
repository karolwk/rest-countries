import { FaBeer } from 'react-icons/fa';

const NoMatch: React.FC = () => {
  return (
    <main>
      <div className="page-404">
        <h1>
          404 - Page not found <FaBeer />
        </h1>
      </div>
    </main>
  );
};

export default NoMatch;
