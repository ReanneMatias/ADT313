import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    overview: "",
    poster_path: "",
  });
  const [newVideo, setNewVideo] = useState({
    title: "",
    video_url: "",
  });
  const [newPicture, setNewPicture] = useState({
    title: "",
    image_url: "",
  });
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [showAddVideoForm, setShowAddVideoForm] = useState(false);
  const [showAddPictureForm, setShowAddPictureForm] = useState(false);
  const [user] = useState({ name: "Admin" }); 

  const tmdbApiKey = "YOUR_TMDB_API_KEY"; 
  const tmdbBaseUrl = "https://api.themoviedb.org/3/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const moviesResponse = await axios.get(
          `${tmdbBaseUrl}movie/popular?api_key=${tmdbApiKey}`
        );
        setMovies(moviesResponse.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  const handleMovieInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleVideoInputChange = (e) => {
    const { name, value } = e.target;
    setNewVideo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handlePictureInputChange = (e) => {
    const { name, value } = e.target;
    setNewPicture((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleAddMovieSubmit = (e) => {
    e.preventDefault();
    
    setMovies([newMovie, ...movies]); 
    setShowAddMovieForm(false); 
    setNewMovie({ title: "", overview: "", poster_path: "" });
  };

  
  const handleAddVideoSubmit = (e) => {
    e.preventDefault();
    
    setVideos([newVideo, ...videos]); 
    setShowAddVideoForm(false); 
    setNewVideo({ title: "", video_url: "" });
  };

 
  const handleAddPictureSubmit = (e) => {
    e.preventDefault();
    
    setPictures([newPicture, ...pictures]); 
    setShowAddPictureForm(false); 
    setNewPicture({ title: "", image_url: "" });
  };

  
  const toggleAddMovieForm = () => {
    setShowAddMovieForm(!showAddMovieForm);
  };

  
  const toggleAddVideoForm = () => {
    setShowAddVideoForm(!showAddVideoForm);
  };

  
  const toggleAddPictureForm = () => {
    setShowAddPictureForm(!showAddPictureForm);
  };

  return (
    <div className="dashboard">
      {}
      <header className="header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user.name}</p>
      </header>

      {}
      <main className="features-section">
        <div className="feature-card">
          <h3>Movies</h3>
          <button className="btn-feature" onClick={toggleAddMovieForm}>
            {showAddMovieForm ? "Cancel" : "Add New Movie"}
          </button>
        </div>

        <div className="feature-card">
          <h3>Videos</h3>
          <button className="btn-feature" onClick={toggleAddVideoForm}>
            {showAddVideoForm ? "Cancel" : "Add New Video"}
          </button>
        </div>

        <div className="feature-card">
          <h3>Pictures</h3>
          <button className="btn-feature" onClick={toggleAddPictureForm}>
            {showAddPictureForm ? "Cancel" : "Add New Picture"}
          </button>
        </div>
      </main>

      {}
      <section className="movies-section">
        <h2>Popular Movies</h2>
        <div className="movies-grid">
          {movies.slice(0, 6).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h4>{movie.title}</h4>
                <p>{movie.overview.slice(0, 100)}...</p>
                <button className="btn-more">View More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="videos-section">
        <h2>Videos</h2>
        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <h4>{video.title}</h4>
              <iframe
                title={video.title}
                width="300"
                height="200"
                src={video.video_url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="pictures-section">
        <h2>Pictures</h2>
        <div className="pictures-grid">
          {pictures.map((picture, index) => (
            <div key={index} className="picture-card">
              <img
                src={picture.image_url}
                alt={picture.title}
                className="picture-img"
              />
              <h4>{picture.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {}
      {showAddMovieForm && (
        <div className="add-movie-form">
          <h2>Add New Movie</h2>
          <form onSubmit={handleAddMovieSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleMovieInputChange}
                required
              />
            </label>
            <label>
              Overview:
              <textarea
                name="overview"
                value={newMovie.overview}
                onChange={handleMovieInputChange}
                required
              />
            </label>
            <label>
              Poster URL:
              <input
                type="text"
                name="poster_path"
                value={newMovie.poster_path}
                onChange={handleMovieInputChange}
                required
              />
            </label>
            <button type="submit" className="btn-submit">
              Add Movie
            </button>
          </form>
        </div>
      )}

      {}
      {showAddVideoForm && (
        <div className="add-video-form">
          <h2>Add New Video</h2>
          <form onSubmit={handleAddVideoSubmit}>
            <label>
              Video Title:
              <input
                type="text"
                name="title"
                value={newVideo.title}
                onChange={handleVideoInputChange}
                required
              />
            </label>
            <label>
              Video URL:
              <input
                type="text"
                name="video_url"
                value={newVideo.video_url}
                onChange={handleVideoInputChange}
                required
              />
            </label>
            <button type="submit" className="btn-submit">
              Add Video
            </button>
          </form>
        </div>
      )}

      {}
      {showAddPictureForm && (
        <div className="add-picture-form">
          <h2>Add New Picture</h2>
          <form onSubmit={handleAddPictureSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newPicture.title}
                onChange={handlePictureInputChange}
                required
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image_url"
                value={newPicture.image_url}
                onChange={handlePictureInputChange}
                required
              />
            </label>
            <button type="submit" className="btn-submit">
              Add Picture
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Dashboard;






















