import { PartialType } from '@nestjs/swagger';
import { CreateGruppiDto } from './create-gruppi.dto';

export class UpdateGruppiDto extends PartialType(CreateGruppiDto) {}
