import { PartialType } from '@nestjs/swagger';
import { CreateContrattiDto } from './create-contratti.dto';

export class UpdateContrattiDto extends PartialType(CreateContrattiDto) {}
