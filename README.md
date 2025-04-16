
# Weather Wise Compass 🌦️

A beautiful and responsive weather application built with React, TypeScript, and Tailwind CSS. Get current weather conditions and a 5-day forecast for any city.

Live demo: https://tinbui-aquariux-fe-takehometest.netlify.app/

## Features

- 🌡️ Current weather display with temperature, description, humidity, wind direction, and visibility
- 📅 5-day forecast with 3-hour intervals in a clean tabular format
- 🔍 Search functionality with secure encrypted history storage
- 📱 Fully responsive design across all devices
- 🔐 Secure handling of API keys and local storage

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Shadcn UI components
- OpenWeatherMap API for weather data
- Local storage with encryption for search history
- ESLint and Prettier for code quality

## Setup and Usage

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.template` to `.env` and set up your OpenWeatherMap API key in field `VITE_WEATHER_API_KEY`
4. Start the development server: `npm run dev`

## Project Structure

```
src/
├── components/        # UI components
├── contexts/          # React contexts for state management
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── services/          # API service functions
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
├── mocks/             # Mock data for development
└── config/            # Application configuration
```

## API Usage

The application uses the OpenWeatherMap API to fetch:
- Current weather data
- 5-day forecast with 3-hour intervals

During development, mock data is used to avoid excessive API calls.

## Security

- Search history is encrypted before storing in localStorage
- API keys are handled securely (would normally be in environment variables)

## Responsiveness

The application is fully responsive and compatible with:
- Mobile devices
- Tablets
- Desktop computers

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Lucide Icons](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
