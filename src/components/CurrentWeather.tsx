
import React from 'react';
import { format } from 'date-fns';
import { WeatherData } from '@/types/weather';
import { 
  formatTemperature,
  getWeatherDescription,
  getWindDirectionRotation,
  formatVisibility
} from '@/utils/weatherUtils';
import { getWeatherIconUrl } from '@/services/weatherService';
import { ArrowUp } from 'lucide-react';

interface CurrentWeatherProps {
  weatherData: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  const {
    weather,
    main,
    wind,
    visibility,
    dt
  } = weatherData;

  const weatherInfo = weather[0];
  const date = new Date(dt * 1000);
  const formattedDate = format(date, 'MMMM d, yyyy');
  const windRotation = getWindDirectionRotation(wind.deg);

  return (
    <div className="bg-white rounded-lg shadow-md py-6 px-2 mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-weather-gray">{formattedDate}</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src={getWeatherIconUrl(weatherInfo.icon)} 
              alt={weatherInfo.description}
              className="w-24 h-24"
            />
          </div>
          
          <div className="text-center mt-2">
            <h1 className="text-5xl font-bold text-weather-gray-dark">
              {formatTemperature(main.temp)}
            </h1>
            <p className="text-weather-gray mt-1">
              {getWeatherDescription(weatherInfo.description)}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-weather-gray mb-1">Humidity</p>
            <p className="text-lg sm:text-xl font-medium text-weather-gray-dark">{main.humidity} %</p>
          </div>
          
          <div className="text-center">
            <p className="text-xs sm:text-sm text-weather-gray mb-1">Winds</p>
            <div className="flex items-center justify-center gap-1">
              <ArrowUp 
                className="h-4 w-4 text-weather-gray-dark" 
                style={{ transform: `rotate(${windRotation}deg)` }}
              />
              <p className="text-lg sm:text-xl font-medium text-weather-gray-dark">
                {wind.speed} m/s
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xs sm:text-sm text-weather-gray mb-1">Visibility</p>
            <p className="text-lg sm:text-xl font-medium text-weather-gray-dark">
              {formatVisibility(visibility)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

