import { AbstractDto } from "../common/abstract.dto";
import type { IFood, ISocialIcon } from "../common/templates.model";

export class DeliciousDto extends AbstractDto {
  approved: boolean;

  name: string;

  user_id: string;

  client_id: string;

  logo: string;

  bannerHeroTitle: string;

  bannerHeroSubtitle: string;

  bannerOptionalText: string;

  bannerImgUrl: string;

  aboutHeroTitle: string;

  aboutHeroSubtitle: string;

  aboutTitle: string;

  aboutDescription: string;

  aboutImgUrl: string;

  eventHeroTitle: string;

  eventHeroSubtitle: string;

  eventHeroImgUrl: string;

  eventImgUrl: string;

  eventName: string;

  eventDescription: string;

  eventPlace: string;

  eventTime: string;

  menuHeroTitle: string;

  menuHeroSubtitle: string;

  contactHeroTitle: string;

  contactHeroSubtitle: string;

  contactPhone: string;

  contactOpenDays: string;

  contactClosedDays: string;

  footerHetoTitle: string;

  footerHeroAddress: string;

  footerLastSentence: string;

  aboutPOI: string[];

  menuPlates: IFood[];

  footerSocials: ISocialIcon[];

  clAboutPOI: string;

  clMenuPlates: string;

  clFooterSocials: string;
}
