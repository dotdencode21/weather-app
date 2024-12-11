interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface WeatherCurrent {
  temp_c: number;
  condition: {
    text: string;
    icon: string,
  }
}

export interface WeatherResponse {
  location: WeatherLocation;
  current: WeatherCurrent;
}