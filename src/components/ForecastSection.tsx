
import React from 'react';
import { format } from 'date-fns';
import { GroupedForecast } from '@/types/weather';
import ForecastItem from './ForecastItem';

interface ForecastSectionProps {
  groupedForecast: GroupedForecast;
}

const ForecastSection: React.FC<ForecastSectionProps> = ({ groupedForecast }) => {
  const dates = Object.keys(groupedForecast);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {dates.map(date => {
            const forecastItems = groupedForecast[date] || [];
            const isToday = date === dates[0];
            const displayDate = isToday ? 'Today' : format(new Date(date), 'dd MMMM');

            return (
              <div key={date}>
                <h3 className="text-lg font-medium text-weather-gray-dark mb-3">
                  {displayDate}
                </h3>
                <div className="space-y-2">
                  {forecastItems.map(item => (
                    <ForecastItem key={item.dt} forecastItem={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForecastSection;
