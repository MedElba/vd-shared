import { PartialType } from '@nestjs/swagger';

import { CreatePuntiMappaDto } from './create-puntimappa.dto';

export class UpdatePuntiMappaDto extends PartialType(CreatePuntiMappaDto) {}
