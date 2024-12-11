import { Controller, Get, Post } from "@nestjs/common";

@Controller('weather')
export class WeatherController {
  constructor() {}

  @Get()
  findAll() {}

  @Post('create')
  create() {}
}