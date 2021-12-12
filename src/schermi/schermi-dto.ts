import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import { GruppiDto } from '../gruppi/gruppi-dto';
import { ClientiDto } from '../clienti/clienti-dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';

export class SchermiDto extends AbstractDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  gruppo: GruppiDto;

  @ApiProperty()
  cliente: ClientiDto;

  @ApiPropertyOptional()
  geoPoint: PuntiMappaDto;
}
