
import React from 'react';
import SearchBar from '@/components/SearchBar';
import SearchHistory from '@/components/SearchHistory';

const Search: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-lg mx-auto space-y-6">
        <SearchBar />
        <SearchHistory />
      </div>
    </div>
  );
};

export default Search;
