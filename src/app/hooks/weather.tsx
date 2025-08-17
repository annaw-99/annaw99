import { useState, useEffect } from 'react';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    condition: {
      text: string;
    };
  };
}

export const useWeather = (cities: string[] = []) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
  const [currentCityIndex, setCurrentCityIndex] = useState<number>(0);

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
        setWeatherLoading(true);
        const city = cities[currentCityIndex];
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        
        if (!apiKey) {
          console.error('WeatherAPI key is missing. Please check your .env file.');
          return;
        }

        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        
        const response = await fetch(url);
        
        if (response.ok) {
          const data: WeatherData = await response.json();
          setWeatherData(data);
        } else {
          const errorText = await response.text();
          console.error('Weather API error:', {
            status: response.status,
            statusText: response.statusText,
            errorBody: errorText
          });
        }
      } catch (error) {
        console.error('Network error fetching weather:', error);
      } finally {
        setWeatherLoading(false);
      }
    };

    if (cities.length > 0) {
      fetchWeather();
    }
  }, [currentCityIndex, cities]);

  const nextCity = (): void => {
    setCurrentCityIndex((prev) => (prev + 1) % cities.length);
  };

  const previousCity = (): void => {
    setCurrentCityIndex((prev) => (prev - 1 + cities.length) % cities.length);
  };

  return {
    weatherData,
    weatherLoading,
    currentCityIndex,
    nextCity,
    previousCity,
    currentCity: cities[currentCityIndex]
  };
};