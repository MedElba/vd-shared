import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsString, ValidateNested } from 'class-validator';

import { IFood, ISocialIcon } from '../common/templates.model';

export class CreateDeliciousDto {
  @ApiProperty()
  @IsBoolean()
  approved: boolean;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  client_id: string;

  @ApiProperty()
  @IsString()
  logo: string;

  @ApiProperty()
  @IsString()
  bannerHeroTitle: string;

  @ApiProperty()
  @IsString()
  bannerHeroSubtitle: string;

  @ApiProperty()
  @IsString()
  bannerOptionalText: string;

  @ApiProperty()
  @IsString()
  bannerImgUrl: string;

  @ApiProperty()
  @IsString()
  aboutHeroTitle: string;

  @ApiProperty()
  @IsString()
  aboutHeroSubtitle: string;

  @ApiProperty()
  @IsString()
  aboutTitle: string;

  @ApiProperty()
  @IsString()
  aboutDescription: string;

  @ApiProperty()
  @IsString()
  aboutImgUrl: string;

  @ApiProperty()
  @IsString()
  eventHeroTitle: string;

  @ApiProperty()
  @IsString()
  eventHeroSubtitle: string;

  @ApiProperty()
  @IsString()
  eventHeroImgUrl: string;

  @ApiProperty()
  @IsString()
  eventImgUrl: string;

  @ApiProperty()
  @IsString()
  eventName: string;

  @ApiProperty()
  @IsString()
  eventDescription: string;

  @ApiProperty()
  @IsString()
  eventPlace: string;

  @ApiProperty()
  @IsString()
  eventTime: string;

  @ApiProperty()
  @IsString()
  menuHeroTitle: string;

  @ApiProperty()
  @IsString()
  menuHeroSubtitle: string;

  @ApiProperty()
  @IsString()
  contactHeroTitle: string;

  @ApiProperty()
  @IsString()
  contactHeroSubtitle: string;

  @ApiProperty()
  @IsString()
  contactPhone: string;

  @ApiProperty()
  @IsString()
  contactOpenDays: string;

  @ApiProperty()
  @IsString()
  contactClosedDays: string;

  @ApiProperty()
  @IsString()
  footerHetoTitle: string;

  @ApiProperty()
  @IsString()
  footerHeroAddress: string;

  @ApiProperty()
  @IsString()
  footerLastSentence: string;

  @ApiProperty()
  @IsString({ each: true })
  aboutPOI: string[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => IFood)
  menuPlates: IFood[];

  @ApiProperty()
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
