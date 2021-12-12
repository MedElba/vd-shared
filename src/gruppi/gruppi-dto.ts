import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';

export class GruppiDto extends AbstractDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  name: string;
}
