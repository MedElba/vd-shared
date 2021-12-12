import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';

export class PuntiMappaDto extends AbstractDto {
  @ApiPropertyOptional()
  lat: number;

  @ApiPropertyOptional()
  lng: number;

  @ApiPropertyOptional()
  label: string; // Via Giuseppe Garibaldi 295, 92021, Aragona, Agrigento, ITA

  @ApiPropertyOptional()
  countryCode: string; // ITA

  @ApiPropertyOptional()
  region: string; // Sicilia

  @ApiPropertyOptional()
  province: string; // Agrigento

  @ApiPropertyOptional()
  city: string; // Aragona

  @ApiPropertyOptional()
  zip: string; // 92021

  @ApiPropertyOptional()
  street: string; // Via Giuseppe Garibaldi

  @ApiPropertyOptional()
  addNum: string; // 295

  @ApiPropertyOptional()
  json?: string;
}
