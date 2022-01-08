import { IsNotEmpty, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  vimeoId: string;

  @IsString()
  @Trim()
  fileName?: string;
}
