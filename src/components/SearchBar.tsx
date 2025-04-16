
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { useWeatherContext } from '@/contexts/WeatherContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { searchCities } from '@/services/weatherService';
import { CitySearchResult } from '@/types/weather';
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';

interface SearchBarProps {
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ initialValue = '' }) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<CitySearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { fetchWeatherForCity } = useWeatherContext();
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearch.trim().length < 2) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setIsLoading(true);
      try {
        const response = await searchCities(debouncedSearch);
        if (response.count === 0) {
          setSuggestions([]);
          setError('Invalid country or city');
          setShowSuggestions(false);
        } else {
          setSuggestions(response.list);
          setError(null);
          setShowSuggestions(true);
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setError('Failed to fetch city suggestions');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedSearch]);

  const handleSearch = async (cityName: string, countryCode: string) => {
    try {
      await fetchWeatherForCity(`${cityName}, ${countryCode}`);
      setError(null);
      setShowSuggestions(false);
      navigate('/');
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search country or city here..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (error) setError(null);
          }}
          className={`flex-1 h-10 ${error ? 'border-red-500' : ''}`}
          aria-label="Search for a city"
        />
        {isLoading && (
          <div className="absolute right-3 top-2.5">
            <div className="animate-spin h-5 w-5 border-2 border-weather-blue border-t-transparent rounded-full" />
          </div>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <Command className="absolute w-full mt-1 border rounded-lg shadow-lg bg-white z-50">
          <CommandList className="max-h-64 overflow-y-auto">
            <CommandGroup>
              {suggestions.map((city) => (
                <CommandItem
                  key={`${city.id}-${city.name}-${city.sys.country}`}
                  onSelect={() => handleSearch(city.name, city.sys.country)}
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                >
                  <MapPin className="h-4 w-4 text-weather-gray" />
                  <span>
                    {city.name}, {city.sys.country} ({Math.round(city.main.temp)}°C)
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      )}

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default SearchBar;
