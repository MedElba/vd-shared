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
exports.CreateInserzioniDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const transforms_decorator_1 = require("../decorators/transforms.decorator");
const create_puntimappa_dto_1 = require("../puntimappa/create-puntimappa.dto");
class CreateInserzioniDto {
    active;
    name;
    title;
    description;
    images;
    startDate;
    endDate;
    socialFacebook;
    socialInstagram;
    socialGoogleplus;
    socialTwitter;
    contratto_id;
    video_id;
    geoPoint;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateInserzioniDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateInserzioniDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateInserzioniDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialFacebook", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialInstagram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialGoogleplus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, transforms_decorator_1.Trim)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "socialTwitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "contratto_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInserzioniDto.prototype, "video_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_puntimappa_dto_1.CreatePuntiMappaDto),
    __metadata("design:type", create_puntimappa_dto_1.CreatePuntiMappaDto)
], CreateInserzioniDto.prototype, "geoPoint", void 0);
exports.CreateInserzioniDto = CreateInserzioniDto;
//# sourceMappingURL=create-inserzioni.dto.js.map