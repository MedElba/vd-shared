import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { TitleType } from '../common/constants/title-type';
import { Trim } from '../decorators/transforms.decorator';
import { CreatePuntiMappaDto } from '../puntimappa/create-puntimappa.dto';

export class CreateInserzionistiDto {
  @ApiProperty()
  @IsBoolean()
  active: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @ApiProperty({ enum: TitleType })
  @IsEnum(TitleType)
  title: TitleType;

  @ApiProperty()
  @IsString()
  @Trim()
  ragioneSociale: string;

  @ApiProperty()
  @IsString()
  @Trim()
  surname: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  locationPlace?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  comeRaggiungerci?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  email: string;

  @ApiProperty()
  @IsString()
  @Trim()
  phone: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  website?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  socialFacebook?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  socialLinkedin?: string;

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
  @Trim()
  descriptionShort: string;

  @ApiProperty()
  @IsString()
  @Trim()
  descriptionFull: string;

  //Sezione Immagini
  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  logoImg?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  locationImg?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  @IsOptional()
  images?: string;

  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => CreatePuntiMappaDto)
  geoPoint: CreatePuntiMappaDto;
}
