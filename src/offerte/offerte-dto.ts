import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { InserzioniDto } from '../inserzioni/inserzioni-dto';

export class OfferteDto extends AbstractDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  images: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  inserzione: InserzioniDto;
}
