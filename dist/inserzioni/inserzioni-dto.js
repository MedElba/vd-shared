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
exports.InserzioniDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const abstract_dto_1 = require("../common/abstract.dto");
const contratti_dto_1 = require("../contratti/contratti-dto");
const puntimappa_dto_1 = require("../puntimappa/puntimappa-dto");
const video_dto_1 = require("../video/video-dto");
class InserzioniDto extends abstract_dto_1.AbstractDto {
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
    contratto;
    video;
    tags;
    geoPoint;
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], InserzioniDto.prototype, "active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InserzioniDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], InserzioniDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialFacebook", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialInstagram", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialGoogleplus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], InserzioniDto.prototype, "socialTwitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", contratti_dto_1.ContrattiDto)
], InserzioniDto.prototype, "contratto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", video_dto_1.VideoDto)
], InserzioniDto.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], InserzioniDto.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", puntimappa_dto_1.PuntiMappaDto)
], InserzioniDto.prototype, "geoPoint", void 0);
exports.InserzioniDto = InserzioniDto;
//# sourceMappingURL=inserzioni-dto.js.map