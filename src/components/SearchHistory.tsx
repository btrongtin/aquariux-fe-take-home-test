
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Trash2 } from 'lucide-react';
import { SearchHistoryItem } from '@/types/weather';
import { useWeatherContext } from '@/contexts/WeatherContext';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { Button } from '@/components/ui/button';

const SearchHistory: React.FC = () => {
  const { fetchWeatherForCity } = useWeatherContext();
  const { searchHistory, removeFromSearchHistory } = useSearchHistory();
  const navigate = useNavigate();

  const handleSelectCity = async (city: string, countryCode: string) => {
    try {
      const fullCityName = `${city}, ${countryCode}`;
      await fetchWeatherForCity(fullCityName);
      navigate('/');
    } catch (error) {
      console.error('Error selecting city from history:', error);
    }
  };

  if (searchHistory.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <p className="text-weather-gray text-center">No search history yet</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="font-medium text-lg p-4 border-b border-gray-100 text-weather-gray-dark">
        Search History
      </h2>
      <ul className="divide-y divide-gray-100">
        {searchHistory.map((item: SearchHistoryItem) => (
          <li key={item.id} className="flex items-center justify-between py-3 px-4">
            <span className="text-weather-gray-dark">
              {item.cityName}, {item.countryCode}
            </span>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSelectCity(item.cityName, item.countryCode)}
                aria-label={`Search for ${item.cityName}`}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromSearchHistory(item.id)}
                aria-label={`Remove ${item.cityName} from history`}
              >
                <Trash2 className="h-4 w-4 hover:text-red-500 transition-colors" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

