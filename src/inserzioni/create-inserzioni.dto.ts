import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';
import { CreatePuntiMappaDto } from '../puntimappa/create-puntimappa.dto';

export class CreateInserzioniDto {
  @ApiProperty()
  @IsBoolean()
  active: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  description: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  images: string;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  endDate: Date;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  socialFacebook?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  socialInstagram?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  socialGoogleplus?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  socialTwitter?: string;

  @ApiProperty()
  @IsString()
  contratto_id: string;

  @ApiProperty()
  @IsString()
  video_id: string;

  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => CreatePuntiMappaDto)
  geoPoint: CreatePuntiMappaDto;
}
