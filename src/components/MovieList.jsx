import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList ({ movies , onSelectMovie }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-9 justify-end bg-black">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={() => onSelectMovie(movie)}/>
      ))}
    </div>
  );
};

