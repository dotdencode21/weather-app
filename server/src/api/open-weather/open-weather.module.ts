import { Module } from "@nestjs/common";
import { OpenWeatherService } from "./open-weather.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [OpenWeatherService],
  exports: [OpenWeatherService]
})
export class OpenWeatherModule {}