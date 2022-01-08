import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

import { Trim } from "../decorators/transforms.decorator";
import { CreatePuntiMappaDto } from "../puntimappa/create-puntimappa.dto";

export class CreateInserzioniDto {
  @IsBoolean()
  active: boolean;

  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  title: string;

  @IsString()
  @Trim()
  description: string;

  @IsString()
  @Trim()
  @IsOptional()
  images: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsString()
  @Trim()
  @IsOptional()
  socialFacebook?: string;

  @IsString()
  @Trim()
  @IsOptional()
  socialInstagram?: string;

  @IsString()
  @Trim()
  @IsOptional()
  socialGoogleplus?: string;

  @IsString()
  @Trim()
  @IsOptional()
  socialTwitter?: string;

  @IsString()
  contratto_id: string;

  @IsString()
  video_id: string;

  @ValidateNested()
  @Type(() => CreatePuntiMappaDto)
  geoPoint: CreatePuntiMappaDto;
}
