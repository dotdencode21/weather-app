import { Module } from "@nestjs/common";
import { WeatherController } from "./weather.controller";
import { WeatherService } from "./weather.service";
import { MongooseModule } from "@nestjs/mongoose";
import { History, HistorySchema } from "src/db/schemas/history.schema";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }]),
    HttpModule
  ],
  controllers: [WeatherController],
  providers: [WeatherService]
})
export class WeatherModule {}