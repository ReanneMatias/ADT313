import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useMovieContext } from '../../../../context/MovieContext'; // Assuming you have this context set up
import './View.css';

function View() {
  const { movie, setMovie } = useMovieContext();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

 
  const API_BASE_URL = 'http://localhost/phpmyadmin/index.php?route=/sql&db=movieprojectdb&table=movies';
  
  useEffect(() => {
    if (movieId !== undefined) {
      
      axios
        .get(`${API_BASE_URL}&pos=${movieId}`)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((e) => {
          setError("Failed to load movie details.");
        });

      
      const API_KEY = 'your_tmdb_api_key'; // Replace with your TMDb API key
      const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
      const AUTHORIZATION = 'Bearer your_tmdb_token'; // Replace with your token

      
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`, {
          headers: { Authorization: AUTHORIZATION }
        })
        .then((response) => {
          setCast(response.data.cast);
        })
        .catch(() => {
          setError("Failed to load cast details.");
        });

      
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`, {
          headers: { Authorization: AUTHORIZATION }
        })
        .then((response) => {
          setVideos(response.data.results);
        })
        .catch(() => {
          setError("Failed to load videos.");
        });

      
      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`, {
          headers: { Authorization: AUTHORIZATION }
        })
        .then((response) => {
          setPhotos(response.data.backdrops);
        })
        .catch(() => {
          setError("Failed to load photos.");
        });
    }
  }, [movieId]);

  return (
    <div className="view-container">
      {error && <div className="error-message">{error}</div>}

      
      {movie && (
        <div className="movie-banner">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-overview">{movie.overview}</p>
          <p className="movie-description">Detailed Description: {movie.description}</p>
        </div>
      )}

    
      {cast.length > 0 && (
        <div className="section cast-section">
          <h2>Cast & Crew</h2>
          <div className="cast-list">
            {cast.slice(0, 6).map((actor) => (
              <div key={actor.id} className="actor-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="actor-photo"
                />
                <div className="actor-info">
                  <p className="actor-name">{actor.name}</p>
                  <p className="actor-character">{actor.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      
      {photos.length > 0 && (
        <div className="section photo-gallery-section">
          <h2>Photo Gallery</h2>
          <div className="photo-gallery">
            {photos.slice(0, 6).map((photo, index) => (
              <img
                key={index}
                src={`https://image.tmdb.org/t/p/w500${photo.file_path}`}
                alt="movie scene"
                className="movie-photo"
              />
            ))}
          </div>
        </div>
      )}

      
      {videos.length > 0 && (
        <div className="section video-trailer-section">
          <h2>Watch Trailers</h2>
          <div className="video-gallery">
            {videos.map((video) => (
              <div key={video.id} className="video-item">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default View;














