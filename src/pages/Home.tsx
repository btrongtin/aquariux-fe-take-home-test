
import React from 'react';
import { useWeatherContext } from '@/contexts/WeatherContext';
import CurrentWeather from '@/components/CurrentWeather';
import ForecastSection from '@/components/ForecastSection';
import ForecastTable from '@/components/ForecastTable';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorDisplay from '@/components/ErrorDisplay';
import { useIsDesktop } from '@/hooks/useMediaQuery';

const Home: React.FC = () => {
  const { 
    currentWeather, 
    groupedForecast, 
    loading, 
    error 
  } = useWeatherContext();
  
  const isDesktop = useIsDesktop();

  return (
    <div className="container mx-auto px-4 py-6">
      {error && <ErrorDisplay message={error} />}
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {currentWeather && (
            <CurrentWeather weatherData={currentWeather} />
          )}
          
          {groupedForecast && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-weather-gray-dark mb-4">
                5-day Forecast (3 Hours)
              </h2>
              
              {isDesktop ? (
                <ForecastSection groupedForecast={groupedForecast} />
              ) : (
                <div className="space-y-4">
                  {Object.entries(groupedForecast).map(([date, items]) => (
                    <ForecastTable 
                      key={date} 
                      date={date} 
                      forecastItems={items} 
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
