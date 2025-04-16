
import { useState, useEffect, useCallback } from 'react';
import { fetchCurrentWeather, fetchForecast } from '@/services/weatherService';
import { WeatherData, ForecastData, GroupedForecast } from '@/types/weather';
import { groupForecastByDay } from '@/utils/weatherUtils';
import { addToSearchHistory } from '@/utils/storageUtils';

interface UseWeatherReturn {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  groupedForecast: GroupedForecast | null;
  loading: boolean;
  error: string | null;
  fetchWeatherForCity: (city: string) => Promise<void>;
}

export const useWeather = (initialCity: string = 'Singapore'): UseWeatherReturn => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [groupedForecast, setGroupedForecast] = useState<GroupedForecast | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherForCity = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch current weather and forecast in parallel
      const [weatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city)
      ]);
      
      setCurrentWeather(weatherData);
      setForecast(forecastData);
      
      // Group forecast by day
      const grouped = groupForecastByDay(forecastData);
      setGroupedForecast(grouped);
      
      // Add to search history
      addToSearchHistory(weatherData.name, weatherData.sys.country);
    } catch (error) {
      console.error('Error in useWeather:', error);
      setError(`Failed to fetch weather data - Reason: ${error}`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data fetching
  useEffect(() => {
    fetchWeatherForCity(initialCity);
  }, [initialCity, fetchWeatherForCity]);

  return {
    currentWeather,
    forecast,
    groupedForecast,
    loading,
    error,
    fetchWeatherForCity
  };
};
