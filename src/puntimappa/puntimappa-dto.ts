import { AbstractDto } from "../common/abstract.dto";

export class PuntiMappaDto extends AbstractDto {
  lat: number;

  lng: number;

  label: string; // Via Giuseppe Garibaldi 295, 92021, Aragona, Agrigento, ITA

  countryCode: string; // ITA

  region: string; // Sicilia

  province: string; // Agrigento

  city: string; // Aragona

  zip: string; // 92021

  street: string; // Via Giuseppe Garibaldi

  addNum: string; // 295

  json?: string;
}
