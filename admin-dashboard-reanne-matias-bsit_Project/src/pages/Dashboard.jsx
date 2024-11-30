import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

function Sidebar({ toggleTheme, currentTheme, genres, onGenreChange }) {
  return (
    <div className={`sidebar ${currentTheme}`}>
      <div className="sidebar-header">
        <h2>Movie Dashboard</h2>
      </div>
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-btn">
          {currentTheme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
        </button>
      </div>
      <div className="genre-filter">
        <h3>Filter by Genre</h3>
        <select onChange={(e) => onGenreChange(e.target.value)} className="genre-select">
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Navbar({ movieCount }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1>Dashboard</h1>
        <div className="movie-count">
          <span>Total Movies: {movieCount}</span>
        </div>
      </div>
    </header>
  );
}

function MovieTable({ movies, onDeleteMovie, onMovieClick }) {
  return (
    <section className="movie-table">
      <h2>Movies</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Poster</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseYear}</td>
              <td>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.image}`}
                  alt={movie.title}
                  className="movie-poster"
                  onClick={() => onMovieClick(movie)}
                />
              </td>
              <td>{movie.rating}</td>
              <td>
                <button onClick={() => onDeleteMovie(movie.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, releaseYear, rating });
    setTitle('');
    setReleaseYear('');
  };

  return (
    <section className="add-movie-form">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
        />
        <label>Rating: </label>
        <input
          type="range"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit" className="submit-btn">Add Movie</button>
      </form>
    </section>
  );
}

function MovieDetailsModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.image}`}
          alt={movie.title}
          className="movie-details-poster"
        />
        <p>{movie.description}</p>
        <a href={movie.trailerUrl} target="_blank" rel="noopener noreferrer">
          Watch Trailer
        </a>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function Dashboard() {
  const [theme, setTheme] = useState('light');
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movieCount, setMovieCount] = useState(0);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchGenres();
    fetchMovies();
  }, [selectedGenre]);

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      setGenres(response.data.genres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchMovies = async () => {
    const genreParam = selectedGenre ? `&with_genres=${selectedGenre}` : '';
    try {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US${genreParam}`
      );
      const movieData = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        releaseYear: movie.release_date.split('-')[0],
        image: movie.poster_path,
        rating: movie.vote_average,
        description: movie.overview,
        trailerUrl: `https://www.youtube.com/watch?v=${movie.id}`,
      }));
      setMovies(movieData);
      setMovieCount(movieData.length);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
    setMovieCount(movieCount - 1);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
    setMovieCount(movieCount + 1);
  };

  const handleMovieClick = (movie) => {
    setMovieDetails(movie);
  };

  const handleCloseModal = () => {
    setMovieDetails(null);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`dashboard ${theme}`}>
      <Sidebar
        toggleTheme={toggleTheme}
        currentTheme={theme}
        genres={genres}
        onGenreChange={setSelectedGenre}
      />
      <div className="main-content">
        <Navbar movieCount={movieCount} />
        <AddMovieForm onAddMovie={handleAddMovie} />
        <MovieTable movies={movies} onDeleteMovie={handleDeleteMovie} onMovieClick={handleMovieClick} />
      </div>
      <MovieDetailsModal movie={movieDetails} onClose={handleCloseModal} />
    </div>
  );
}

export default Dashboard;































