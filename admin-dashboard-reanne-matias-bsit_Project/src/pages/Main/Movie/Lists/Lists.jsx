import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lists.css';
import axios from 'axios';

const Lists = () => {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const genres = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Sci-Fi'];
  const generateRandomGenre = () =>
    genres[Math.floor(Math.random() * genres.length)];

  const generateRandomRating = () =>
    (Math.random() * 5).toFixed(1); 

  
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/movies', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      
      const enhancedData = response.data.map((movie) => ({
        ...movie,
        genre: generateRandomGenre(),
        rating: generateRandomRating(),
      }));

      setLists(enhancedData);
      setError(null);
    } catch (err) {
      setError('Error fetching movies. Please try again later.');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const isConfirm = window.confirm(
      'Are you sure you want to delete this movie?'
    );
    if (isConfirm) {
      try {
        await axios.delete(`/movies/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setLists((prevLists) => prevLists.filter((movie) => movie.id !== id));
      } catch (err) {
        console.error('Error deleting movie:', err);
        alert('Failed to delete movie. Please try again later.');
      }
    }
  };

  const filteredMovies = lists.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="lists-container">
      <div className="create-container">
        <button
          type="button"
          className="create-button"
          onClick={() => navigate('/main/movies/form')}
        >
          Create New Movie
        </button>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="table-container">
        {loading ? (
          <p>Loading movies...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <table className="movie-lists">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                  <tr key={movie.id}>
                    <td>{index + 1}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>
                      <button
                        type="button"
                        className="action-button edit-button"
                        onClick={() =>
                          navigate('/main/movies/form/' + movie.id)
                        }
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="action-button delete-button"
                        onClick={() => handleDelete(movie.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No movies found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Lists;




















