import { Outlet } from 'react-router-dom';

const Movie = () => {
  return (
    <div>
      <h1>Movies</h1>
      {}
      <Outlet />
    </div>
  );
};

export default Movie;


