
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { useWeatherContext } from '@/contexts/WeatherContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { currentWeather } = useWeatherContext();
  
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold text-weather-gray-dark">
          {location.pathname === '/' ? (
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5" />
              {currentWeather ? (
                <span>{currentWeather.name}, {currentWeather.sys.country}</span>
              ) : (
                <span>Loading location...</span>
              )}
            </div>
          ) : (
            <span>Weather Wise Compass</span>
          )}
        </Link>
        <Link 
          to="/search" 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Search"
        >
          <Search className="h-5 w-5 text-weather-gray-dark" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
