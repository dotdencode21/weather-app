import axios from "axios";
import { WeatherPayload, WeatherResponse } from "./weather";

class WeatherService {
  private serverUrl: string = import.meta.env.VITE_SERVER_URL;

  async getAllWeathers(): Promise<WeatherResponse[] | undefined> {
    try {
      const { data } = await axios.get<WeatherResponse[]>(`${this.serverUrl}/weathers`);

      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async getWeatherByCity(city: string): Promise<WeatherResponse | undefined> {    
    try {
      const { data } = await axios.get<WeatherResponse>(`${this.serverUrl}/weathers/${city}`);

      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  }

  async createWeather(payload: WeatherPayload): Promise<WeatherResponse | undefined> {
    try {
      const { data } = await axios.post<WeatherResponse>(`${this.serverUrl}/weathers`, payload);

      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  }
}

export const weatherService = new WeatherService();