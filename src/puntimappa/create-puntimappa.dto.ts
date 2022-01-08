import { IsOptional, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreatePuntiMappaDto {
  @IsOptional()
  lat: number;

  @IsOptional()
  lng: number;

  @IsOptional()
  @IsString()
  @Trim()
  label: string; // Via Giuseppe Garibaldi 295, 92021, Aragona, Agrigento, ITA

  @IsOptional()
  @IsString()
  @Trim()
  countryCode: string; // ITA

  @IsOptional()
  @IsString()
  @Trim()
  region: string; // Sicilia

  @IsOptional()
  @IsString()
  @Trim()
  province: string; // Agrigento

  @IsOptional()
  @IsString()
  @Trim()
  city: string; // Aragona

  @IsOptional()
  @IsString()
  @Trim()
  zip: string; // 92021

  @IsOptional()
  @IsString()
  @Trim()
  street: string; // Via Giuseppe Garibaldi

  @IsOptional()
  @IsString()
  @Trim()
  addNum: string; // 295

  @IsOptional()
  @IsString()
  @Trim()
  json?: string;
}
