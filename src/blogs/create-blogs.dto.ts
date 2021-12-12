import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

import { Trim } from '../decorators/transforms.decorator';

export class CreateBlogsDto {
  @ApiProperty()
  @IsString()
  @Trim()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  metaDesc?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  imgHeader?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  imgGallery?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  content?: string;

  @ApiPropertyOptional()
  @IsString()
  @Trim()
  url?: string;

  @ApiProperty()
  @IsBoolean()
  showComm: boolean;

  @ApiProperty()
  @IsBoolean()
  publish: boolean;

  @ApiProperty()
  @IsString()
  user_id: string;
}
