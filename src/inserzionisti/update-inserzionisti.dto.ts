import { PartialType } from '@nestjs/swagger';

import { CreateInserzionistiDto } from './create-inserzionisti.dto';

export class UpdateInserzionistiDto extends PartialType(
  CreateInserzionistiDto,
) {}
