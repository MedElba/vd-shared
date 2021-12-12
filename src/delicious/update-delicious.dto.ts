import { PartialType } from '@nestjs/swagger';
import { CreateDeliciousDto } from './create-delicious.dto';

export class UpdateDeliciousDto extends PartialType(CreateDeliciousDto) {}
