import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateContrattiDto {
  @ApiProperty()
  @IsNotEmpty()
  active: boolean;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiProperty()
  @IsDateString()
  onlineStartDate: Date;

  @ApiProperty()
  @IsDateString()
  onlineEndDate: Date;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  inserzionista_id: string;
}
