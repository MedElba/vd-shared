import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';

export class ClientiDto extends AbstractDto {
  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  geoPoint: PuntiMappaDto;
}
