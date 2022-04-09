import './Navbar.css';
import { FaMoon } from 'react-icons/fa';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect } from 'react';

const Navbar: React.FC = ({ children }) => {
  const { changeMode } = useActions();
  const { darkMode } = useTypedSelector((state) => state.mode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <nav>
        <div className="nav-container">
          <h1>Where in the world?</h1>
          <button
            className="nav-btn"
            onClick={() => {
              changeMode();
            }}
          >
            <span className="nav-btn-icon">
              <FaMoon />
            </span>
            <span className="nav-btn-text">Dark Mode</span>
          </button>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
