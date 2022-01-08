import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from "class-validator";

import { RoleType } from "../common/constants/role-type";
import { Trim } from "../decorators/transforms.decorator";

export class UserUpdateDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly lastName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Trim()
  readonly email: string;

  @IsPhoneNumber()
  @IsOptional()
  phone: string;

  @IsEnum(RoleType)
  role: RoleType;
}
