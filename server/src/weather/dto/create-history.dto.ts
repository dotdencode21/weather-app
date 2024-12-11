import { IsString } from "class-validator";

export class CreateHistoryDto {

  @IsString()
  city: string;
}