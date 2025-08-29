import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> using Open Library API
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Discover millions of books from around the world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;