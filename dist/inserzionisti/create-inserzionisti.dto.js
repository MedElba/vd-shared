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
import { Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested, } from 'class-validator';
import { TitleType } from '../common/constants/title-type';
import { Trim } from '../decorators/transforms.decorator';
import { CreatePuntiMappaDto } from '../puntimappa/create-puntimappa.dto';
export class CreateInserzionistiDto {
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
    ApiProperty(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateInserzionistiDto.prototype, "active", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    IsNotEmpty(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "name", void 0);
__decorate([
    ApiProperty({ enum: TitleType }),
    IsEnum(TitleType),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "title", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "ragioneSociale", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "surname", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "locationPlace", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "comeRaggiungerci", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    IsNotEmpty(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "email", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "phone", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "website", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialFacebook", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialLinkedin", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialInstagram", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialGoogleplus", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialTwitter", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "descriptionShort", void 0);
__decorate([
    ApiProperty(),
    IsString(),
    Trim(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "descriptionFull", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "logoImg", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "locationImg", void 0);
__decorate([
    ApiPropertyOptional(),
    IsString(),
    Trim(),
    IsOptional(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "images", void 0);
__decorate([
    ApiPropertyOptional(),
    ValidateNested(),
    Type(() => CreatePuntiMappaDto),
    __metadata("design:type", CreatePuntiMappaDto)
], CreateInserzionistiDto.prototype, "geoPoint", void 0);
//# sourceMappingURL=create-inserzionisti.dto.js.map