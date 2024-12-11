import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { WeatherResponse } from "./open-weather.interface";

@Injectable()
export class OpenWeatherService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async findWeatherByCity(city: string): Promise<WeatherResponse> {    
    if (!city) {
      throw new BadRequestException();
    }

    try {
      const baseUrl = this.configService.get("WEATHER_API_URL");
      const apiKey = this.configService.get("WEATHER_API_KEY");

      const { data } = await this.httpService.axiosRef.get<WeatherResponse>(
        `${baseUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      return data;
    } catch (e: unknown) {
      throw new InternalServerErrorException()
    }
  }
}