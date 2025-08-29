import React from 'react';

const LoadingSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden animate-pulse">
    <div className="h-64 bg-gray-200" />
    <div className="p-5">
      <div className="h-6 bg-gray-200 rounded mb-3" />
      <div className="h-4 bg-gray-200 rounded mb-3 w-3/4" />
      <div className="h-4 bg-gray-200 rounded mb-3 w-1/2" />
      <div className="flex gap-2 mb-4">
        <div className="h-6 bg-gray-200 rounded-full w-16" />
        <div className="h-6 bg-gray-200 rounded-full w-20" />
      </div>
      <div className="h-10 bg-gray-200 rounded-lg" />
    </div>
  </div>
);

const LoadingGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 12 }, (_, index) => (
        <LoadingSkeleton key={index} />
      ))}
    </div>
  );
};

export default LoadingGrid;