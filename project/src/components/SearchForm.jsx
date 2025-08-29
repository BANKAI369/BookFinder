import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const SearchForm = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="mb-12">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {loading ? (
              <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
            ) : (
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            )}
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books by title, author, or ISBN..."
            disabled={loading}
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl 
                     focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none
                     transition-all duration-200 bg-white shadow-lg
                     disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-700 
                     text-white font-medium rounded-lg transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     focus:ring-4 focus:ring-blue-500/20 outline-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;