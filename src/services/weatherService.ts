import axios, { AxiosError } from 'axios';
import { endpoints, MOCK_MODE } from '@/config/api';
import { WeatherData, ForecastData, CitySearchResponse } from '@/types/weather';
import { mockCurrentWeather, mockForecast } from '@/mocks/weatherMocks';

const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.');
    }
    if (axiosError.response?.status === 403) {
      throw new Error('API key has expired or is inactive.');
    }
    if (axiosError.response?.status === 429) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    if (axiosError.response?.status === 404) {
      throw new Error('City not found. Please check the city name.');
    }
  }
  throw new Error('Failed to fetch weather data. Please try again.');
};

export const fetchCurrentWeather = async (
  city: string
): Promise<WeatherData> => {
  try {
    if (MOCK_MODE) {
      return mockCurrentWeather as WeatherData;
    }

    const response = await axios.get(endpoints.currentWeather(city));
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const fetchForecast = async (city: string): Promise<ForecastData> => {
  try {
    if (MOCK_MODE) {
      return mockForecast as ForecastData;
    }

    const response = await axios.get(endpoints.forecast(city));
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const searchCities = async (
  query: string
): Promise<CitySearchResponse> => {
  try {
    const response = await axios.get(endpoints.citySearch(query));
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export const getWeatherIconUrl = (iconCode: string): string => {
  return endpoints.weatherIcon(iconCode);
};
