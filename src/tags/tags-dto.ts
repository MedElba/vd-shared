import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';

export class TagsDto extends AbstractDto {
  @ApiProperty()
  name: string;
}
