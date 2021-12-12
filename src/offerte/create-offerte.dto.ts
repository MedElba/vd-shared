import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';

export class CreateOfferteDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Trim()
  images: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Trim()
  description: string;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  endDate: Date;

  @ApiProperty()
  @IsString()
  inserzione_id: string;
}
