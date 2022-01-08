import { IsNotEmpty, IsString } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";

export class CreateGruppiDto {
  active: boolean;

  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;
}
