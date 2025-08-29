import React from 'react';
import BookCard from './BookCard.jsx';
import LoadingGrid from './LoadingGrid.jsx';
import { BookOpen } from 'lucide-react';

const BookList = ({ books, loading, hasSearched }) => {
  if (loading) {
    return <LoadingGrid />;
  }

  if (!hasSearched) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Start Your Literary Journey
          </h2>
          <p className="text-gray-500">
            Enter a book title, author name, or ISBN above to discover amazing books from around the world.
          </p>
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            No Books Found
          </h2>
          <p className="text-gray-500">
            Try searching with different keywords or check your spelling.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <BookCard key={`${book.key}-${index}`} book={book} />
      ))}
    </div>
  );
};

export default BookList;