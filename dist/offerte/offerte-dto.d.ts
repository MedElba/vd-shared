import { AbstractDto } from '../common/abstract.dto';
import { InserzioniDto } from '../inserzioni/inserzioni-dto';
export declare class OfferteDto extends AbstractDto {
    active: boolean;
    name: string;
    images: string;
    description: string;
    startDate: Date;
    endDate: Date;
    inserzione: InserzioniDto;
}
