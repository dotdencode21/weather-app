import { Body, Controller, Get, Post } from "@nestjs/common";
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

  @Post('create')
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.weatherService.create(createHistoryDto);
  }
}