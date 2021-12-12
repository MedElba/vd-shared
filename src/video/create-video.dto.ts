import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';

export class CreateVideoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  vimeoId: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  fileName?: string;
}
