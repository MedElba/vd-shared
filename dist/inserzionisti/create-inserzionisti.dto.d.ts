import { TitleType } from '../common/constants/title-type';
import { CreatePuntiMappaDto } from '../puntimappa/create-puntimappa.dto';
export declare class CreateInserzionistiDto {
    active: boolean;
    name: string;
    title: TitleType;
    ragioneSociale: string;
    surname: string;
    locationPlace?: string;
    comeRaggiungerci?: string;
    email: string;
    phone: string;
    website?: string;
    socialFacebook?: string;
    socialLinkedin?: string;
    socialInstagram?: string;
    socialGoogleplus?: string;
    socialTwitter?: string;
    descriptionShort: string;
    descriptionFull: string;
    logoImg?: string;
    locationImg?: string;
    images?: string;
    geoPoint: CreatePuntiMappaDto;
}
