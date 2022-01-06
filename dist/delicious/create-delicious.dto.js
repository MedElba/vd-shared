var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsString, ValidateNested } from 'class-validator';
import { IFood, ISocialIcon } from '../common/templates.model';
export class CreateDeliciousDto {
    approved;
    name;
    user_id;
    client_id;
    logo;
    bannerHeroTitle;
    bannerHeroSubtitle;
    bannerOptionalText;
    bannerImgUrl;
    aboutHeroTitle;
    aboutHeroSubtitle;
    aboutTitle;
    aboutDescription;
    aboutImgUrl;
    eventHeroTitle;
    eventHeroSubtitle;
    eventHeroImgUrl;
    eventImgUrl;
    eventName;
    eventDescription;
    eventPlace;
    eventTime;
    menuHeroTitle;
    menuHeroSubtitle;
    contactHeroTitle;
    contactHeroSubtitle;
    contactPhone;
    contactOpenDays;
    contactClosedDays;
    footerHetoTitle;
    footerHeroAddress;
    footerLastSentence;
    aboutPOI;
    menuPlates;
    footerSocials;
    get clFooterSocials() {
        return JSON.stringify(this.footerSocials);
    }
    get clAboutPOI() {
        return JSON.stringify(this.aboutPOI);
    }
    get clMenuPlates() {
        return JSON.stringify(this.menuPlates);
    }
}
__decorate([
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateDeliciousDto.prototype, "approved", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "user_id", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "client_id", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "logo", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "bannerHeroTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "bannerHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "bannerOptionalText", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "bannerImgUrl", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "aboutHeroTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "aboutHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "aboutTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "aboutDescription", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "aboutImgUrl", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventHeroTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventHeroImgUrl", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventImgUrl", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventName", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventDescription", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventPlace", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "eventTime", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "menuHeroTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "menuHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "contactHeroTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "contactHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "contactPhone", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "contactOpenDays", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "contactClosedDays", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "footerHetoTitle", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "footerHeroAddress", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    __metadata("design:type", String)
], CreateDeliciousDto.prototype, "footerLastSentence", void 0);
__decorate([
    ApiProperty(),
    IsString({ each: true }),
    __metadata("design:type", Array)
], CreateDeliciousDto.prototype, "aboutPOI", void 0);
__decorate([
    ApiProperty(),
    ValidateNested({ each: true }),
    Type(() => IFood),
    __metadata("design:type", Array)
], CreateDeliciousDto.prototype, "menuPlates", void 0);
__decorate([
    ApiProperty(),
    ValidateNested({ each: true }),
    Type(() => ISocialIcon),
    __metadata("design:type", Array)
], CreateDeliciousDto.prototype, "footerSocials", void 0);
//# sourceMappingURL=create-delicious.dto.js.map