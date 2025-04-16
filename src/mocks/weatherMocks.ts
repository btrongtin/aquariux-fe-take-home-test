
// Mock data for development to avoid excessive API calls

export const mockCurrentWeather = {
  coord: { lon: 103.8501, lat: 1.2897 },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d"
    }
  ],
  base: "stations",
  main: {
    temp: 26,
    feels_like: 26.8,
    temp_min: 25.5,
    temp_max: 27.2,
    pressure: 1009,
    humidity: 96
  },
  visibility: 8000,
  wind: {
    speed: 1.54,
    deg: 180
  },
  clouds: {
    all: 75
  },
  dt: 1706064000, // January 24, 2024
  sys: {
    type: 2,
    id: 265794,
    country: "SG",
    sunrise: 1706053087,
    sunset: 1706096456
  },
  timezone: 28800,
  id: 1880252,
  name: "Singapore",
  cod: 200
};

export const mockForecast = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1706076000, // January 24, 2024 - 08:00
      main: {
        temp: 25.35,
        feels_like: 26.1,
        temp_min: 25.22,
        temp_max: 25.35,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 92,
        temp_kf: 0.13
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 3.82, deg: 346, gust: 6.78 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 6.23 },
      sys: { pod: "d" },
      dt_txt: "2024-01-24 08:00:00"
    },
    {
      dt: 1706086800, // January 24, 2024 - 11:00
      main: {
        temp: 25.02,
        feels_like: 25.71,
        temp_min: 24.82,
        temp_max: 25.02,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 91,
        temp_kf: 0.2
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d"
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 3.72, deg: 299, gust: 6.48 },
      visibility: 8000,
      pop: 1,
      rain: { "3h": 15.55 },
      sys: { pod: "d" },
      dt_txt: "2024-01-24 11:00:00"
    },
    {
      dt: 1706097600, // January 24, 2024 - 14:00
      main: {
        temp: 24.31,
        feels_like: 24.95,
        temp_min: 24.31,
        temp_max: 24.31,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d"
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 2.44, deg: 285, gust: 4.94 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 12.39 },
      sys: { pod: "d" },
      dt_txt: "2024-01-24 14:00:00"
    },
    {
      dt: 1706108400, // January 24, 2024 - 17:00
      main: {
        temp: 24.02,
        feels_like: 24.62,
        temp_min: 24.02,
        temp_max: 24.02,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      clouds: { all: 96 },
      wind: { speed: 2.12, deg: 249, gust: 4.71 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 5.73 },
      sys: { pod: "n" },
      dt_txt: "2024-01-24 17:00:00"
    },
    {
      dt: 1706119200, // January 24, 2024 - 20:00
      main: {
        temp: 25.12,
        feels_like: 25.7,
        temp_min: 25.12,
        temp_max: 25.12,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      clouds: { all: 80 },
      wind: { speed: 1.8, deg: 256, gust: 3.38 },
      visibility: 10000,
      pop: 0.78,
      rain: { "3h": 0.4 },
      sys: { pod: "n" },
      dt_txt: "2024-01-24 20:00:00"
    },
    {
      dt: 1706130000, // January 24, 2024 - 23:00
      main: {
        temp: 25.14,
        feels_like: 25.74,
        temp_min: 25.14,
        temp_max: 25.14,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 2.21, deg: 264, gust: 3.95 },
      visibility: 10000,
      pop: 0.48,
      sys: { pod: "n" },
      dt_txt: "2024-01-24 23:00:00"
    },
    {
      dt: 1706140800, // January 25, 2024 - 02:00
      main: {
        temp: 24.9,
        feels_like: 25.49,
        temp_min: 24.8,
        temp_max: 24.9,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 86,
        temp_kf: 0.1
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.91, deg: 253, gust: 3.15 },
      visibility: 10000,
      pop: 0.13,
      sys: { pod: "n" },
      dt_txt: "2024-01-25 02:00:00"
    },
    {
      dt: 1706151600, // January 25, 2024 - 05:00
      main: {
        temp: 24.88,
        feels_like: 25.48,
        temp_min: 24.88,
        temp_max: 24.88,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 87,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: { all: 100 },
      wind: { speed: 1.98, deg: 260, gust: 3.3 },
      visibility: 10000,
      pop: 0.06,
      sys: { pod: "n" },
      dt_txt: "2024-01-25 05:00:00"
    },
    {
      dt: 1706162400, // January 25, 2024 - 08:00
      main: {
        temp: 25.31,
        feels_like: 25.92,
        temp_min: 25.31,
        temp_max: 25.31,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      clouds: { all: 84 },
      wind: { speed: 2.09, deg: 246, gust: 3.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2024-01-25 08:00:00"
    }
  ],
  city: {
    id: 1880252,
    name: "Singapore",
    coord: { lat: 1.2897, lon: 103.8501 },
    country: "SG",
    population: 3547809,
    timezone: 28800,
    sunrise: 1706053087,
    sunset: 1706096456
  }
};
