import { IsNotEmpty, IsOptional, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreateCategorieDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly fullname: string;

  @IsString()
  @Trim()
  readonly icon: string;

  @IsOptional()
  readonly parent?: string;

  @IsString()
  @IsOptional()
  @Trim()
  readonly image: string;
}
