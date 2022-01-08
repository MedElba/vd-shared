import { CreatePuntiMappaDto } from "../puntimappa/create-puntimappa.dto";
export declare class CreateSchermiDto {
    active: boolean;
    name: string;
    gruppo_id: string;
    cliente_id: string;
    geoPoint: CreatePuntiMappaDto;
}
