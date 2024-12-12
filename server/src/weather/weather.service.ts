import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { History } from "src/db/schemas/history.schema";
import { CreateHistoryDto } from "./dto/create-history.dto";
import { OpenWeatherService } from "src/api/open-weather/open-weather.service";

@Injectable()
export class WeatherService {
  constructor(
    @InjectModel(History.name) private historyModel: Model<History>,
    private openWeatherService: OpenWeatherService
  ) {}

  async findAll(): Promise<History[]> {
    try {      
      return await this.historyModel.find().limit(100);
    } catch (e: unknown) {
      throw new InternalServerErrorException()
    }
  }

  async findByCity(city: string): Promise<History> {
    try {
      return await this.historyModel.findOne({ city });
    } catch (e: unknown) {
      throw new InternalServerErrorException()
    }
  }

  async create({ city }: CreateHistoryDto) {
    if (!city) {        
      throw new BadRequestException();
    }    

    try {
      const response = await this.openWeatherService.findWeatherByCity(city);

      if (response && Object.keys(response).length) {
        const { current, location } = response;

        const history = {
          city: location.name,
          country: location.country,
          temperature: current.temp_c,
          temperatureText: current.condition.text,
          image: `https:${current.condition.icon}`
        }

        return await this.historyModel.create(history);
      }
    } catch (e: unknown) {
      throw new InternalServerErrorException()
    }
  }
}