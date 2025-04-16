
import React from 'react';
import { format } from 'date-fns';
import { ForecastItem as ForecastItemType } from '@/types/weather';
import { getWeatherIconUrl } from '@/services/weatherService';
import { 
  formatTemperature, 
  getWeatherDescription 
} from '@/utils/weatherUtils';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface ForecastTableProps {
  forecastItems: ForecastItemType[];
  date: string;
}

const ForecastTable: React.FC<ForecastTableProps> = ({ forecastItems, date }) => {
  const isMobile = useIsMobile();
  const isToday = new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
  const displayDate = isToday ? 'Today' : format(new Date(date), 'dd MMMM');

  // Render a compact card on mobile
  if (isMobile) {
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="font-medium text-lg mb-2 text-weather-gray-dark">{displayDate}</h3>
        <div className="space-y-3">
          {forecastItems.map((item) => (
            <div key={item.dt} className="flex items-center justify-between">
              <div className="text-sm text-weather-gray-dark w-1/6">
                {format(new Date(item.dt * 1000), 'HH:mm')}
              </div>
              <div className="flex items-center gap-1">
                <img 
                  src={getWeatherIconUrl(item.weather[0].icon)} 
                  alt={item.weather[0].description} 
                  className="w-8 h-8"
                />
                <span className="text-sm">
                  {formatTemperature(item.main.temp_min)}/
                  {formatTemperature(item.main.temp_max)}
                </span>
              </div>
              <div className="text-xs text-weather-gray w-1/3 text-right">
                {getWeatherDescription(item.weather[0].description)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render a detailed table on larger screens
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="font-medium text-lg text-weather-gray-dark">{displayDate}</h3>
      </div>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-medium text-weather-gray-dark">Time</th>
            <th className="py-2 px-4 text-center text-sm font-medium text-weather-gray-dark">Weather</th>
            <th className="py-2 px-4 text-right text-sm font-medium text-weather-gray-dark">Temperature</th>
            <th className="py-2 px-4 text-right text-sm font-medium text-weather-gray-dark">Description</th>
          </tr>
        </thead>
        <tbody>
          {forecastItems.map((item) => {
            const time = format(new Date(item.dt * 1000), 'HH:mm');
            const weatherInfo = item.weather[0];
            const conditionClass = weatherInfo.description.toLowerCase().includes('rain') 
              ? 'bg-weather-rain-light/10' 
              : '';
            
            return (
              <tr key={item.dt} className={`border-t ${conditionClass}`}>
                <td className="py-3 px-4 text-sm text-weather-gray-dark">{time}</td>
                <td className="py-3 px-4 flex justify-center">
                  <img 
                    src={getWeatherIconUrl(weatherInfo.icon)} 
                    alt={weatherInfo.description} 
                    className="w-10 h-10"
                  />
                </td>
                <td className="py-3 px-4 text-right text-sm">
                  <span className="text-weather-gray-dark">
                    {formatTemperature(item.main.temp_min)}/
                    {formatTemperature(item.main.temp_max)}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-sm text-weather-gray">
                  {getWeatherDescription(weatherInfo.description)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
