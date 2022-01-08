import { Type } from "class-transformer";
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";

import { TitleType } from "../common/constants/title-type";
import { Trim } from "../decorators/transforms.decorator";
import { CreatePuntiMappaDto } from "../puntimappa/create-puntimappa.dto";

export class CreateInserzionistiDto {
  @IsBoolean()
  active: boolean;

  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @IsEnum(TitleType)
  title: TitleType;

  @IsString()
  @Trim()
  ragioneSociale: string;

  @IsString()
  @Trim()
  surname: string;

  @IsString()
  @Trim()
  @IsOptional()
  locationPlace?: string;

  @IsString()
  @Trim()
  @IsOptional()
  comeRaggiungerci?: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  email: string;

  @IsString()
  @Trim()
  phone: string;

  @IsString()
  @Trim()
  @IsOptional()
  website?: string;

  @IsString()
  @Trim()
  @IsOptional()
  socialFacebook?: string;

  @IsString()
  @Trim()
  @IsOptional()
  socialLinkedin?: string;

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
  @Trim()
  descriptionShort: string;

  @IsString()
  @Trim()
  descriptionFull: string;

  //Sezione Immagini

  @IsString()
  @Trim()
  @IsOptional()
  logoImg?: string;

  @IsString()
  @Trim()
  @IsOptional()
  locationImg?: string;

  @IsString()
  @Trim()
  @IsOptional()
  images?: string;

  @ValidateNested()
  @Type(() => CreatePuntiMappaDto)
  geoPoint: CreatePuntiMappaDto;
}
