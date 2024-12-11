import { Module } from "@nestjs/common";
import { WeatherController } from "./weather.controller";
import { WeatherService } from "./weather.service";
import { MongooseModule } from "@nestjs/mongoose";
import { History, HistorySchema } from "src/db/schemas/history.schema";
import { OpenWeatherModule } from "src/api/open-weather/open-weather.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }]),
    OpenWeatherModule
  ],
  controllers: [WeatherController],
  providers: [WeatherService]
})
export class WeatherModule {}