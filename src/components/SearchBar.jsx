import React from 'react';

export default function SearchBar ({ onSearch }) {
       return (
              <div className="flex items-center space-x-2 px-0 py-6 justify-end">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="border rounded-full px-4 py-2 w-3/5 h-12 items-center"
                  onChange={(e) => onSearch(e.target.value)}
                />
               
              </div>
            );
};