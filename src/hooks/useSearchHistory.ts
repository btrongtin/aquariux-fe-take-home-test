
import { useState, useEffect, useCallback } from 'react';
import { 
  getSearchHistory, 
  removeFromSearchHistory as removeFromStorage 
} from '@/utils/storageUtils';
import { SearchHistoryItem } from '@/types/weather';

interface UseSearchHistoryReturn {
  searchHistory: SearchHistoryItem[];
  removeFromSearchHistory: (id: string) => void;
  clearSearchHistory: () => void;
}

export const useSearchHistory = (): UseSearchHistoryReturn => {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  // Load search history on initial mount
  useEffect(() => {
    setSearchHistory(getSearchHistory());
  }, []);

  // Re-fetch history whenever local storage might have changed
  useEffect(() => {
    const handleStorageChange = () => {
      setSearchHistory(getSearchHistory());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Remove item from search history
  const removeFromSearchHistory = useCallback((id: string) => {
    removeFromStorage(id);
    setSearchHistory(prev => prev.filter(item => item.id !== id));
  }, []);

  // Clear all search history
  const clearSearchHistory = useCallback(() => {
    localStorage.removeItem('weather-search-history');
    setSearchHistory([]);
  }, []);

  return {
    searchHistory,
    removeFromSearchHistory,
    clearSearchHistory
  };
};
