var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TitleType } from '../common/constants/title-type';
import { AbstractDto } from '../common/abstract.dto';
import { PuntiMappaDto } from '../puntimappa/puntimappa-dto';
export class InserzionistiDto extends AbstractDto {
    active;
    name;
    title;
    ragioneSociale;
    surname;
    locationPlace;
    comeRaggiungerci;
    email;
    phone;
    website;
    socialFacebook;
    socialLinkedin;
    socialInstagram;
    socialGoogleplus;
    socialTwitter;
    descriptionShort;
    descriptionFull;
    logoImg;
    locationImg;
    images;
    geoPoint;
}
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", Boolean)
], InserzionistiDto.prototype, "active", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional({ enum: TitleType }),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "title", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "ragioneSociale", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "surname", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "locationPlace", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "comeRaggiungerci", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "email", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "phone", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "website", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "socialFacebook", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "socialLinkedin", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "socialInstagram", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "socialGoogleplus", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "socialTwitter", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "descriptionShort", void 0);
__decorate([
    ApiProperty(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "descriptionFull", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "logoImg", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "locationImg", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", String)
], InserzionistiDto.prototype, "images", void 0);
__decorate([
    ApiPropertyOptional(),
    __metadata("design:type", PuntiMappaDto)
], InserzionistiDto.prototype, "geoPoint", void 0);
//# sourceMappingURL=inserzionisti-dto.js.map