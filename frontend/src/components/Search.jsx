import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-black/50 backdrop-blur-md rounded-full px-4 py-2 w-72"
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-transparent outline-none flex-grow text-white placeholder-gray-400"
      />
      <button type="submit" className="ml-2 text-gray-300 hover:text-white transition">
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}

export default SearchBar;
