import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../common/abstract.dto';
import type { IFood, ISocialIcon } from '../common/templates.model';

export class DeliciousDto extends AbstractDto {
  @ApiProperty()
  approved: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  client_id: string;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  bannerHeroTitle: string;

  @ApiProperty()
  bannerHeroSubtitle: string;

  @ApiProperty()
  bannerOptionalText: string;

  @ApiProperty()
  bannerImgUrl: string;

  @ApiProperty()
  aboutHeroTitle: string;

  @ApiProperty()
  aboutHeroSubtitle: string;

  @ApiProperty()
  aboutTitle: string;

  @ApiProperty()
  aboutDescription: string;

  @ApiProperty()
  aboutImgUrl: string;

  @ApiProperty()
  eventHeroTitle: string;

  @ApiProperty()
  eventHeroSubtitle: string;

  @ApiProperty()
  eventHeroImgUrl: string;

  @ApiProperty()
  eventImgUrl: string;

  @ApiProperty()
  eventName: string;

  @ApiProperty()
  eventDescription: string;

  @ApiProperty()
  eventPlace: string;

  @ApiProperty()
  eventTime: string;

  @ApiProperty()
  menuHeroTitle: string;

  @ApiProperty()
  menuHeroSubtitle: string;

  @ApiProperty()
  contactHeroTitle: string;

  @ApiProperty()
  contactHeroSubtitle: string;

  @ApiProperty()
  contactPhone: string;

  @ApiProperty()
  contactOpenDays: string;

  @ApiProperty()
  contactClosedDays: string;

  @ApiProperty()
  footerHetoTitle: string;

  @ApiProperty()
  footerHeroAddress: string;

  @ApiProperty()
  footerLastSentence: string;

  @ApiProperty()
  aboutPOI: string[];

  @ApiProperty()
  menuPlates: IFood[];

  @ApiProperty()
  footerSocials: ISocialIcon[];

  @ApiProperty()
  clAboutPOI: string;

  @ApiProperty()
  clMenuPlates: string;

  @ApiProperty()
  clFooterSocials: string;
}
