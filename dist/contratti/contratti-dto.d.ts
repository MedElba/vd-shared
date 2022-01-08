import { AbstractDto } from "../common/abstract.dto";
import { InserzionistiDto } from "../inserzionisti/inserzionisti-dto";
export declare class ContrattiDto extends AbstractDto {
    active: boolean;
    date: Date;
    onlineStartDate: Date;
    onlineEndDate: Date;
    inserzionista: InserzionistiDto;
    price: number;
}
