import React from 'react';
import { Calendar, User, Star, ExternalLink } from 'lucide-react';

const BookCard = ({ book }) => {
  const getCoverUrl = (coverId) => {
    return coverId 
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
      : 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop';
  };

  const getBookUrl = () => {
    return `https://openlibrary.org${book.key}`;
  };

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return 'Unknown Author';
    return authors.slice(0, 2).join(', ') + (authors.length > 2 ? '...' : '');
  };

  const formatPublishYear = (years) => {
    if (!years || years.length === 0) return null;
    return Math.max(...years);
  };

  const formatRating = (rating) => {
    return rating ? Math.round(rating * 10) / 10 : null;
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative overflow-hidden">
        <img
          src={getCoverUrl(book.cover_i)}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 leading-tight">
          {book.title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <User className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="text-sm line-clamp-1">
            {formatAuthors(book.author_name)}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          {formatPublishYear(book.publish_year) && (
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{formatPublishYear(book.publish_year)}</span>
            </div>
          )}
          
          {book.ratings_average && (
            <div className="flex items-center text-gray-500">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              <span className="text-sm">{formatRating(book.ratings_average)} / 5</span>
            </div>
          )}
        </div>

        {book.subject && book.subject.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {book.subject.slice(0, 3).map((subject, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        )}

        <a
          href={getBookUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:ring-4 focus:ring-blue-500/20 outline-none"
        >
          View Details
          <ExternalLink className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default BookCard;