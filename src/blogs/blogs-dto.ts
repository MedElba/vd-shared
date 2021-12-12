import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { UserDto } from '../user/user-dto';

export class BlogsDto extends AbstractDto {
  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  metaDesc?: string;

  @ApiPropertyOptional()
  imgHeader?: string;

  @ApiPropertyOptional()
  imgGallery?: string;

  @ApiPropertyOptional()
  content?: string;

  @ApiPropertyOptional()
  url?: string;

  @ApiProperty()
  showComm: boolean;

  @ApiProperty()
  publish: boolean;

  @ApiProperty()
  user: UserDto;
}
