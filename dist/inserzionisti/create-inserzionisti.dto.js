"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInserzionistiDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const title_type_1 = require("../common/constants/title-type");
const transforms_decorator_1 = require("../decorators/transforms.decorator");
const create_puntimappa_dto_1 = require("../puntimappa/create-puntimappa.dto");
class CreateInserzionistiDto {
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
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateInserzionistiDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: title_type_1.TitleType }),
    (0, class_validator_1.IsEnum)(title_type_1.TitleType),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "ragioneSociale", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "locationPlace", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "comeRaggiungerci", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialFacebook", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialLinkedin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialInstagram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialGoogleplus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "socialTwitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "descriptionShort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "descriptionFull", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "logoImg", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "locationImg", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzionistiDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_puntimappa_dto_1.CreatePuntiMappaDto),
    __metadata("design:type", create_puntimappa_dto_1.CreatePuntiMappaDto)
], CreateInserzionistiDto.prototype, "geoPoint", void 0);
exports.CreateInserzionistiDto = CreateInserzionistiDto;
//# sourceMappingURL=create-inserzionisti.dto.js.map