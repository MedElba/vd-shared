import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateContrattiDto {
  @IsNotEmpty()
  active: boolean;

  @IsDateString()
  date: Date;

  @IsDateString()
  onlineStartDate: Date;

  @IsDateString()
  onlineEndDate: Date;

  @IsNumber()
  price: number;

  @IsString()
  inserzionista_id: string;
}
