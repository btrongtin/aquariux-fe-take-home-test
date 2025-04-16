
import React from 'react';
import { 
  Cloud, 
  CloudDrizzle, 
  CloudFog, 
  CloudLightning, 
  CloudRain, 
  CloudSnow, 
  Sun, 
  CloudSun,
  Wind,
  Thermometer 
} from 'lucide-react';

interface WeatherIconProps {
  code: string | number;
  size?: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  code, 
  size = 24, 
  className = '' 
}) => {
  // Convert to string if number
  const iconCode = typeof code === 'number' ? code.toString() : code;
  
  // Map of weather codes to icons
  const getIconComponent = () => {
    // If using the OpenWeatherMap icon codes (e.g., "01d", "02n")
    if (typeof iconCode === 'string' && iconCode.length <= 3) {
      switch (iconCode) {
        case '01d':
        case '01n':
          return <Sun size={size} className={className} />;
        case '02d':
        case '02n':
          return <CloudSun size={size} className={className} />;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          return <Cloud size={size} className={className} />;
        case '09d':
        case '09n':
          return <CloudDrizzle size={size} className={className} />;
        case '10d':
        case '10n':
          return <CloudRain size={size} className={className} />;
        case '11d':
        case '11n':
          return <CloudLightning size={size} className={className} />;
        case '13d':
        case '13n':
          return <CloudSnow size={size} className={className} />;
        case '50d':
        case '50n':
          return <CloudFog size={size} className={className} />;
        default:
          return <Thermometer size={size} className={className} />;
      }
    }
    
    // For numeric weather codes
    const numericCode = parseInt(iconCode);
    if (numericCode >= 200 && numericCode < 300) {
      return <CloudLightning size={size} className={className} />;
    } else if (numericCode >= 300 && numericCode < 400) {
      return <CloudDrizzle size={size} className={className} />;
    } else if (numericCode >= 500 && numericCode < 600) {
      return <CloudRain size={size} className={className} />;
    } else if (numericCode >= 600 && numericCode < 700) {
      return <CloudSnow size={size} className={className} />;
    } else if (numericCode >= 700 && numericCode < 800) {
      return <CloudFog size={size} className={className} />;
    } else if (numericCode === 800) {
      return <Sun size={size} className={className} />;
    } else if (numericCode > 800 && numericCode < 900) {
      return <Cloud size={size} className={className} />;
    }
    
    // Default
    return <Thermometer size={size} className={className} />;
  };

  return getIconComponent();
};

export const WindDirectionIcon: React.FC<{ 
  degree: number; 
  speed: number;
  size?: number;
  className?: string;
}> = ({ degree, speed, size = 16, className = '' }) => {
  // Rotate arrow based on wind direction
  // Wind direction is where the wind is coming FROM, so add 180 degrees
  const rotationDegree = (degree + 180) % 360;

  return (
    <div className="flex items-center gap-1">
      <div 
        className={`transform ${className}`} 
        style={{ transform: `rotate(${rotationDegree}deg)` }}
      >
        <Wind size={size} />
      </div>
      <span>{speed} m/s</span>
    </div>
  );
};
