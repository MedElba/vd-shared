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
import { AbstractDto } from '../common/abstract.dto';
export class DeliciousDto extends AbstractDto {
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
    clAboutPOI;
    clMenuPlates;
    clFooterSocials;
}
__decorate([
    ApiProperty(),
    __metadata("design:type", Boolean)
], DeliciousDto.prototype, "approved", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "name", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "user_id", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "client_id", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "logo", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "bannerHeroTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "bannerHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "bannerOptionalText", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "bannerImgUrl", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "aboutHeroTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "aboutHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "aboutTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "aboutDescription", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "aboutImgUrl", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventHeroTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventHeroImgUrl", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventImgUrl", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventName", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventDescription", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventPlace", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "eventTime", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "menuHeroTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "menuHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "contactHeroTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "contactHeroSubtitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "contactPhone", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "contactOpenDays", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "contactClosedDays", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "footerHetoTitle", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "footerHeroAddress", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "footerLastSentence", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Array)
], DeliciousDto.prototype, "aboutPOI", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Array)
], DeliciousDto.prototype, "menuPlates", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", Array)
], DeliciousDto.prototype, "footerSocials", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "clAboutPOI", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "clMenuPlates", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], DeliciousDto.prototype, "clFooterSocials", void 0);
//# sourceMappingURL=delicious-dto.js.map