
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useWeather } from '@/hooks/useWeather';
import { WeatherData, ForecastData, GroupedForecast } from '@/types/weather';

interface WeatherContextType {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  groupedForecast: GroupedForecast | null;
  loading: boolean;
  error: string | null;
  currentCity: string;
  fetchWeatherForCity: (city: string) => Promise<void>;
  setCurrentCity: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState<string>('Singapore');
  const { 
    currentWeather, 
    forecast, 
    groupedForecast,
    loading, 
    error, 
    fetchWeatherForCity 
  } = useWeather(currentCity);

  const updateCity = (city: string) => {
    setCurrentCity(city);
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecast,
        groupedForecast,
        loading,
        error,
        currentCity,
        fetchWeatherForCity,
        setCurrentCity: updateCity
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};
