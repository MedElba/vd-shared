import { AbstractDto } from "../common/abstract.dto";
import { ContrattiDto } from "../contratti/contratti-dto";
import { PuntiMappaDto } from "../puntimappa/puntimappa-dto";
import type { TagsDto } from "../tags/tags-dto";
import { VideoDto } from "../video/video-dto";

export class InserzioniDto extends AbstractDto {
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

  contratto: ContrattiDto;

  video: VideoDto;

  tags?: TagsDto[];

  geoPoint: PuntiMappaDto;
}
