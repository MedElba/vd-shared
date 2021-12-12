import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';

export class CreateGruppiDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;
}
