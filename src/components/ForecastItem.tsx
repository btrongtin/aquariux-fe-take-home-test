
import React from 'react';
import { format } from 'date-fns';
import { ForecastItem as ForecastItemType } from '@/types/weather';
import { 
  formatTemperature,
  getWeatherDescription
} from '@/utils/weatherUtils';
import { getWeatherIconUrl } from '@/services/weatherService';

interface ForecastItemProps {
  forecastItem: ForecastItemType;
}

const ForecastItem: React.FC<ForecastItemProps> = ({ forecastItem }) => {
  const { dt, weather, main } = forecastItem;
  const time = format(new Date(dt * 1000), 'HH:mm');
  const weatherInfo = weather[0];
  const minTemp = formatTemperature(main.temp_min);
  const maxTemp = formatTemperature(main.temp_max);
  
  // Determine background color based on weather condition
  let conditionClass = "";
  const description = weatherInfo.description.toLowerCase();
  
  if (description.includes("rain")) {
    if (description.includes("light")) {
      conditionClass = "bg-weather-rain-light/10";
    } else if (description.includes("heavy")) {
      conditionClass = "bg-weather-rain-heavy/10";
    } else {
      conditionClass = "bg-weather-rain-moderate/10";
    }
  } else if (description.includes("cloud")) {
    conditionClass = "bg-weather-cloud/10";
  } else if (description.includes("clear")) {
    conditionClass = "bg-weather-sun/10";
  } else {
    conditionClass = "bg-weather-gray-light/10";
  }

  return (
    <div className={`flex items-center justify-between py-3 px-4 rounded-md ${conditionClass}`}>
      <div className="w-16 text-left">
        <span className="text-weather-gray-dark font-medium">{time}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <img 
          src={getWeatherIconUrl(weatherInfo.icon)} 
          alt={weatherInfo.description}
          className="w-8 h-8"
        />
        <span className="text-weather-gray-dark">
          {minTemp}/{maxTemp}
        </span>
      </div>
      
      <div className="w-36 text-right">
        <span className="text-weather-gray">
          {getWeatherDescription(weatherInfo.description)}
        </span>
      </div>
    </div>
  );
};

export default ForecastItem;
