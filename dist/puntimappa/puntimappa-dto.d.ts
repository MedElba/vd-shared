import { AbstractDto } from "../common/abstract.dto";
export declare class PuntiMappaDto extends AbstractDto {
    lat: number;
    lng: number;
    label: string;
    countryCode: string;
    region: string;
    province: string;
    city: string;
    zip: string;
    street: string;
    addNum: string;
    json?: string;
}
