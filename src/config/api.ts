
// API configuration for OpenWeather API
export const WEATHER_API_KEY = "5796abbde9106b7da4febfae8c44c232";

export const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const endpoints = {
  currentWeather: (city: string) => 
    `${API_BASE_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`,
  forecast: (city: string) => 
    `${API_BASE_URL}/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`,
  weatherIcon: (iconCode: string) => 
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
  citySearch: (query: string) =>
    `${API_BASE_URL}/find?q=${query}&appid=${WEATHER_API_KEY}&units=metric`
};

// Disable mock mode to use real API
export const MOCK_MODE = false;
