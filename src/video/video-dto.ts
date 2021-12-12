import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { Trim } from '../decorators/transforms.decorator';

export class VideoDto extends AbstractDto {
  @ApiProperty()
  vimeoId: string;

  @ApiPropertyOptional()
  fileName?: string;
}
