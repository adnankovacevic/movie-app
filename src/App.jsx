import React, { useState, useEffect } from 'react';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';


const TMDB_API_KEY = 'my-tmdb-api-key'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching movie data:', error));
  }, []);


  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedMovie(null);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setNoResults(filteredMovies.length === 0 && searchQuery !== '');
  }, [filteredMovies, searchQuery]);

  return (
    <div className="bg-gray-100 min-h-screen mt-5">
      <Header className="bg-blue-900" />

      <div className="">
        <SearchBar onSearch={handleSearch} />
        {noResults ? (
          <div className="text-center py-4">
            <p>No results found.</p>
          </div>
        ) : selectedMovie ? (
          <MovieDetails movie={selectedMovie} />
        ) : (
          <MovieList movies={filteredMovies} onSelectMovie={handleSelectMovie} />
        )}
      </div>

    </div>
  );

};

export default App
