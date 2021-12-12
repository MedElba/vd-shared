import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';

export class CreateCategorieDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly fullname: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  readonly icon: string;

  @ApiProperty()
  @IsOptional()
  readonly parent?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Trim()
  readonly image: string;
}
