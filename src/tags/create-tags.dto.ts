import { IsNotEmpty, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreateTagsDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;
}
