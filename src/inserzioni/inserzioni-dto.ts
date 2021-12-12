import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { ContrattiDto } from '../contratti/contratti-dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';
import type { TagsDto } from '../tags/tags-dto';
import { VideoDto } from '../video/video-dto';

export class InserzioniDto extends AbstractDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  images: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiPropertyOptional()
  socialFacebook?: string;

  @ApiPropertyOptional()
  socialInstagram?: string;

  @ApiPropertyOptional()
  socialGoogleplus?: string;

  @ApiPropertyOptional()
  socialTwitter?: string;

  @ApiProperty()
  contratto: ContrattiDto;

  @ApiProperty()
  video: VideoDto;

  @ApiProperty()
  tags?: TagsDto[];

  @ApiPropertyOptional()
  geoPoint: PuntiMappaDto;
}
