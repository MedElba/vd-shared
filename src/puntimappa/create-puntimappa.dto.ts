import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';

export class CreatePuntiMappaDto {
  @ApiPropertyOptional()
  @IsOptional()
  lat: number;

  @ApiPropertyOptional()
  @IsOptional()
  lng: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  label: string; // Via Giuseppe Garibaldi 295, 92021, Aragona, Agrigento, ITA

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  countryCode: string; // ITA

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  region: string; // Sicilia

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  province: string; // Agrigento

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  city: string; // Aragona

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  zip: string; // 92021

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  street: string; // Via Giuseppe Garibaldi

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  addNum: string; // 295

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Trim()
  json?: string;
}
