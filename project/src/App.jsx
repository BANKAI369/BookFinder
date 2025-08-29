import React, { useState } from 'react';
import Header from './components/Header.jsx';
import SearchForm from './components/SearchForm.jsx';
import BookList from './components/BookList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setHasSearched(true);
    
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=24`);
      if (!response.ok) throw new Error('Failed to fetch books');
      
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError('Unable to search for books. Please try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Discover Your Next
              <span className="text-blue-600"> Great Read</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search millions of books from the Open Library. Find classics, bestsellers, and hidden gems.
            </p>
          </div>

          <SearchForm onSearch={handleSearch} loading={loading} />
          
          {error && (
            <div className="max-w-md mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-center">{error}</p>
            </div>
          )}
          
          <BookList 
            books={books} 
            loading={loading} 
            hasSearched={hasSearched}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;