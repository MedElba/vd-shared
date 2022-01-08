import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

import { Trim } from "../decorators/transforms.decorator";
import { CreatePuntiMappaDto } from "../puntimappa/create-puntimappa.dto";

export class CreateSchermiDto {
  active: boolean;

  @IsNotEmpty()
  @IsString()
  @Trim()
  name: string;

  @IsString()
  @Trim()
  gruppo_id: string;

  @IsString()
  @Trim()
  cliente_id: string;

  @ValidateNested()
  @Type(() => CreatePuntiMappaDto)
  geoPoint: CreatePuntiMappaDto;
}
