import React from 'react';

export default function MovieDetails({ movie }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-semibold">{movie.title}</h2>
    </div>
  );
};