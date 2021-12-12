import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';

export class CategorieDto extends AbstractDto {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  parent?: string;

  @ApiPropertyOptional()
  icon: string;

  @ApiPropertyOptional()
  image: string;

  @ApiPropertyOptional()
  fullname: string;
}
