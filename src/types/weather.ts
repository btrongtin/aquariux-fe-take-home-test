export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherInfo[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherInfo[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface SearchHistoryItem {
  id: string;
  cityName: string;
  countryCode: string;
  timestamp: number;
}

export type GroupedForecast = {
  [date: string]: ForecastItem[];
};

export interface CitySearchResponse {
  count: number;
  list: CitySearchResult[];
}

export interface CitySearchResult {
  id: number;
  name: string;
  sys: {
    country: string;
  };
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
  };
}
