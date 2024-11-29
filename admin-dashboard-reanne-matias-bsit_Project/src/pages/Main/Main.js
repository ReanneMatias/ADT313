import { useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './Main.css';

function Main() {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  useEffect(() => {
    if (!accessToken) {
      handleLogout();
    }
  }, [accessToken]); 

  return (
    <div className="Main">
      <div className="container">
        {}
        <div className="navigation">
          <h2>Admin Panel</h2>
          <ul>
            <li>
              <Link to="/main/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/main/movies">Movies</Link>
            </li>
            <li className="logout">
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>

        {}
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;


