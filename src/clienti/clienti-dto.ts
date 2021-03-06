import { AbstractDto } from "../common/abstract.dto";
import { PuntiMappaDto } from "../puntimappa/puntimappa-dto";

export class ClientiDto extends AbstractDto {
  name: string;

  geoPoint: PuntiMappaDto;
}
