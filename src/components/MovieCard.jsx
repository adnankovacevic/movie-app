import React, { useState } from 'react';


export default function MovieCard ({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
  };
  const imagePath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

  return (
    <div
      className="bg-black shadow-md rounded-2xl p-4"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imagePath} alt={movie.title} className="w-full h-88 object-cover mb-2 shadow-md rounded-2xl p-4" />
      <h2 className="text-lg font-semibold text-blue-200">{movie.title}</h2>
      <p className="text-blue-100">{movie.release_date}</p>
    </div>
  );
};