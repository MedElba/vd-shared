import { IsDateString, IsNotEmpty, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreateOfferteDto {
  active: boolean;

  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Trim()
  images: string;

  @IsNotEmpty()
  @IsString()
  @Trim()
  description: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsString()
  inserzione_id: string;
}
