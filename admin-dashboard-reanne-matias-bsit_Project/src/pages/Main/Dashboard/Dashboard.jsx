import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  
  const [user, setUser] = useState({
    name: 'Reanne Ashley S.R. Matias',
    token: 'abc123',
    role: 'admin', 
  });

 
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      artist: 'Christopher Nolan',
      photos: ['https://via.placeholder.com/300/FF0000/FFFFFF?text=Inception'],
      videos: ['https://www.youtube.com/embed/YoHD9XEInc0'],
    },
    {
      id: 2,
      title: 'Interstellar',
      artist: 'Christopher Nolan',
      photos: ['https://via.placeholder.com/300/0000FF/FFFFFF?text=Interstellar'],
      videos: ['https://www.youtube.com/embed/zSWdZVtXT7E'],
    },
    {
      id: 3,
      title: 'The Dark Knight',
      artist: 'Christopher Nolan',
      photos: ['https://via.placeholder.com/300/008000/FFFFFF?text=The+Dark+Knight'],
      videos: ['https://www.youtube.com/embed/EXeTwQWrcwY'],
    },
  ]);

 
  const [recentActivities, setRecentActivities] = useState([]);
  const activitiesListRef = useRef(null); 

  // Function to Log Activity
  const logActivity = (activity) => {
    setRecentActivities((prevActivities) => {
      const updatedActivities = [activity, ...prevActivities];
      if (updatedActivities.length > 5) {
        updatedActivities.pop(); 
      }
      return updatedActivities;
    });
    if (activitiesListRef.current) {
      activitiesListRef.current.scrollTop = 0; 
    }
  };

  
  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: 'New Movie',
      artist: 'Unknown Artist',
      photos: [
        `https://via.placeholder.com/300/${Math.floor(Math.random()*16777215).toString(16)}/FFFFFF?text=New+Movie+${movies.length+1}`,
      ],
      videos: ['https://www.youtube.com/embed/dQw4w9WgXcQ'],
    };
    setMovies([...movies, newMovie]);
    logActivity(`Added new movie: ${newMovie.title}`);
  };

 
  const editMovie = (id) => {
    const movieToEdit = movies.find((movie) => movie.id === id);
    const updatedTitle = prompt('Enter new title:', movieToEdit.title);
    const updatedArtist = prompt('Enter new artist:', movieToEdit.artist);

    const updatedMovies = movies.map((movie) =>
      movie.id === id
        ? { ...movie, title: updatedTitle, artist: updatedArtist }
        : movie
    );
    setMovies(updatedMovies);
    logActivity(`Edited movie: ${updatedTitle}`);
  };

  
  const login = () => {
    logActivity(`User ${user.name} logged in`);
  };

 
  const register = () => {
    logActivity(`User ${user.name} registered`);
  };

 
  const addPhoto = () => {
    alert('Add Photo functionality coming soon!');
  };


  const addVideo = () => {
    alert('Add Video functionality coming soon!');
  };

  useEffect(() => {
    login(); 
  }, []);

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="dashboard-header">
          <h2>Welcome, {user.name}</h2>
        </div>

        
        <div className="user-section">
          <h3>User Information</h3>
          <div className="user-info-card">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Token:</strong> {user.token}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        </div>

        
        <div className="movies-section">
          <h3>Movies & Media</h3>
          <div className="movies-list">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                  <h4>{movie.title}</h4>
                  <p><strong>Artist:</strong> {movie.artist}</p>
                  <div className="photos">
                    <h5>Photos</h5>
                    {movie.photos.map((photo, index) => (
                      <img key={index} src={photo} alt={`Photo ${index + 1}`} width="300" />
                    ))}
                  </div>
                  <div className="videos">
                    <h5>Videos</h5>
                    {movie.videos.map((video, index) => (
                      <iframe
                        key={index}
                        width="560"
                        height="315"
                        src={video}
                        title="Movie Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ))}
                  </div>
                  {/* Edit button available only for admins */}
                  {user.role === 'admin' && (
                    <button className="edit-movie-btn" onClick={() => editMovie(movie.id)}>
                      Edit Movie
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p>No movies available</p>
            )}
          </div>
        </div>

        
        {user.role === 'admin' && (
          <div className="add-movie-section">
            <button className="add-movie-btn" onClick={addMovie}>
              Add Movie
            </button>
            <button className="add-photo-btn" onClick={addPhoto}>
              Add Photo
            </button>
            <button className="add-video-btn" onClick={addVideo}>
              Add Video
            </button>
          </div>
        )}
      </div>

      
      <div className="recent-activities-sidebar">
        <h3>Recent Activities</h3>
        <ul ref={activitiesListRef} className="recent-activities-list">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))
          ) : (
            <p>No recent activities</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;











































