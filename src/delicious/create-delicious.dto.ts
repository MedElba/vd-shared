import { Type } from "class-transformer";
import { IsBoolean, IsString, ValidateNested } from "class-validator";

import { IFood, ISocialIcon } from "../common/templates.model";

export class CreateDeliciousDto {
  @IsBoolean()
  approved: boolean;

  @IsString()
  name: string;

  @IsString()
  user_id: string;

  @IsString()
  client_id: string;

  @IsString()
  logo: string;

  @IsString()
  bannerHeroTitle: string;

  @IsString()
  bannerHeroSubtitle: string;

  @IsString()
  bannerOptionalText: string;

  @IsString()
  bannerImgUrl: string;

  @IsString()
  aboutHeroTitle: string;

  @IsString()
  aboutHeroSubtitle: string;

  @IsString()
  aboutTitle: string;

  @IsString()
  aboutDescription: string;

  @IsString()
  aboutImgUrl: string;

  @IsString()
  eventHeroTitle: string;

  @IsString()
  eventHeroSubtitle: string;

  @IsString()
  eventHeroImgUrl: string;

  @IsString()
  eventImgUrl: string;

  @IsString()
  eventName: string;

  @IsString()
  eventDescription: string;

  @IsString()
  eventPlace: string;

  @IsString()
  eventTime: string;

  @IsString()
  menuHeroTitle: string;

  @IsString()
  menuHeroSubtitle: string;

  @IsString()
  contactHeroTitle: string;

  @IsString()
  contactHeroSubtitle: string;

  @IsString()
  contactPhone: string;

  @IsString()
  contactOpenDays: string;

  @IsString()
  contactClosedDays: string;

  @IsString()
  footerHetoTitle: string;

  @IsString()
  footerHeroAddress: string;

  @IsString()
  footerLastSentence: string;

  @IsString({ each: true })
  aboutPOI: string[];

  @ValidateNested({ each: true })
  @Type(() => IFood)
  menuPlates: IFood[];

  @ValidateNested({ each: true })
  @Type(() => ISocialIcon)
  footerSocials: ISocialIcon[];

  get clFooterSocials(): string {
    return JSON.stringify(this.footerSocials);
  }

  get clAboutPOI(): string {
    return JSON.stringify(this.aboutPOI);
  }

  get clMenuPlates(): string {
    return JSON.stringify(this.menuPlates);
  }
}
