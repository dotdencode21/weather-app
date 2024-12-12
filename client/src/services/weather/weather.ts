export interface WeatherPayload {
  city: string;
}

export interface WeatherResponse {
  _id: string;
  city: string;
  country: string;
  temperature: number;
  temperatureText: string,
  image: string;
}