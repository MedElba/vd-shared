import { AbstractDto } from '../common/abstract.dto';
import { GruppiDto } from '../gruppi/gruppi-dto';
import { ClientiDto } from '../clienti/clienti-dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';
export declare class SchermiDto extends AbstractDto {
    active: boolean;
    name: string;
    gruppo: GruppiDto;
    cliente: ClientiDto;
    geoPoint: PuntiMappaDto;
}
