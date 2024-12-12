import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { CreateHistoryDto } from "./dto/create-history.dto";

@Controller('weathers')
export class WeatherController {
  constructor(
    private weatherService: WeatherService,
  ) {}

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }

  @Get(":city")
  findByCity(@Param("city") city: string) {
    return this.weatherService.findByCity(city);
  }

  @Post()
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.weatherService.create(createHistoryDto);
  }
}