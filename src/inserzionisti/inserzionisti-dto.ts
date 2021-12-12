import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { TitleType } from '../common/constants/title-type';
import { AbstractDto } from '../common/abstract.dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';

export class InserzionistiDto extends AbstractDto {
  @ApiPropertyOptional()
  active: boolean;

  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional({ enum: TitleType })
  title: TitleType;

  @ApiProperty()
  ragioneSociale: string;

  @ApiProperty()
  surname: string;

  @ApiPropertyOptional()
  locationPlace?: string;

  @ApiPropertyOptional()
  comeRaggiungerci?: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  website?: string;

  @ApiPropertyOptional()
  socialFacebook?: string;

  @ApiPropertyOptional()
  socialLinkedin?: string;

  @ApiPropertyOptional()
  socialInstagram?: string;

  @ApiPropertyOptional()
  socialGoogleplus?: string;

  @ApiPropertyOptional()
  socialTwitter?: string;

  @ApiProperty()
  descriptionShort: string;

  @ApiProperty()
  descriptionFull: string;

  //Sezione Immagini
  @ApiPropertyOptional()
  logoImg?: string;

  @ApiPropertyOptional()
  locationImg?: string;

  @ApiPropertyOptional()
  images?: string;

  @ApiPropertyOptional()
  geoPoint: PuntiMappaDto;
}
