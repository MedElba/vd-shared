import { PartialType } from '@nestjs/swagger';

import { CreateInserzioniDto } from './create-inserzioni.dto';

export class UpdateInserzioniDto extends PartialType(CreateInserzioniDto) {}
