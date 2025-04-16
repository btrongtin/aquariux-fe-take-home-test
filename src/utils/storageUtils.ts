import CryptoJS from 'crypto-js';
import { SearchHistoryItem } from '@/types/weather';

// Secret key for encryption (would be stored more securely in a real app)
const SECRET_KEY = 'weather-wise-compass-secret-key';

// Encrypt data
export const encryptData = (data: any): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

// Decrypt data
export const decryptData = (encryptedData: string): any => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// Storage keys
const SEARCH_HISTORY_KEY = 'weather-search-history';

// Save search history
export const saveSearchHistory = (searchHistory: SearchHistoryItem[]): void => {
  const encryptedData = encryptData(searchHistory);
  localStorage.setItem(SEARCH_HISTORY_KEY, encryptedData);
};

// Get search history
export const getSearchHistory = (): SearchHistoryItem[] => {
  try {
    const encryptedData = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (!encryptedData) return [];
    
    return decryptData(encryptedData);
  } catch (error) {
    console.error('Error retrieving search history:', error);
    return [];
  }
};

// Add to search history
export const addToSearchHistory = (city: string, countryCode: string): void => {
  const history = getSearchHistory();
  
  // Check if this city already exists
  const existingItemIndex = history.findIndex(
    item => item.cityName.toLowerCase() === city.toLowerCase() && 
    item.countryCode.toLowerCase() === countryCode.toLowerCase()
  );
  
  // If exists, remove it (we'll add it again at the top)
  if (existingItemIndex !== -1) {
    history.splice(existingItemIndex, 1);
  }
  
  // Add new search to the beginning of the array
  history.unshift({
    id: Date.now().toString(),
    cityName: city,
    countryCode: countryCode,
    timestamp: Date.now()
  });
  
  // Keep only the 10 most recent searches
  const trimmedHistory = history.slice(0, 10);
  
  // Save to localStorage
  saveSearchHistory(trimmedHistory);
};

// Remove from search history
export const removeFromSearchHistory = (id: string): void => {
  const history = getSearchHistory();
  const updatedHistory = history.filter(item => item.id !== id);
  saveSearchHistory(updatedHistory);
};
