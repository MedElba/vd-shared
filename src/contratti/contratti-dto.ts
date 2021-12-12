import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { InserzionistiDto } from '../inserzionisti/inserzionisti-dto';

export class ContrattiDto extends AbstractDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  onlineStartDate: Date;

  @ApiProperty()
  onlineEndDate: Date;

  @ApiProperty()
  inserzionista: InserzionistiDto;

  @ApiProperty()
  price: number;
}
