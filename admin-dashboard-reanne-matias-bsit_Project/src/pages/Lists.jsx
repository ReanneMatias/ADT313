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

  // Debounced search term to optimize rendering
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Fetch movies from the server
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/movies', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLists(response.data);
      setError(null); // Clear previous errors
    } catch (err) {
      setError('Error fetching movies. Please try again later.');
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  // Delete movie handler
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

  // Filter movies by search term
  const filteredMovies = lists.filter((movie) =>
    movie.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  // Debounce search term changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer); // Clean up on component unmount
  }, [searchTerm]);

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
                <th>Poster</th>
                <th>ID</th>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                  <tr key={movie.id}>
                    <td>
                      <img
                        src={
                          movie.poster
                            ? movie.poster
                            : 'https://via.placeholder.com/50x75'
                        }
                        alt={movie.title}
                        className="poster-img"
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.director}</td>
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
                  <td colSpan="6">No movies found.</td>
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











