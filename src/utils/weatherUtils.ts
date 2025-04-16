
import { format } from 'date-fns';
import { ForecastData, ForecastItem, GroupedForecast } from '@/types/weather';

// Format temperature
export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

// Format date
export const formatDate = (timestamp: number): string => {
  return format(new Date(timestamp * 1000), 'MMMM d, yyyy');
};

// Format time
export const formatTime = (timestamp: number): string => {
  return format(new Date(timestamp * 1000), 'HH:mm');
};

// Format date for grouping
export const formatDateForGrouping = (timestamp: number): string => {
  return format(new Date(timestamp * 1000), 'yyyy-MM-dd');
};

// Get weather description with first letter capitalized
export const getWeatherDescription = (description: string): string => {
  return description.charAt(0).toUpperCase() + description.slice(1);
};

// Group forecast data by day
export const groupForecastByDay = (forecastData: ForecastData): GroupedForecast => {
  const grouped: GroupedForecast = {};
  
  forecastData.list.forEach(item => {
    const date = formatDateForGrouping(item.dt);
    
    if (!grouped[date]) {
      grouped[date] = [];
    }
    
    grouped[date].push(item);
  });
  
  return grouped;
};

// Get wind direction arrow rotation based on wind degree
export const getWindDirectionRotation = (deg: number): number => {
  // Wind direction is where the wind is coming FROM, 
  // so we need to add 180 degrees to point the arrow correctly
  return (deg + 180) % 360;
};

// Format visibility in kilometers
export const formatVisibility = (visibility: number): string => {
  return `${(visibility / 1000).toFixed(0)} km`;
};

// Get weather condition class for styling based on weather code
export const getWeatherConditionClass = (weatherId: number): string => {
  // Weather condition codes: https://openweathermap.org/weather-conditions
  if (weatherId >= 200 && weatherId < 300) {
    return 'thunderstorm';
  } else if (weatherId >= 300 && weatherId < 400) {
    return 'drizzle';
  } else if (weatherId >= 500 && weatherId < 600) {
    return 'rain';
  } else if (weatherId >= 600 && weatherId < 700) {
    return 'snow';
  } else if (weatherId >= 700 && weatherId < 800) {
    return 'atmosphere';
  } else if (weatherId === 800) {
    return 'clear';
  } else if (weatherId > 800) {
    return 'clouds';
  }
  return 'default';
};

// Get min and max temperatures for a list of forecast items
export const getMinMaxTemp = (items: ForecastItem[]): { min: number; max: number } => {
  let min = Infinity;
  let max = -Infinity;
  
  items.forEach(item => {
    if (item.main.temp_min < min) min = item.main.temp_min;
    if (item.main.temp_max > max) max = item.main.temp_max;
  });
  
  return { 
    min: Math.round(min), 
    max: Math.round(max) 
  };
};
