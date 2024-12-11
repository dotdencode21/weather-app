import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class History {
  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  temperature: number;

  @Prop()
  temperatureText: string;

  @Prop()
  image: string;
}

export const HistorySchema = SchemaFactory.createForClass(History);