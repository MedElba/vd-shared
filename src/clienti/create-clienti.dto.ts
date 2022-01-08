import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";
import { CreatePuntiMappaDto } from "../puntimappa/create-puntimappa.dto";

export class CreateClientiDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  name: string;

  @ValidateNested()
  @Type(() => CreatePuntiMappaDto)
  geoPoint: CreatePuntiMappaDto;
}
