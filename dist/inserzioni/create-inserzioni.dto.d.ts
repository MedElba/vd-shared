import { CreatePuntiMappaDto } from "../puntimappa/create-puntimappa.dto";
export declare class CreateInserzioniDto {
    active: boolean;
    name: string;
    title: string;
    description: string;
    images: string;
    startDate: Date;
    endDate: Date;
    socialFacebook?: string;
    socialInstagram?: string;
    socialGoogleplus?: string;
    socialTwitter?: string;
    contratto_id: string;
    video_id: string;
    geoPoint: CreatePuntiMappaDto;
}
