import { ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../common/constants/role-type';
import { AbstractDto } from '../common/abstract.dto';

export class UserDto extends AbstractDto {
  @ApiPropertyOptional()
  firstName: string;

  @ApiPropertyOptional()
  lastName: string;

  @ApiPropertyOptional()
  username: string;

  @ApiPropertyOptional({ enum: RoleType })
  role: RoleType;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  avatar: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional()
  isActive: boolean;
}
